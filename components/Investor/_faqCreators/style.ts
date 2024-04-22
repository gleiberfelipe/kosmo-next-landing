
import styled from "styled-components";




export const FaqBox = styled.div`
display: flex;
flex-direction: column;
h1{
    align-self: center;
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    color: white;
}
button{
    align-self: center;
    background-color: #9218CC;
    font-size: 31px;
    color: white;
    font-weight: 700;
    padding: 5px 20px;
    border-radius: 15px;
    margin: 40px 0 80px 0;
    align-items: center ;    
    transition: filter 0.2s; /* Adicionando transição para suavizar o efeito */
    &:hover {
        filter: brightness(80%);
}

/* Alterando a cor de fundo quando o botão é clicado */
&:active {
    filter: brightness(120%);
    transform: translateX(2px) translateY(2px); 
}
}

/* Alterando a cor de fundo quando o botão é focado */
/* &:focus {
  background-color: #45a049;
} */

}

nav{
background-color: rgb(17,17,17);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    button{
        background-image: linear-gradient(to right top, #ff7a2f, #f77038, #ed663f, #e35e44, #d75649, #d65249, #d64d49, #d54949, #e04545, #ea4141, #f53c3c, #ff3737);
    width: 600px;
    border: 2px solid #4776e6;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between !important;
    font-size: 25px;
    padding: 10px 20px !important;
    border-radius: 10px;
    color: white !important;
    font-weight: 900;
    border-radius: 50px !important;
    border:  none;
    margin: 0 !important;
    &:hover {
        filter: brightness(100%);
}

    

    div{
        color: #4776e6 !important;
svg{
    color: #4776e6 !important;
    path{
        color: #4776e6 !important;
        background-color:  #4776e6;}}
    }
}

ul{
   
    background-color: white;
margin: 20px 0;
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #4776e6;
   

    li{
    
        margin: 0px;
        padding: 10px;
        color: #4776e6;
         background-color: white;
        width: 100%;
        height: 100%;
      
        justify-content: center;
        &:hover {
            background-image: linear-gradient(to right top, #ff7a2f, #f77038, #ed663f, #e35e44, #d75649, #d65249, #d64d49, #d54949, #e04545, #ea4141, #f53c3c, #ff3737);
        color: white;
}

    }
}
}
@media only screen and (max-width: 768px){

    nav{
        button{
            width: 350px;
            
        }

        ul{
            width: 350px;
        }
    }


}
`