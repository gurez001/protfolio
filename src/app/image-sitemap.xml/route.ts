import { MetadataRoute } from "next";
import { fetchData } from "@/lib/api";

interface Images {
  path: string;
  title: string;
  caption: string;
}
type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

// Implement a simple cache
const cache: { [key: string]: { data: any; timestamp: number } } = {};
const CACHE_TTL = 3600000; // 1 hour in milliseconds

async function cachedFetchData(endpoint: string) {
  const now = Date.now();
  if (cache[endpoint] && now - cache[endpoint].timestamp < CACHE_TTL) {
    return cache[endpoint].data;
  }

  try {
    const data = await fetchData(endpoint);
    cache[endpoint] = { data, timestamp: data?.updatedAt };
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

const createSitemapEntry = (
  url: string,
  title:string,
  caption: string,
  changeFrequency: ChangeFrequency,
  priority: number
): any => ({
  url: url.replace(/\/+$/, ""),
  title,
  caption,
  changeFrequency,
  priority,
});

const revalidate = 3600; // Revalidate every hour
const escapeXml = (unsafe: string): string =>
  unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");

async function image_sitemap_data(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://thesalesmens.com";

  const [imageData] = await Promise.all([cachedFetchData("image/image-url")]);
  const imageSitemap =
    (imageData as Images[])?.map((item) => {
      const url = `${baseUrl}/${item.path}`;
      const title = item.title;
      const caption = item.caption ;
      return createSitemapEntry(url, title, caption, "weekly", 0.7);
    }) || [];

  return [...imageSitemap];
}
export async function GET() {
  // This function would typically fetch image data from your database or CMS

  const images: any = await image_sitemap_data();

  // Generate the XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${images
        .map(
          (item: any) => `
         <url>
          <loc>${escapeXml(item.url)}</loc>
           <image:image>
              <image:loc>${escapeXml(item.url)}</image:loc>
              <image:title>${item.title || "Karnal web tech"}</image:title>
               <image:caption>${
                 item?.description || "Karnal web tech"
               }</image:caption>
                 ${item?.license ? `<image:license>${item.license}</image:license>` : ""}
            </image:image>
        </url>
        `
        )
        .join("")}
    </urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
