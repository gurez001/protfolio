"use client"
import Carousel360 from "@/components/home/Carousel360";
import HearoSection from "@/components/home/HearoSection";
import Carousel from "@/module/common/Carousel";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   // Redirect to the CRM page
  //   router.push('/crm'); // Change this to your actual CRM page route
  // }, [router]);

  return <div>
    <HearoSection />
    <section>
      <div>
        <div>
          <div>
            <p>430+</p>
            <h2>Happy Clients</h2>
          </div>
        </div>
        <div>
          <div>
            <p>535+</p>
            <h2>Projects Completed</h2>
          </div>
        </div>
        <div>
          <div>
            <p>1179409+</p>
            <h2>Lines Coded</h2>
          </div>
        </div>
      </div>
    </section>
  </div>;
}
