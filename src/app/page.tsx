"use client"
import Carousel360 from "@/components/home/Carousel360";
import HearoSection from "@/components/home/HearoSection";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Carousel from "@/module/common/Carousel";
import { Accordion } from "@radix-ui/react-accordion";
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, ChevronDown, Code, Mail, MessageSquare, Smartphone } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   // Redirect to the CRM page
  //   router.push('/crm'); // Change this to your actual CRM page route
  // }, [router]);



  const [projects, setProjects] = useState(Array.from({ length: 6 }, (_, i) => ({ id: i + 1 })))
  const [loading, setLoading] = useState(false)
  const projectsRef = useRef(null)
  const controls = useAnimation()
  const inView = useInView(projectsRef, { once: false })

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const reviews = [
    { id: 1, text: "Exceptional work! They transformed our vision into reality.", author: "Sarah J." },
    { id: 2, text: "Highly professional team with outstanding technical skills.", author: "Michael R." },
    { id: 3, text: "The end result exceeded our expectations. Highly recommended!", author: "Emily T." },
    { id: 4, text: "Great communication throughout the project. A pleasure to work with.", author: "David L." },
    { id: 5, text: "Innovative solutions and timely delivery. Will definitely work with them again.", author: "Lisa M." },
  ]

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const loadMoreProjects = () => {
    setLoading(true)
    setTimeout(() => {
      const newProjects = Array.from({ length: 3 }, (_, i) => ({ id: projects.length + i + 1 }))
      setProjects([...projects, ...newProjects])
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement
        if (scrollTop + clientHeight >= scrollHeight - 5) {
          loadMoreProjects()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [projects])

  return <>
    <HearoSection />
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      

      {/* Services Section */}
      <motion.section
        className="py-20 px-4 text-black"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        ref={projectsRef}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2" /> Web Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We create responsive and performant websites using the latest technologies.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="mr-2" /> App Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We build cross-platform mobile apps that deliver exceptional user experiences.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 px-4 "
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">Our Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Django', 'GraphQL', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD', 'Agile'].map((skill) => (
            <Badge key={skill} variant="outline" className="text-lg py-2 px-4  text-black">
              {skill}
            </Badge>
          ))}
        </div>
      </motion.section>

      {/* Projects Section with Infinity Scroll */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className=" text-black rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={`/placeholder.svg?height=200&width=300&text=Project+${project.id}`}
                alt={`Project ${project.id}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project {project.id}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button variant="outline" className="mt-4">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        {loading && (
          <div className="text-center mt-8">
            <p className="text-xl">Loading more projects...</p>
          </div>
        )}
      </motion.section>

      {/* Customer Reviews Section with Infinite Slider */}
      <motion.section
        className="py-20 px-4  text-black overflow-hidden"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Customer Reviews</h2>
        <motion.div
          className="flex"
          animate={{
            x: [0, -100 * reviews.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="w-[300px] flex-shrink-0 mx-4">
              <Card>
                <CardHeader>
                  <CardTitle>{review.author}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{review.text}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 px-4  text-black"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What technologies do you use?</AccordionTrigger>
            <AccordionContent>
              We use a variety of modern technologies including React, Next.js, Node.js, and more, depending on the specific needs of each project.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
            <AccordionContent>
              Project timelines can vary greatly depending on the scope and complexity. We work closely with our clients to establish realistic timelines and milestones.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer ongoing support?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer various support and maintenance packages to ensure your project continues to run smoothly after launch.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl text-black font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                className="bg-gray-50 text-white border-gray-700 focus:ring-white focus:border-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 text-white border-gray-700 focus:ring-white focus:border-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="bg-gray-50 text-white border-gray-700 focus:ring-white focus:border-white"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
              Send Message
            </Button>
          </form>
        </div>
      </motion.section>


    </div>
  </>;
}
