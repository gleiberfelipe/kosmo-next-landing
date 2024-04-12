"use client"

import Image from "next/image";



import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";




import { Loadbox } from "./style"
import { Emerging } from "@/components/_animations/emerging/emerging";
import { EmergingReverse } from "@/components/_animations/emergingReverse/emergingReverse";
import { RevealReverse } from "@/components/_animations/revealReverse/revealReverse";
import { CarouselCategory } from "../_carousels/carouselCategory/carouselCategory";
import { CarouselMobile } from "../_carousels/carouselMobile/carouselMobile";
import { Reveal } from "@/components/_animations/reveal/reveal";






const Loading = () => {


    return (

        <Loadbox className="loader">
            <hr />
            <Emerging>
                <div className="imgs one">
                    <div className="map">
                        <Image src="/59586d100a3d4891935025d1060e1f44.png" alt="" layout="fill"
                            objectFit="cover" />
                    </div>
                    <div className="boxOne">
                        <h2>Atmosfera</h2>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti quasi, asperiores odit blanditiis voluptatibus
                            dolorum.
                        </p>
                    </div>
                </div>
            </Emerging>
            <EmergingReverse>
                <div className="imgs">
                    <div>
                        <h2 className="h2title"> Clube De Vantagens</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti quasi, asperiores odit blanditiis voluptatibus
                            dolorum.
                        </p>
                    </div>
                    <div className="diamond">
                        <Image src="/a8351b5c61cd1a273489a21a66e116c2.png" alt="" layout="fill"
                            objectFit="cover" />
                    </div>
                </div>
            </EmergingReverse>
            <hr />
            <Reveal>
                <h1>LOREM IPSUM</h1>
            </Reveal>
            <RevealReverse>
                <p className="pboxagain">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque molestiae fuga non tempore nostrum recusandae ratione,
                    est animi harum ducimus iure quas explicabo minus tempora quos
                    minima consequuntur sapiente libero!
                </p>
            </RevealReverse>

            <div className="screens">

                <div className="children">
                    <h1> Antes da Kosmo</h1>
                    <svg width="428" height="865" viewBox="0 0 428 865" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 69C0 30.8923 30.8924 0 69 0H104H208H320H358.5C396.608 0 427.5 30.8924 427.5 69V796C427.5 834.108 396.608 865 358.5 865H69C30.8924 865 0 834.108 0 796V69ZM22.53 68.75C22.53 41.1358 44.9158 18.75 72.53 18.75H135.59V35C135.59 43.8366 142.753 51 151.59 51H275.91C284.747 51 291.91 43.8366 291.91 35V18.75H354.97C382.584 18.75 404.97 41.1358 404.97 68.75V796.25C404.97 823.864 382.584 846.25 354.97 846.25H72.53C44.9157 846.25 22.53 823.864 22.53 796.25V68.75Z" fill="url(#paint0_linear_498_1473)" />
                        <defs>
                            <linearGradient id="paint0_linear_498_1473" x1="0" y1="0" x2="427.5" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7C4DFF" />
                                <stop offset="0.630208" stop-color="#18A9E6" />
                                <stop offset="1" stop-color="#01C9EA" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <CarouselCategory />
                    <div className="smallscreen">
                        <CarouselMobile/>
                    </div>

                </div>


                <div className="icon">
                    <p ><FcGoogle /></p>
                </div>

                <div className="children">
                    <h1> Depois da Kosmo</h1>
                    <svg width="428" height="865" viewBox="0 0 428 865" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 69C0 30.8923 30.8924 0 69 0H104H208H320H358.5C396.608 0 427.5 30.8924 427.5 69V796C427.5 834.108 396.608 865 358.5 865H69C30.8924 865 0 834.108 0 796V69ZM22.53 68.75C22.53 41.1358 44.9158 18.75 72.53 18.75H135.59V35C135.59 43.8366 142.753 51 151.59 51H275.91C284.747 51 291.91 43.8366 291.91 35V18.75H354.97C382.584 18.75 404.97 41.1358 404.97 68.75V796.25C404.97 823.864 382.584 846.25 354.97 846.25H72.53C44.9157 846.25 22.53 823.864 22.53 796.25V68.75Z" fill="url(#paint0_linear_498_1473)" />
                        <defs>
                            <linearGradient id="paint0_linear_498_1473" x1="0" y1="0" x2="427.5" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7C4DFF" />
                                <stop offset="0.630208" stop-color="#18A9E6" />
                                <stop offset="1" stop-color="#01C9EA" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <CarouselCategory />
                    <div className="smallscreen">
                        <CarouselMobile />
                    </div>
                </div>
            </div>

            
                <div className="screens">
                    <div className="children">
                        <h1> Antes da Kosmo</h1>
                        <svg width="428" height="865" viewBox="0 0 428 865" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 69C0 30.8923 30.8924 0 69 0H104H208H320H358.5C396.608 0 427.5 30.8924 427.5 69V796C427.5 834.108 396.608 865 358.5 865H69C30.8924 865 0 834.108 0 796V69ZM22.53 68.75C22.53 41.1358 44.9158 18.75 72.53 18.75H135.59V35C135.59 43.8366 142.753 51 151.59 51H275.91C284.747 51 291.91 43.8366 291.91 35V18.75H354.97C382.584 18.75 404.97 41.1358 404.97 68.75V796.25C404.97 823.864 382.584 846.25 354.97 846.25H72.53C44.9157 846.25 22.53 823.864 22.53 796.25V68.75Z" fill="url(#paint0_linear_498_1473)" />
                            <defs>
                                <linearGradient id="paint0_linear_498_1473" x1="0" y1="0" x2="427.5" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C4DFF" />
                                    <stop offset="0.630208" stop-color="#18A9E6" />
                                    <stop offset="1" stop-color="#01C9EA" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <CarouselCategory />
                        <div className="smallscreen">
                        <CarouselMobile />
                    </div>
                    </div>
                    <div className="icon">
                        <p ><FaMeta /></p>
                    </div>
                    <div className="children">
                        <h1> Depois da Kosmo</h1>
                        <svg width="428" height="865" viewBox="0 0 428 865" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 69C0 30.8923 30.8924 0 69 0H104H208H320H358.5C396.608 0 427.5 30.8924 427.5 69V796C427.5 834.108 396.608 865 358.5 865H69C30.8924 865 0 834.108 0 796V69ZM22.53 68.75C22.53 41.1358 44.9158 18.75 72.53 18.75H135.59V35C135.59 43.8366 142.753 51 151.59 51H275.91C284.747 51 291.91 43.8366 291.91 35V18.75H354.97C382.584 18.75 404.97 41.1358 404.97 68.75V796.25C404.97 823.864 382.584 846.25 354.97 846.25H72.53C44.9157 846.25 22.53 823.864 22.53 796.25V68.75Z" fill="url(#paint0_linear_498_1473)" />
                            <defs>
                                <linearGradient id="paint0_linear_498_1473" x1="0" y1="0" x2="427.5" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C4DFF" />
                                    <stop offset="0.630208" stop-color="#18A9E6" />
                                    <stop offset="1" stop-color="#01C9EA" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <CarouselCategory />
                        <div className="smallscreen">
                        <CarouselMobile />
                    </div>
                    </div>
                </div>
            
            <hr />
            <Reveal>
                <h1>LOREM IPSUM</h1>
            </Reveal>
            <RevealReverse>
                <p className="pboxagain">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque molestiae fuga non tempore nostrum recusandae ratione,
                    est animi harum ducimus iure quas explicabo minus tempora quos
                    minima consequuntur sapiente libero!
                </p>
            </RevealReverse>

            <div className="circleBox">
                <div className="circleOne"></div>
                <div className="circleTwo"></div>
                <div className="circleThree"></div>
                <div className="circleFour"></div>
                <div className="circleFive"></div>
                <div className="barOne" ></div>
                <div className="barTwo" ></div>
                <div className="barThree"></div>
                <div className="barFour" ></div>
            </div>

            <hr />
            <Reveal>
                <h1>LOREM IPSUM</h1>
            </Reveal>
            <RevealReverse>
                <p className="pboxagain">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque molestiae fuga non tempore nostrum recusandae ratione,
                    est animi harum ducimus iure quas explicabo minus tempora quos
                    minima consequuntur sapiente libero!
                </p>
            </RevealReverse>

            <div className="ballBox">
                <div className="bigball">
                    <div className="ball one"></div>
                    <div className="ball two"></div>
                    <div className="ball three"></div>
                    <div className="ball four"></div>
                    <div className="ball five"></div>
                    <div className="ball six"></div>
                </div>


            </div>



        </Loadbox>
    )

};

export default Loading