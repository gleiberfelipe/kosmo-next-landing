"use client"
import { CarouselPlugin } from "@/components/_home/carousel/carousel";
import { MenubarComp } from "@/components/_home/menubar/menubar";
import Image from "next/image";
import { BoxHome } from "./style";
import { FaArrowRight } from "react-icons/fa6";


export default function HeroCard() {
  return (

    <>
      <BoxHome>
        <MenubarComp />
        <div className="divSlide">
          <main>
          <section>
            <img src="/apple.png" alt="apple" />
            <h2>Iphone 14 Series</h2>
          </section>
          <h1>Up to 10% off Voucher</h1>
          <p>Shop Now <FaArrowRight /></p>
          <hr />
          </main>
          <CarouselPlugin />
        </div>
      </BoxHome>
    </>
  );
}
