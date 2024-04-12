import styled from "styled-components";


export const LogoBox = styled.div`

display: flex;
   background-color: rgb(17,17,17);
   flex-direction: column;
   align-items: center;

.logobox {
   
    background-color: rgb(17,17,17);
    padding: 0;
    margin: 0;    
    height: 200px;
    position: relative;
    top: 40px;
    
    .children{
        background-color: rgb(17,17,17);
        height: 90px;
        position: relative;
      
       
        h1{
            font-size: 100px;
            position: relative;
            bottom: 15px;
            color: white;
        }
    }
    .children.one{
        z-index:1
    }
    .children.two{
        z-index:2;
        bottom: 50px;
    }

    .children.three{
        
        z-index:3;
        bottom: 100px;
    }
    .children.four{
        h1{
            color: rgb(17,17,17);
        }
        z-index:3;
        bottom: 150px;
    }
    .children.five{

        background-color: transparent;
        h1{
            color: transparent;
        -webkit-text-stroke: 2px white; 
        
    
    }
    
    z-index: 6;
    bottom: 240px;
}
}

@media only screen and (max-width: 768px){

.logobox .children h1{

    font-size: 70px;
}

}
`