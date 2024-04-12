import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { DivBox } from "./style";

export function CarouselMobile() {
  return (
    <DivBox className="pl-12 w-full">
    <Carousel className="w-[230px] bg-purple-500 relative left-[70px] rounded-[30px] top-1">
      <CarouselContent>
      <CarouselItem>
                        <div className="Cardbox">
                        
                                <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                           
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="Cardbox">
                           
                            <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                              {/*   <p>Computers</p> */}
                            
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="Cardbox">
                           
                            <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                                {/* <p>SmartWatch</p>      */}                   
                            
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="Cardbox">
                           
                            <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                            {/*     <p>Camera</p> */}
                            
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="Cardbox">
                            
                            <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                               {/*  <p>HeadPhones</p> */}
                          
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="Cardbox">
                           
                            <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                                {/* <p>Gaming</p> */}
                          
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="Cardbox">
                            
                            <img src="/1b27e2ab63dc4c5a0abd514dd15a969c.png" alt="" />
                                {/* <p>Gadgets</p> */}
                           
                        </div>
                    </CarouselItem>
                </CarouselContent>
      <CarouselPrevious id="btone" className="text-black" />
      <CarouselNext id="bttwo" className="text-black" />
    </Carousel>
    </DivBox>
  )
}
