"use client"

import Service from "@/components/home/_body/body";
import Loading from "@/components/home/_bodyThree/bodyThree";
import Footer from "@/components/home/_bodyTwo/bodyTwo";
import RealFooter from "@/components/home/_footer/footer";
import Header from "@/components/home/_header/header";
import About from "@/components/home/_heroCard/heroCard";
import Logo from "@/components/home/_logo/logo";




export default function Home() {
  return (

    <div className="myroot">
    

      <Header/>      
      <Logo/>
      <About/>
      <Service/>
      <Footer/>
      <Loading/>
      <RealFooter/>
      
 
    </div>
  );
}
