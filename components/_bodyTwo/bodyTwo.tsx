"use client"




import { FooterBox } from './style';
import { Reveal } from '../_animations/reveal/reveal';
import { RevealReverse } from '../_animations/revealReverse/revealReverse';
import { Emerging } from '../_animations/emerging/emerging';
import { EmergingReverse } from '../_animations/emergingReverse/emergingReverse';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {

    return (
        <FooterBox>
            <hr />
            <Reveal>
            <h1>LOREM IPSUM</h1>
            </Reveal>
            <RevealReverse>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Atque molestiae fuga non tempore nostrum recusandae ratione,
                est animi harum ducimus iure quas explicabo minus tempora quos
                minima consequuntur sapiente libero!
            </p>
            </RevealReverse>
            <Emerging>
            <div className='img'>
            <Image src="/0b7f1ee5cc9abadfc16252d5bd050e34.jpg"  alt=""   layout="fill"
                    objectFit="fill" />
            </div> 
            </Emerging>
            <Reveal>
            <h1>LOREM IPSUM</h1>
            </Reveal>
            <div className='tribox'>
                <motion.svg 
                   initial={{ opacity: 0, y: -100 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 1.0 }}
                   viewport={{ once: true }}  className='trianguloone' width="168" height="151" viewBox="0 0 168 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.0705 30.7062C-4.62751 17.3729 4.99501 0.70624 20.391 0.706245L147.697 0.70624C163.093 0.70625 172.715 17.3729 165.017 30.7063L101.364 140.956C93.6664 154.29 74.4214 154.29 66.7234 140.956L3.0705 30.7062Z" fill="url(#paint0_linear_49_280)" />
                    <defs>
                        <linearGradient id="paint0_linear_49_280" x1="-14.25" y1="0.70624" x2="182.338" y2="114.206" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4776E6" />
                            <stop offset="1" stop-color="#8E54E9" />
                        </linearGradient>
                    </defs>
                </motion.svg>


                <motion.svg 
                   initial={{ opacity: 0, y: -100 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 1.5 }}
                   viewport={{ once: true }} 
                   className='triangulotwo' width="111" height="100" viewBox="0 0 111 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.73247 21.612C-0.266772 12.953 5.98228 2.12931 15.9808 2.12932L95.6551 2.12931C105.654 2.12932 111.903 12.953 106.903 21.6119L67.0662 90.6119C62.067 99.2709 49.5689 99.2709 44.5696 90.6119L4.73247 21.612Z" stroke="url(#paint0_linear_49_284)" stroke-width="4.02317" />
                    <defs>
                        <linearGradient id="paint0_linear_49_284" x1="-48" y1="65.9357" x2="28" y2="-65.7002" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7C4DFF" />
                            <stop offset="0.630208" stop-color="#18A9E6" />
                            <stop offset="1" stop-color="#01C9EA" />
                        </linearGradient>
                    </defs>
                </motion.svg>
                <motion.svg 
                   initial={{ opacity: 0, y: -100 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 2.0 }}
                   viewport={{ once: true }} 
                    className='triangulothree' width="111" height="101" viewBox="0 0 111 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.81049 22.2927C-1.18875 13.6338 5.06031 2.81008 15.0588 2.81008L95.0035 2.81007C105.002 2.81007 111.251 13.6337 106.252 22.2927L66.2794 91.5268C61.2802 100.186 48.7821 100.186 43.7828 91.5268L3.81049 22.2927Z" stroke="url(#paint0_linear_49_285)" stroke-width="4.02317" />
                    <defs>
                        <linearGradient id="paint0_linear_49_285" x1="-49" y1="66.7516" x2="27.1561" y2="-65.1546" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7C4DFF" />
                            <stop offset="0.630208" stop-color="#18A9E6" />
                            <stop offset="1" stop-color="#01C9EA" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>


            <div className='teadropfather'>
                <EmergingReverse>
                <div className="children">
                    <div className="grandson">

                        <svg width="950" height="587" viewBox="0 0 950 587" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_416_1453)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M110.89 409.538C2.50012 252.017 -6.93298 -3.81286 3.7782 0.463202C5.15405 1.01248 5.94434 6.73946 7.24188 16.1428C16.046 79.9434 48.204 312.984 445.08 246.335C445.312 246.335 453.012 245.146 465.86 243.155L609.878 221.114C678.235 210.886 744.637 201.437 757.133 201.437C863.614 201.437 949.934 287.587 949.934 393.859C949.934 500.13 863.614 586.28 757.133 586.28C729.894 586.28 648.975 580.643 543.623 570.473C343.108 558.988 191.366 526.491 110.89 409.538Z" fill="url(#paint0_linear_416_1453)" />
                            </g>
                            <defs>
                                <filter id="filter0_i_416_1453" x="0.394043" y="0.410278" width="949.54" height="589.87" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="50" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_416_1453" />
                                </filter>
                                <linearGradient id="paint0_linear_416_1453" x1="949.934" y1="-1.91895" x2="2.20943" y2="-1.91895" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.21875" stop-color="#7C4DFF" />
                                    <stop offset="0.5625" stop-color="#18A9E6" />
                                    <stop offset="0.828125" stop-color="#01C9EA" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing <br></br>elit.
                            Assumenda quam rerum voluptates eaque. <br></br>Molestiae at exercitationem <br></br>
                            voluptates vitae <br></br>eum totam.
                        </p>
                        <div className="circle">
                        <h2>10 vantagens do criador</h2>
                    </div>
                    </div>
                  

                </div>
                </EmergingReverse>
                <Emerging>
                <div className="children">
                    <div className="grandsonInverted">

                        <svg width="950" height="586" viewBox="0 0 950 586" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_22_383)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M839.048 409.126C947.438 251.606 956.871 -4.22312 946.16 0.0529234C944.784 0.6022 943.994 6.32917 942.696 15.7325C933.892 79.5329 901.734 312.573 504.857 245.924C504.624 245.924 496.924 244.735 484.076 242.744L340.058 220.704C271.7 210.475 205.298 201.026 192.803 201.026C86.3208 201.026 0.000244141 287.176 0.000244141 393.447C0.000244141 499.719 86.3208 585.869 192.803 585.869C220.042 585.869 300.961 580.231 406.313 570.061C606.828 558.577 758.571 526.08 839.048 409.126Z" fill="url(#paint0_linear_22_383)" />
                            </g>
                            <defs>
                                <filter id="filter0_i_22_383" x="0.000244141" y="0" width="949.544" height="589.869" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="50" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_22_383" />
                                </filter>
                                <linearGradient id="paint0_linear_22_383" x1="0.000244141" y1="0" x2="949.544" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C4DFF" />
                                    <stop offset="0.630208" stop-color="#18A9E6" />
                                    <stop offset="1" stop-color="#01C9EA" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing <br></br>elit.
                            Assumenda quam rerum voluptates eaque. <br></br>Molestiae at exercitationem <br></br>
                            voluptates vitae <br></br>eum totam.
                        </p>
                        <div className="circleInverted">
                        <h2>10 vantagens do criador</h2>
                    </div>
                    </div>
                 
                </div>
                </Emerging>
                <EmergingReverse>
                <div className="children">
                    <div className="grandson">

                        <svg width="950" height="587" viewBox="0 0 950 587" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_416_1453)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M110.89 409.538C2.50012 252.017 -6.93298 -3.81286 3.7782 0.463202C5.15405 1.01248 5.94434 6.73946 7.24188 16.1428C16.046 79.9434 48.204 312.984 445.08 246.335C445.312 246.335 453.012 245.146 465.86 243.155L609.878 221.114C678.235 210.886 744.637 201.437 757.133 201.437C863.614 201.437 949.934 287.587 949.934 393.859C949.934 500.13 863.614 586.28 757.133 586.28C729.894 586.28 648.975 580.643 543.623 570.473C343.108 558.988 191.366 526.491 110.89 409.538Z" fill="url(#paint0_linear_416_1453)" />
                            </g>
                            <defs>
                                <filter id="filter0_i_416_1453" x="0.394043" y="0.410278" width="949.54" height="589.87" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="50" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_416_1453" />
                                </filter>
                                <linearGradient id="paint0_linear_416_1453" x1="949.934" y1="-1.91895" x2="2.20943" y2="-1.91895" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.21875" stop-color="#FF7A2F" />
                                    <stop offset="0.5625" stop-color="#C64D4D" />
                                    <stop offset="0.828125" stop-color="#FF3737" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing <br></br>elit.
                            Assumenda quam rerum voluptates eaque. <br></br>Molestiae at exercitationem <br></br>
                            voluptates vitae <br></br>eum totam.
                        </p>
                        <div className="circle three">
                        <h2>10 vantagens do criador</h2>
                    </div>
                    </div>
               

                </div>
                </EmergingReverse>
                <div className='wildBox'>
                    <div className='wildcard one'>
                        <div className="circle">
                            <h2>10 vantagens do criador</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing <br></br>elit.
                            Assumenda quam rerum voluptates eaque. <br></br>Molestiae at exercitationem <br></br>
                            voluptates vitae <br></br>eum totam.
                        </p>
                    </div>
                    <div className='wildcard two'>
                    
                      <div className="circleInverted">
                        <h2>10 vantagens do criador</h2>
                    </div>
                    <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing <br></br>elit.
                            Assumenda quam rerum voluptates eaque. <br></br>Molestiae at exercitationem <br></br>
                            voluptates vitae <br></br>eum totam.
                        </p>
                    </div>
                    <div className='wildcard three'>
                    <div className="circle three">
                        <h2>10 vantagens do criador</h2>
                    </div>
                    <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing <br></br>elit.
                            Assumenda quam rerum voluptates eaque. <br></br>Molestiae at exercitationem <br></br>
                            voluptates vitae <br></br>eum totam.
                        </p>
                    </div>
                </div>
            </div>



        </FooterBox>
    );
};

export default Footer;