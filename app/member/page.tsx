"use client"


import { LogoComponent } from "@/components/custom ui/_logoMembers/logoComponent";
import Service from "@/components/home/_body/body";
import Loading from "@/components/home/_bodyThree/bodyThree";
import Footer from "@/components/home/_bodyTwo/bodyTwo";
import RealFooter from "@/components/home/_footer/footer";
import Header from "@/components/home/_header/header";
import BodyOne from "@/components/members/_bodyOne/bodyOne";
import BodyTree from "@/components/members/_bodyThree/bodyThree";
import BodyTwo from "@/components/members/_bodyTwo.tsx/bodyTwo";
import Faq from "@/components/members/_faq/faq";

import HeroMembers from "@/components/members/_heroCard/heroMembers";




export default function Member() {
  return (

    <div className="myroot">
    
    
    

      <Header/>      
      <LogoComponent text="MEMBRO" />
      <HeroMembers/>
      <LogoComponent text="CONFIRA" />
      <BodyOne/>
      <LogoComponent text="DORES" />
      <BodyTwo/>
      <LogoComponent text="SOLUÇÃO" />
      <BodyOne/>
      <LogoComponent text="CONCLUSÃO" />
      <BodyTree/>
      <Faq/>
      <RealFooter/>
      
 
    </div>
  );
}
