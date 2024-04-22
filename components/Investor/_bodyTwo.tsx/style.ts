
import styled from "styled-components";




export const BodyBox = styled.div`

display: flex;
flex-direction: column-reverse;
align-items: center;
margin-top: 150px;
padding-top: 70px;
overflow: hidden;

.boxOne{
    padding: 50px;
    width: 500px;
    height: 500px;
    background-color: transparent;
    position: relative;
    border-radius: 50%;
    left: 250px;
    bottom: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    
   
        background-color: #8E54E9;
        background-image: linear-gradient(to right top, #ff7a2f, #f77038, #ed663f, #e35e44, #d75649, #d65249, #d64d49, #d54949, #e04545, #ea4141, #f53c3c, #ff3737);
        object-fit: contain;

        h2{
            font-size: 24px;
            font-weight: 600;
            color: white;
            width: 300px;
            width: 300px;
            text-align: justify;
        }
    

}
.boxTwo{

    
    width: 300px;
    height: 300px;
    background-color: transparent;
    position: relative;
    right: 250px;
  
    div{
    object-fit: contain;
  
}

    .img{
        width: 300px;
        height: 300px;
        background-color: green;
        display: flex;
        flex-direction: column;
        object-fit: contain;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url(/a107e2259b9d44201af90ae0156617fb.jpg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border: 2px solid #8e54e9;
        object-fit: contain;
    }
}
@media only screen and (max-width: 768px){

margin-top: 100px;

.boxOne{
    width: 250px;
    height: 250px;
   
    margin-bottom: 100px;
    left: 150px;
    bottom: 0px;

        h2{
            font-size: 15px;
            color: white;
            width: 170px;
            line-height: 15px;
            text-align: justify;
        }

}

    .boxTwo{

        width: 150px !important;
        height: 150px;
        background-color: transparent;
       
        right: 0px;
        
       
        .img{
            width: 150px;
            height: 150px;        
    
    }
    }

}
`
