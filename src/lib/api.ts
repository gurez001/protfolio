import { apiUrl } from "@/state/categorieApi";
import { notFound } from "next/navigation";

export async function fetchData(path: string): Promise<any> {
  try {
    // Make the API request
    const response = await fetch(`${apiUrl}/v2/${path}`, {
      next: { revalidate: 3600 }, // Cache revalidation interval
    });

    // If the response is a 404, trigger Next.js's notFound
    if (response.status === 404) {
      notFound();
    }

    // Check for other unsuccessful responses
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    // Return the parsed JSON data if the response is successful
    return await response.json();
  } catch (error) {
    // Log the error and provide a meaningful fallback or error message
    console.error("Error fetching data:", error);

    // Optionally, you could return a fallback object or value
    // depending on the requirements of your application.
    throw new Error("An unexpected error occurred while fetching data.");
  }
}
