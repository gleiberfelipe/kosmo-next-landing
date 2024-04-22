"use client"


import BodyOneC from "@/components/creators/_bodyOne/bodyOne";
import BodyTreeC from "@/components/creators/_bodyThree/bodyThree";
import BodyTwoC from "@/components/creators/_bodyTwo.tsx/bodyTwo";
import FaqCreators from "@/components/creators/_faqCreators/faq";
import HeroCreators from "@/components/creators/_heroCard/heroCreators";
import { LogoComponent } from "@/components/custom ui/_logoMembers/logoComponent";
import RealFooter from "@/components/home/_footer/footer";
import Header from "@/components/home/_header/header";







export default function Creators() {
  return (

    <div className="myroot">
    
    
    

      <Header/>      
      <LogoComponent text="CRIADOR" />
      <HeroCreators/>
      <LogoComponent text="CONFIRA" />
      <BodyOneC/>
      <LogoComponent text="DORES" />
      <BodyTwoC/>
      <LogoComponent text="SOLUÇÃO" />
      <BodyOneC/>
      <LogoComponent text="CONCLUSÃO" />
      <BodyTreeC/>
      <FaqCreators/>
      <RealFooter/>
      
 
    </div>
  );
}
