import { generateSchema } from "@/lib/service/schemas/generateSchema";
import { address, base_url, contact_number, email } from "@/paths";
import { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "react-schemaorg";
import { WebPage, BreadcrumbList } from "schema-dts";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Karnal Web Tech's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.",
  keywords: ["privacy-policy"],
  openGraph: {
    title: "Privacy Policy",
    description:
      "Read Karnal Web Tech's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.",
    url: `${base_url}/privacy-policy`,
    siteName: "Karnal Web Tech",
    images: [
      {
        url: "/assets/privacy-policy.webp",
        width: 1200,
        height: 630,
        alt: "Karnal Web tech contact-us",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KarnalWebTech",
    creator: "@KarnalWebTech",
    title: "Privacy Policy",
    description:
      "Read Karnal Web Tech's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.",
    images: ["/assets/privacy-policy.webp"],
  },
  alternates: {
    canonical: `${base_url}/privacy-policy`,
  },
};
export default function PrivacyPolicy() {
  const schema: any = generateSchema({
    title: "Privacy Policy",
    description:
      "Read Karnal Web Tech's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.",
    slug: "privacy-policy",
    path: "/assets/privacy-policy.webp",
  });
  return (
    <>
      {" "}
      {schema[0] && <JsonLd<WebPage> item={schema[0]} />}
      {schema[1] && <JsonLd<BreadcrumbList> item={schema[1]} />}
      <div className="bg-gray-100">
        <div className="bg-gray-100 text-gray-800">
          <div className="bg-black text-white py-6">
            <div className="container mx-auto text-center">
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
              <p className="text-sm mt-1">Effective Date: [Insert Date]</p>
            </div>
          </div>
          <div className="container mx-auto px-6 py-10">
            {/* <!-- Introduction Section --> */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-700 leading-6">
                Welcome to <span className="font-bold">Karnal Web Tech</span>. We
                are committed to protecting your privacy and ensuring the security
                of your personal information. This Privacy Policy outlines how we
                collect, use, and safeguard your data when you visit our website or
                use our services.
              </p>
            </section>

            {/* <!-- Information We Collect --> */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone
                  number, billing information.
                </li>
                <li>
                  <strong>Non-Personal Information:</strong> Browser type, IP
                  address, device information.
                </li>
                <li>
                  <strong>Cookies:</strong> Used to enhance your browsing experience
                  and analyze user behavior.
                </li>
              </ul>
            </section>

            {/* <!-- How We Use Your Information --> */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>To Provide and Improve Services:</strong> Process
                  transactions, improve website performance.
                </li>
                <li>
                  <strong>Marketing and Communication:</strong> Send updates or
                  promotional emails.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Fulfill legal obligations and
                  prevent fraud.
                </li>
              </ul>
            </section>

            {/* <!-- Data Security --> */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-gray-700 leading-6">
                We implement robust security measures to protect your data from
                unauthorized access. However, no method of transmission over the
                Internet or electronic storage is 100% secure.
              </p>
            </section>

            {/* <!-- Your Rights --> */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Access:</strong> Request access to the personal data we
                  have collected.
                </li>
                <li>
                  <strong>Correction:</strong> Request corrections to inaccurate or
                  incomplete data.
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal data,
                  subject to legal obligations.
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from promotional
                  communications.
                </li>
              </ul>
            </section>

            {/* <!-- Changes to This Policy --> */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-6">
                We may update this Privacy Policy periodically. Any changes will be
                posted here. Please review this page regularly to stay informed.
              </p>
            </section>

            {/* <!-- Contact Us --> */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-6">
                If you have any questions about this Privacy Policy, contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong>{" "}
                  <Link href={`mailto:${email}`} className="text-blue-600">
                    {email}
                  </Link>
                </p>
                <p>
                  <strong>Phone:</strong>
                  <Link href={`tel:${contact_number}`}>{contact_number}</Link>
                </p>
                <p>
                  <strong>Address:</strong> {address}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
