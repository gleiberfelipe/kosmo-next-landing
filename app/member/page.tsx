"use client"


import Service from "@/components/home/_body/body";
import Loading from "@/components/home/_bodyThree/bodyThree";
import Footer from "@/components/home/_bodyTwo/bodyTwo";
import RealFooter from "@/components/home/_footer/footer";
import Header from "@/components/home/_header/header";
import BodyOne from "@/components/members/_bodyOne/bodyOne";
import BodyTwo from "@/components/members/_bodyTwo.tsx/bodyTwo";

import HeroMembers from "@/components/members/_heroCard/heroMembers";
import {LogoMembers} from "@/components/members/_logoMembers/logoMembers";



export default function Member() {
  return (

    <div className="myroot">
    
    
    

      <Header/>      
      <LogoMembers text="MEMBRO" />
      <HeroMembers/>
      <LogoMembers text="CONFIRA" />
      <BodyOne/>
      <LogoMembers text="DORES" />
      <BodyTwo/>
      <LogoMembers text="SOLUÇÃO" />
      <BodyOne/>
      <LogoMembers text="CONCLUSÃO" />
      <BodyTwo/> 
      <RealFooter/>
      
 
    </div>
  );
}
