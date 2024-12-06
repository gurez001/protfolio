'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Smartphone, Code, Settings, ThumbsUp, LineChart, Palette, Share2, Megaphone, PenTool } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function ServiceSecton() {
  const router = useRouter()
  const services = [
    {
      icon: "user-experience_.png",
      title: 'UI / UX Design',
      description: 'Your design, your way! We customize our services to suit your tastes to the tee'
    },
    {
      icon: "mobile.png",
      title: 'Web & Mobile App Development',
      description: 'Multiple requirements? We\'ll support all your needs in an organized manner.'
    },
    {
      icon: "api_.png",
      title: 'API Development',
      description: 'Worried about your application? Don\'t fret! Our dedicated developers are here to get the job done.'
    },
    {
      icon: "maintenance.png",
      title: 'Maintenance & Upgrades',
      description: 'Project Complete? We\'re still here. You can contact us for post-service requirements at any time.'
    },
    {
      icon: "quality-management.png",
      title: 'Quality Assurance',
      description: 'We take pride in our work. We work till your project is even better than you expect!'
    },
    {
      icon: "analysis.png",
      title: 'Business Analysis',
      description: 'We analyse your business concerns and offer solutions to meet your needs.'
    },
    {
      icon: "user-experience_.png",
      title: 'Graphic Design',
      description: 'Eye-catching visuals that communicate your brand message effectively and leave a lasting impression.'
    },
    {
      icon: "user-experience_.png",
      title: 'Social Media Handling',
      description: 'Boost your online presence with our expert social media management and engagement strategies.'
    },
    {
      icon: "user-experience_.png",
      title: 'Digital Marketing',
      description: 'Reach your target audience and grow your business with our comprehensive digital marketing solutions.'
    },
    {
      icon: "user-experience_.png",
      title: 'Content Writing',
      description: 'Compelling, SEO-friendly content that resonates with your audience and drives engagement.'
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="py-16 px-4 ">

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl lg:text-5xl">
            What we do best
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seeking the best for your website needs? Look no further! We offer you utmost satisfaction when it comes to best-in-class web technology services and solutions.
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full transition-shadow hover:shadow-lg bg-gray-100">
                <CardContent className="p-6">
                  <div className="mb-2 flex items-start gap-[4px]">
                    <div className="h-[40px] max-w-[100px] w-[40px] relative">
                      <Image
                        src={`/assets/${service.icon}`}
                        alt="Businessman with checklist"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className='w-[95%]'>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button onClick={() => router.push('/contect-us')} size="lg" className="bg-black text-primary-foreground hover:text-black hover:bg-primary/90">
            LET&apos;S TALK
          </Button>
        </motion.div>
      </div>
    </section>
  )
}