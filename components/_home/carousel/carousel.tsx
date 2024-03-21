"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs ml-20"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
            <CarouselItem>
                    <div className="p-1">
                        <Card className="bg-black border-0">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <img src="/7215f42e5883a64157f0aa3a4d1a866a.jpg"  alt="Slide 1" />
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1">
                        <CarouselItem>
                            <div className="p-1">
                                <Card className="bg-black border-0">
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <img src="/7e210f637fc0504b7d93cd207df744c2.png"  alt="Slide 3" />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                  
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="p-1">
                        <Card className="bg-black border-0">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <img src="/50752d55f8b60f2aa2923183dadbc135.png"  alt="Slide 4" />
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
               

                <CarouselItem>
                    <div className="p-1">
                        <Card className="bg-black border-0">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <img src="/db5174aff99bb9337d2dc9598a0b44e4.png"  alt="Slide 5" />
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious style={{opacity:0}} />
            <CarouselNext style={{opacity:0}}/>
        </Carousel>
    )
}

