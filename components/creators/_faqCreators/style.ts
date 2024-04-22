
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
    margin: 50px 0;
    align-items: center;
    justify-content: center;
    transition: filter 0.2s; /* Adicionando transição para suavizar o efeito */
    &:hover {
        filter: brightness(80%);
}

/* Alterando a cor de fundo quando o botão é clicado */
&:active {
    filter: brightness(120%);
    transform: translate(2px, 2px); 
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
        background-image: linear-gradient(to right top, #7c4dff, #5469ff, #247dff, #008eff, #009bf8, #00a3f4, #00abef, #00b1e8, #00b7e9, #00bdea, #00c3ea, #01c9ea);
    width: 600px;
    border: 2px solid #4776e6;
    display: flex;
    align-items: center;
    justify-content: space-between !important;
    font-size: 25px;
    padding: 10px 20px !important;
    border-radius: 10px;
    color: white !important;
    font-weight: 900;
    border-radius: 50px !important;
    border:  none;
    margin: 0;
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
            background-image: linear-gradient(to right top, #7c4dff, #5469ff, #247dff, #008eff, #009bf8, #00a3f4, #00abef, #00b1e8, #00b7e9, #00bdea, #00c3ea, #01c9ea);
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