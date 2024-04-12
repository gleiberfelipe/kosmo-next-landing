
import styled from "styled-components";




export const FaqBox = styled.div`

nav{
background-color: rgb(17,17,17);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    button{
    background-color: white;
    width: 600px;
    border: 2px solid #4776e6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border-radius: 10px;
    color: #4776e6;
    font-weight: 900;

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
        margin: 10px;
        color: #4776e6;
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