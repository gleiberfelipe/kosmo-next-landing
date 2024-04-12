
import styled from "styled-components";

export const HeaderBox = styled.div`

background-color: rgb(17,17,17);
font-family: Roboto, sans-serif;
color: white;
display: flex;
flex-direction: column;
text-align: start;

p{
    margin: 5px 0;
    padding-left: 50px;
    
}


.links{
    display: flex;
    flex-direction: row;
    padding-left: 50px;
    text-decoration: none ;
    color: white !important;
    gap: 20px;
a{
    text-decoration: none ;
    color: white !important;
    gap: 20px;
    text-decoration: underline;
}

}

.special{
    height: 5px;
    border: none;
    width: 98%;
    background-image: linear-gradient(to right, #4776e6, #5870e9, #6968eb, #7c5feb, #8e54e9);
    border-radius: 5px;
    padding-left: 0;
    margin-bottom: 30px;
}

hr{
    height: 1px;
    color: gray;
    width: 98%;
    background-color: gray;
    border-radius: 5px;
    padding-left: 0;
}


@media only screen and (max-width: 768px){

    .links{
        display: flex;
       flex-direction: column;
       flex-wrap: wrap;
       height: 150px;
    }


}


`