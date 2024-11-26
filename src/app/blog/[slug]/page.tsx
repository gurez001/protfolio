import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Our Blog | Company Name',
    description: 'Explore our portfolio of innovative projects across various industries.',
    openGraph: {
        title: 'Our Projects | Company Name',
        description: 'Explore our portfolio of innovative projects across various industries.',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Our Projects' }],
    },
}

interface SlugPageProps {
    params: {
        slug: string;
    };
}

export default function Blog({ params }: SlugPageProps) {
    const { slug } = params
    return (
        <div>
            <h1>{slug}</h1>
        </div>
    )
}
