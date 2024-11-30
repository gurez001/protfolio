import { fetchData } from "@/lib/api";
import Index from "@/module/blog/Index";
import { Metadata } from "next";
import { memo } from "react";

interface SlugPageProps {
  params: {
    categorie: string;
  };
}

// Corrected function name
export async function generateStaticParams() {
  const { data } = await fetchData(`categorie`);
  const result = data?.result || [];

  // Ensure result is an array before mapping
  if (!Array.isArray(result)) {
    throw new Error("Invalid result format");
  }

  // Map over result to extract slugs
  return result.map(({ slug }) => ({ categorie: slug })).slice(0, 30); // Include keys for dynamic routes
}

export async function generateMetadata({
  params: { categorie },
}: SlugPageProps): Promise<Metadata> {
  try {
    const { data } = await fetchData(`categorie/shop/${categorie}`);

    return {
      title: data?.title || "Default Title",
      description: data?.meta_description || "Default Description",
      openGraph: {
        images: [{ url: data?.canonical_url || "/default-image.jpg" }],
      },
    };
  } catch {
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }
}

// Memoized component for better performance
const MemoizedBlogPage = memo(Index);

export default async function Page({ params: { categorie } }: SlugPageProps) {
  const { data } = await fetchData(`categorie/shop/${categorie}`);
  return (
    <div>
      <MemoizedBlogPage cat_id={data?._id} />
    </div>
  );
}
