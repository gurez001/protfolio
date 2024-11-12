'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 700 }
    const mouseXSpring = useSpring(mouseX, springConfig)
    const mouseYSpring = useSpring(mouseY, springConfig)

    const cursorSize = 100
    const cursorX = useTransform(mouseXSpring, (x) => x - cursorSize / 2)
    const cursorY = useTransform(mouseYSpring, (y) => y - cursorSize / 2)

    const backgroundAnimation = useAnimation()

    const updateMousePosition = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 }
        
        // Check if mouse is within component bounds
        if (clientX >= left && clientX <= left + width && clientY >= top && clientY <= top + height) {
            mouseX.set(clientX - left)
            mouseY.set(clientY - top)
        }
    }

    const handleMouseLeave = () => {
        // Reset cursor position or hide it when mouse leaves the component
        mouseX.set(-cursorSize)
        mouseY.set(-cursorSize)
    }

    useEffect(() => {
        const currentRef = ref.current
        if (currentRef) {
            currentRef.addEventListener('mousemove', updateMousePosition)
            currentRef.addEventListener('mouseleave', handleMouseLeave)
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('mousemove', updateMousePosition)
                currentRef.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])

    useEffect(() => {
        backgroundAnimation.start({
            backgroundPosition: ['0% 0%', '100% 100%'],
            transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 30,
                ease: 'linear',
            },
        })
    }, [backgroundAnimation])

    return (
        <motion.div
            ref={ref}
            className="relative h-screen overflow-hidden"
            animate={backgroundAnimation}
            style={{
                backgroundImage: "url(./upload/bak-gif.gif)",
                backgroundSize: 'cover',
                perspective: 1000,
            }}
        >
            {/* Custom Cursor */}
            <motion.div
                className="absolute rounded-full bg-white opacity-60"
                style={{
                    width: cursorSize,
                    height: cursorSize,
                    x: cursorX,
                    y: cursorY,
                    pointerEvents: 'none',
                    mixBlendMode: 'difference',
                }}
            />
            
            <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
                <motion.h1
                    className="text-3xl md:text-6xl custom-font font-bold mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                   Your Business<br/>
                   Deserves to Shine
                </motion.h1>
                <motion.p
                    className="text-lg md:text-base mb-8 max-w-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    We empower startups and brands by creating innovative, engaging, and tailored software solutions that drive success and make an impact.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-100">
                        Discover My Work
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    )
}
