import React from "react"
import Image from "next/image"
import InfintySliderTb from "@/components/common/InfintySliderTb"
import { Btn_n_Navigation } from "@/components/common/helpers/btn-n-navigation"

export default function HeroSection() {

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 animate-background">
        <Image
          src="/assets/background.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          quality={50}
        />
      </div>
      <div className="relative bg-black/60">
        <div className="m-auto flex max-w-[1380px] flex-col items-center py-8 lg:min-h-[650px] lg:flex-row">
          <div className="relative z-10 w-full p-2 text-center lg:w-2/5 lg:text-end">
            <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Your Business
              <br />
              Deserves to Shine
            </h1>
            <p className="mb-8 max-w-2xl text-base text-white md:text-lg">
              We empower startups and brands by creating innovative, engaging,
              and tailored software solutions that drive success and make an
              impact.
            </p>
            <Btn_n_Navigation title="Discover Our Work" link="projects" />
          </div>
          <div className="w-full p-4 lg:w-3/5">
            <InfintySliderTb />
          </div>
        </div>
      </div>
    </div>
  )
}

