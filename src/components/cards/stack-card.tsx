import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const StackCard = ({ item }: { item: any }) => {
    return (
        <Card className="h-full transition-shadow hover:shadow-lg bg-gray-100">
            <CardContent className="p-6">
                <div className="mb-2 flex items-start gap-[4px]">
                    <div className="h-[40px] max-w-[100px] w-[40px] relative">
                        <Image
                            src={`/assets/${item.icon}`}
                            alt="Businessman with checklist"
                            width={100}
                            height={100}
                            priority
                            className="object-contain"
                        />
                    </div>
                    <div className='w-[95%]'>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
            </CardContent>
        </Card>
    )
}

export default StackCard