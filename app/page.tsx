"use client"
import Service from "@/components/_body/body";
import Loading from "@/components/_bodyThree/bodyThree";
import Footer from "@/components/_bodyTwo/bodyTwo";
import RealFooter from "@/components/_footer/footer";
import Header from "@/components/_header/header";
import About from "@/components/_heroCard/heroCard";
import Logo from "@/components/_logo/logo";



export default function Home() {
  return (

    <>
    

      <Header/>      
      <Logo/>
      <About/>
      <Service/>
      <Footer/>
      <Loading/>
      <RealFooter/>
      
 
    </>
  );
}
