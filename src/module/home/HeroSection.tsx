import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, MoveRight, Plus, Star } from 'lucide-react'
import Image from "next/image"
// import { TrekCarousel } from "./trek-carousel"

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white">
    <div className="container mx-auto px-4 py-12">
    <div className="flex relative items-center">
          {/* Text Content */}
          <div className="space-y-6 w-full md:w-1/2 lg:w-1/3">
            {/* Mobile Background Image */}
            <div className="block md:hidden z-0 absolute">
              <Image
                src="/assets/composition-with.webp"
                fill
                className="object-cover rounded-lg"
                priority
                alt="home"
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Find the right <span className="text-gray-500">course</span> for you
              </h1>
              <p className="text-lg text-muted-foreground">
                See your personalised recommendations based on your interests and goals
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-black hover:bg-gray-200 hover:text-black">
                  Discover Our Work
                </Button>
                <Button variant="link" className="text-black">
                  View our blog
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative hidden md:block w-full md:w-1/2 lg:w-2/3 aspect-[16/9]">
            <Image
              src="/assets/composition-with.webp"
              fill
              className="object-cover rounded-lg"
              priority
              alt="home"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 w-[100%] gap-4 pt-8">
            <Card className="p-6 bg-[#f8f9fa]">
              <div className="text-sm text-muted-foreground">subjects</div>
              <div className="text-3xl font-bold">+40</div>
            </Card>
            <Card className="p-6 bg-[#e9ecef]">
              <div className="text-sm text-muted-foreground">courses</div>
              <div className="text-3xl font-bold">+120</div>
            </Card>
            <Card className="p-6 bg-[#ffd43b]">
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Star className="h-4 w-4 fill-current" />
                5.0
              </div>
              <div className="text-3xl font-bold">+180k</div>
              <div className="text-sm text-muted-foreground">learner reviews</div>
            </Card>
          </div>
      <div>
     
      </div>
    </div>
  </div>
  )
}


// "use client";
// import React, { useCallback, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import Image from "next/image"
// import { Instagram, Linkedin } from 'lucide-react'
// import InfintySliderTb from "@/components/common/InfintySliderTb";
// export default function HeroSection() {
//   const router = useRouter();
//   const [isAnimating, setIsAnimating] = useState(false);
//   useEffect(() => {
//     setIsAnimating(true);
//   }, []);
//   const handleDiscoverClick = useCallback(() => {
//     router.push("/projects");
//   }, [router]);

//   return (
    
//     // <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
//     //   <div className="container px-4 md:px-6">
//     //     <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//     //       <div className="space-y-4">
//     //         <div className="space-y-2">
//     //           <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//     //             For Your <span className="text-pink-500">Pro</span>
//     //             <br />
//     //             Social Manager
//     //           </h1>
//     //           <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//     //             We blend insights and strategy to create digital products for
//     //             forward thinking organisations.
//     //           </p>
//     //         </div>
//     //         <Button className="bg-black text-white hover:bg-gray-900">
//     //           GET STARTED NOW
//     //         </Button>
//     //       </div>
//     //       <div className="relative aspect-square">
//     //         <div className="absolute right-0 top-0 h-full w-full rounded-full bg-gray-100">
//     //           <Image
//     //             alt="Social Manager"
//     //             className="rounded-full object-cover"
//     //             height={400}
//     //             src="/placeholder.svg"
//     //             width={400}
//     //           />
//     //           <div className="absolute -right-4 top-4">
//     //             <Linkedin className="h-8 w-8 text-blue-600" />
//     //           </div>
//     //           <div className="absolute -left-4 bottom-4">
//     //             <Instagram className="h-8 w-8 text-pink-600" />
//     //           </div>
//     //           <Card className="absolute -left-20 top-1/2 p-4 space-y-2">
//     //             <div className="flex items-center space-x-2">
//     //               <Image
//     //                 alt="Google Ads"
//     //                 className="rounded"
//     //                 height={24}
//     //                 src="/placeholder.svg"
//     //                 width={24}
//     //               />
//     //               <div className="text-sm font-medium">Google ads</div>
//     //             </div>
//     //             <div className="flex items-center">
//     //               <div className="text-sm">4.9</div>
//     //               <div className="text-xs text-gray-500 ml-1">
//     //                 (247 reviews)
//     //               </div>
//     //             </div>
//     //           </Card>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="grid gap-6 mt-12 md:grid-cols-3">
//     //       <Card className="p-6 space-y-2">
//     //         <h3 className="text-2xl font-bold">What We Do</h3>
//     //         <p className="text-gray-500 text-sm">
//     //           No credit currency relationship that last forever
//     //         </p>
//     //         <div className="grid grid-cols-3 gap-2 mt-4">
//     //           {[1, 2, 3].map((i) => (
//     //             <div
//     //               key={i}
//     //               className="aspect-square rounded-full bg-gray-100"
//     //             />
//     //           ))}
//     //         </div>
//     //       </Card>
//     //       <Card className="p-6 space-y-2">
//     //         <h3 className="text-4xl font-bold">2M+</h3>
//     //         <p className="text-gray-500">Trusted Users</p>
//     //       </Card>
//     //       <Card className="p-6 space-y-2">
//     //         <h3 className="text-4xl font-bold">95%</h3>
//     //         <p className="text-gray-500">Return Customers</p>
//     //       </Card>
//     //     </div>
//     //     <Card className="mt-12 p-6">
//     //       <div className="flex items-center space-x-2">
//     //         <div className="h-8 w-8 rounded-full bg-gray-100" />
//     //         <div className="h-8 w-8 rounded-full bg-gray-100" />
//     //         <div className="h-8 w-8 rounded-full bg-gray-100" />
//     //         <span className="text-sm font-medium ml-2">ABOUT US</span>
//     //       </div>
//     //       <h3 className="text-xl font-medium mt-4">
//     //         We Start With Discovery Call To Understand
//     //       </h3>
//     //     </Card>
//     //   </div>
//     // </section>

//     // <div
//     //   className={`relative overflow-hidden bg-cover bg-no-repeat ${isAnimating ? 'animate-background' : ''
//     //     }`}
//     //   style={{
//     //     backgroundImage: "url(/assets/background.webp)",
//     //     perspective: "1000px",
//     //   }}
//     // >
//     //   <div className="bg-black/60">
//     //     <div className="m-auto flex max-w-[1380px] flex-col items-center py-8 lg:min-h-[650px] lg:flex-row">
//     //       <div className="relative z-10 w-full p-2 text-center lg:w-2/5 lg:text-end">
//     //         <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl">
//     //           Your Business
//     //           <br />
//     //           Deserves to Shine
//     //         </h1>
//     //         <p className="mb-8 max-w-2xl text-base text-white md:text-lg">
//     //           We empower startups and brands by creating innovative, engaging,
//     //           and tailored software solutions that drive success and make an
//     //           impact.
//     //         </p>
//     //         <Button
//     //           onClick={handleDiscoverClick}
//     //           size="lg"
//     //           className="bg-white text-black hover:bg-indigo-100"
//     //         >
//     //           Discover Our Work
//     //         </Button>
//     //       </div>
//     //       <div className="w-full p-4 lg:w-3/5">
//     //         <InfintySliderTb />
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// }
