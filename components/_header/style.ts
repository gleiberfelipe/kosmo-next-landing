import styled from "styled-components";

export const HeaderBox = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
background-color: rgb(17,17,17);
padding: 10px 0;
margin: 0;
box-sizing: border-box;
align-items: center;
padding-left: 20px;
font-family: Roboto, sans-serif;
color: white;
.img{
   width: 100px;
   height: 50px; 
   overflow: hidden;
   position: relative;
   display: flex;
  justify-content: center;
  align-items: center;
   
}

.icons{
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-right: 20px;
}

@media only screen and (max-width: 768px){

    flex-wrap: nowrap;
    width: 100%;
    justify-content: space-around;
    max-width: 400px;

    p{
        margin-left: 50px !important;
        width: 100px;
        font-size: 12px;
    }
    .img{
        width: 70px
    }

    .icons{
  
        width: 10px;
        gap:   0px;   
        padding-right: 0px;
        padding: 0;
    }
}


`