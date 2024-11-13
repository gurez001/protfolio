import React from 'react'
import ServiceSecton from './ServiceSecton'
import TechnologyStack from './TechnologyStack'
import ContsctUs from './ContsctUs'
import HeroSection from './HeroSection'
import OurProjects from './OurProjects'
import OurBlog from './OurBlog'
import ChooseUs from './ChooseUs'
import InfintySliderLR from '@/module/common/InfintySliderLR'
import FAQAccordion from '@/module/common/FAQAccordion'
import Image from 'next/image'

const Index = () => {
    return (
        <>
            <HeroSection />
            <InfintySliderLR />
            <ServiceSecton />
            <TechnologyStack />
            <ChooseUs />
            <OurProjects />
            <OurBlog />
            <div className='block max-w-[1380px] m-auto lg:flex'>
                <div className='w-full lg:w-[49]'>
                    <FAQAccordion />
                </div>
                <div className='w-full lg:w-[49]'>
                    <Image
                        src={"/upload/isometric-customer-support-faq-composition-with-editable-text-gear-icons-small-people-with-laptop_1284-56825.jpg"}
                        alt={"faq"}
                        width={100}
                        height={100}
                        objectFit="cover" // Ensures the image covers the container
                        priority
                        className="w-[400px] h-[400px]"
                    />
                </div>
            </div>
            <ContsctUs />
        </>
    )
}

export default Index