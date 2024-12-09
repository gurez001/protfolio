'use client'
import { Button } from "@/components/ui/button"
import React, { useCallback } from 'react'
import { useRouter } from "next/navigation"

export const Btn_n_Navigation = ({ title, link }: { title: string, link: string }) => {
    const router = useRouter()
    const handleDiscoverClick = useCallback(() => {
        router.push(`/${link}`)
    }, [router, link])
    return (
        <Button
            onClick={handleDiscoverClick}
            size="lg"
            className="bg-black text-primary-foreground hover:text-black hover:bg-gray-100"
        >
            {title}
        </Button>
    )
}
