import styled from "styled-components";

export const HeaderBox = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
background-color: rgb(17,17,17);
padding: 10px 0;
margin: 0;
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
    padding: 0;
    margin:0;
    justify-content: space-around;
  
  padding: 15px 0;

    p{
        
        width: 100px;
        font-size: 12px;
        white-space: nowrap !important;
        
    }
    .img{
        width: 30px
    }

    .icons{
  
        width: 10px;
        
        padding-right: 0px;
        padding: 0;
        p{
            width: 20px;
        }
    }
}


`