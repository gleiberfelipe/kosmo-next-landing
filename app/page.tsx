"use client"
import { BannerCategories } from "@/components/_home/BanerCategories/bannerCategories";
import HeroCard from "@/components/_home/Herocard/herocard";
import { CarouselCategory } from "@/components/_home/carouselCategory/carouselCategory";
import { CarouselExplore } from "@/components/_home/carouselExplore/carouselExplores";
import {CarouselSize } from "@/components/_home/carouselHori/carouselX";
import { CarouselSelling } from "@/components/_home/carouselSelling/carouselSelling";
import Navbar from "@/components/_home/navbar/navbar";



export default function Home() {
  return (

    <>
     <Navbar/>
      <HeroCard />
      <CarouselSize/>
      <CarouselCategory/>      
      <CarouselSelling/>
      <BannerCategories/>
      <CarouselExplore/>
      
    </>
  );
}
