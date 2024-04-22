"use client"


import BodyOneI from "@/components/Investor/_bodyOne/bodyOne";
import BodyTreeI from "@/components/Investor/_bodyThree/bodyThree";
import BodyTwoI from "@/components/Investor/_bodyTwo.tsx/bodyTwo";
import FaqInvestor from "@/components/Investor/_faqCreators/faq";
import HeroInvestor from "@/components/Investor/_heroCard/heroCreators";
import BodyOneC from "@/components/creators/_bodyOne/bodyOne";
import BodyTreeC from "@/components/creators/_bodyThree/bodyThree";
import BodyTwoC from "@/components/creators/_bodyTwo.tsx/bodyTwo";
import FaqCreators from "@/components/creators/_faqCreators/faq";
import HeroCreators from "@/components/creators/_heroCard/heroCreators";
import { LogoComponent } from "@/components/custom ui/_logoMembers/logoComponent";
import RealFooter from "@/components/home/_footer/footer";
import Header from "@/components/home/_header/header";







export default function Investor() {
  return (

    <div className="myroot">
    
    
    

      <Header/>      
      <LogoComponent text="INVESTIDOR" />
      <HeroInvestor/>
      <LogoComponent text="CONFIRA" />
      <BodyOneI/>
      <LogoComponent text="DORES" />
      <BodyTwoI/>
      <LogoComponent text="SOLUÇÃO" />
      <BodyOneI/>
      <LogoComponent text="CONCLUSÃO" />
      <BodyTreeI/>
      <FaqInvestor/>
      <RealFooter/>
      
 
    </div>
  );
}
