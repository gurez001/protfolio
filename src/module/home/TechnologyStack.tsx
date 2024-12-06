'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FramerIcon as FramerLogo, CodepenIcon as React, Cog, Database, Cloud, Lock, FileCode2, CodepenIcon as Css3, FileJson, Workflow, Server, ShoppingBag, Globe, Code2, Smartphone, PenTool, Image as ImageIcon, Palette } from 'lucide-react'
import Image from 'next/image'

export default function TechnologyStack() {
    const technologies = [
        { name: 'HTML', icon: "html.png", description: 'The standard markup language for Web pages' },
        { name: 'CSS', icon: "css.png", description: 'Styling language used for describing the presentation of a document' },
        { name: 'WordPress', icon: "wordpress.png", description: 'Open-source content management system' },
        { name: 'Squarespace', icon: "squarespace.png", description: 'Website builder and hosting platform' },
        { name: 'Wix', icon: "wix.png", description: 'Website builder and hosting platform' },
        { name: 'JavaScript', icon: "javascript.png", description: 'High-level, interpreted programming language' },
        { name: 'React', icon: "react.png", description: 'A JavaScript library for building user interfaces' },
        { name: 'React Native', icon: "react native.png", description: 'Framework for building native apps using React' },
        { name: 'Next.js', icon: "nextjs-icon.png", description: 'The React Framework for Production' },
        { name: 'TypeScript', icon: "ts.png", description: 'Typed JavaScript at Any Scale' },
        { name: 'Node.js', icon: "node-js-black-icon.png", description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
        { name: 'Material UI', icon: "materalui.png", description: 'React components for faster and easier web development' },
        { name: 'MongoDB', icon: "db.png", description: 'Source-available cross-platform document-oriented database' },
        { name: 'shadcn/ui', icon: "shadcen.png", description: 'Beautifully designed components built with Radix UI and Tailwind CSS' },
        { name: 'Tailwind CSS', icon: "Tailwind CSS.webp", description: 'A utility-first CSS framework for rapid UI development' },
        { name: 'Coral', icon: "coral.png", description: 'Digital design tool for creating graphics and illustrations' },
        { name: 'Canva', icon: "canva.png", description: 'Online design and publishing tool' },
        { name: 'Adobe Creative Suite', icon: "adobe.png", description: 'Collection of creative software for design, video, and web development' },
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
        <section className=" px-4 py-8 bg-white">

            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-black mb-4 md:text-4xl lg:text-5xl">
                        Our Technology Stack
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Leveraging cutting-edge technologies to build robust and scalable applications
                    </p>
                </motion.div>

                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {technologies.map((tech, index) => (
                        <motion.div key={index} variants={cardVariants}>

                            <Card className="h-full bg-gray-100 transition-shadow hover:shadow-lg">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4 gap-[2px]">
                                        <div className="h-[40px] max-w-[100px] w-[40px] relative">
                                            <Image
                                                src={`/assets/${tech.icon}`}
                                                alt="Businessman with checklist"
                                                fill
                                                priority
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className='w-[95%]'>

                                            <h3 className="text-xl font-semibold text-black">{tech.name}</h3>
                                        </div>
                                    </div>
                                    <p className="text-sm mb-4">{tech.description}</p>

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
                    <p className="text-gray-600 mb-4">
                        And many more cutting-edge tools and frameworks!
                    </p>
                    <Badge variant="outline" className="text-black border-black hover:bg-gray-100">
                        Explore Our Full Stack
                    </Badge>
                </motion.div>
            </div>
        </section>
    )
}