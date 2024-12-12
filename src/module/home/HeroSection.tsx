import InfintySliderTb from "@/components/common/InfintySliderTb"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ArrowUpRight, Moon, MoveRight, Plus, Star } from 'lucide-react'
import Image from "next/image"
import { ProjectStatusCard } from "./project-status-card"
import TestimonialSlider from "@/components/common/testimonial-slider"
// import { TrekCarousel } from "./trek-carousel"

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100">
    <div className="flex-1 p-4 lg:p-6 space-y-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0  lg:gap-6">
          <Card className="relative col-span-2 bg-[#E8EDF0] mb-4 lg:mb-0 overflow-hidden"
           
        >
          <div className="absolute z-0" style={{

                    backgroundImage: "url(/assets/composition-with.webp)",
                    perspective: "1000px",
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                   filter: "blur(3px)",
                   width:"100%",
                   height:"100%",
                  }}>

          </div>
            <div className="p-8 flex justify-between items-start h-full relative bg-black/70">
              <div className="space-y-6">
                <h1 className="text-5xl font-semibold text-gray-100">
                Your Business
           <br />
           Deserves to Shine
                </h1>
                <p className="mb-8 max-w-2xl text-base text-white md:text-lg">
           We empower startups and brands by creating innovative, engaging,
           and tailored software solutions that drive success and make an
           impact.
         </p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      // <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                      <Avatar key={i} className="w-10 h-10 border-1 border-white">
                      <AvatarImage src={`/assets/avatar.webp`} alt={`User ${i+1}`} />
                      <AvatarFallback>U{i+1}</AvatarFallback>
                    </Avatar>
                    ))}
                  </div>
                  <span className="text-base text-gray-100">
                    <span className="font-semibold">500+</span> Members
                  </span>
                </div>
                <Button variant="default" className="bg-black hover:bg-gray-200 hover:text-black text-white rounded-full">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
             
            </div>
          </Card>

          {/* Hydration Status */}
          <Card className="bg-black">
            {/* <div className="space-y-4">
              <div>
                <h3 className="font-medium">Hydration Status:</h3>
                <p className="text-sm text-gray-600">Drinking 500ml water daily boosts your energy and enhances your focus.</p>
              </div>
              <div className="grid grid-cols-5 gap-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 rounded ${i < 15 ? 'bg-white' : 'bg-white/30'}`}
                  />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">D</span>
                  <span className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center">W</span>
                  <span className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center">M</span>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-semibold">2.15L</span>
                  <span className="text-sm block">/Day</span>
                </div>
              </div>
            </div> */}
               <InfintySliderTb />
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6">
          {/* Sleep Section */}
          <Card className="p-6  mb-4 lg:mb-0">
            <div className="space-y-4">
            <div className="flex justify-between items-start">
            <div className="flex -space-x-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
              <Star className="h-4 w-4 text-yellow-400" />
            </div>  
          ))}
        </div>
        <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm font-medium">4.9</span>
          </div>
        </div>
              <h3 className="text-xl font-semibold">
              Experience the Excellence of Karnalweb Tech 
              </h3>
              <Button variant="outline" className="rounded-full">
          <Star className="mr-2 h-4 w-4" />
          Top-rated service
        </Button>
        <p className="text-sm text-gray-600">
          Discover innovative solutions and cutting-edge technology. Partner with Karnalweb Tech for unparalleled digital experiences and robust web applications.
        </p>
            </div>
          </Card>
<div className="mb-4 lg:mb-0">
          {/* Calories Section */}
          <ProjectStatusCard
          totalProjects={124} 
          completedProjects={118}
          onTrackProjects={6}
          delayedProjects={1}
        />
</div>
<div className="mb-4 lg:mb-0">
            <TestimonialSlider/>
</div>
        </div>
      </div>
  </section>
  )
}


// interface StatCardProps {
//   label: string
//   value: string
//   bgColor: string
//   icon?: React.ReactNode
//   rating?: string
// }

// function StatCard({ label, value, bgColor, icon, rating }: StatCardProps) {
//   return (
//     <Card className={`p-6 ${bgColor} hover:scale-105 transition-transform duration-300`}>
//       <div className="flex justify-between items-start">
//         <div>
//           <div className="text-4xl font-bold">{value}</div>
//           <div className="text-sm text-muted-foreground mt-1">{label}</div>
//         </div>
//         {icon && (
//           <div className={`flex items-center gap-1 text-sm font-medium ${rating && "text-yellow"}`}>
//             {icon}
//             {rating}
//           </div>
//         )}
//       </div>
//     </Card>
//   )
// }



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
