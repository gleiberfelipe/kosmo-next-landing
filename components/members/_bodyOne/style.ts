
import styled from "styled-components";




export const BodyBox = styled.div`

display: flex;
flex-direction: column;
margin-top: 150px;
align-items: center;
overflow: hidden;

.boxOne{
padding: 50px;
    width: 500px;
    height: 500px;
    background-color: transparent;    
    background-color: #8E54E9;
    background-image: radial-gradient(circle, #4776e6, #5870e9, #6968eb, #7c5feb, #8e54e9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 250px;
        h2{
            font-size: 25px;
            font-weight: 600;
            color: white;
            width: 300px;
            text-align: justify;
        }
    

}
.boxTwo{

    width: 300px;
    height: 300px;
    background-color: transparent;    
    
    margin-bottom: 100px;
    


    .img{
        width: 300px;
        height: 300px;   
        display: flex;
        flex-direction: column;       
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background-image: url(/a107e2259b9d44201af90ae0156617fb.jpg);
        background-position: center;
        background-size: cover;
        border: 2px solid #8e54e9;
        position: relative;
        left: 250px;
        bottom: 150px;
    }
}

@media only screen and (max-width: 768px){

    margin-top: 100px;

    .boxOne{
        width: 250px;
        height: 250px;
        right: 0px;
        left: 70px;
    

            h2{
                font-size: 15px;
                color: white;
                width: 170px;
                line-height: 15px;
                text-align: justify;
            }
        
    }

        .boxTwo{

            width: 150px;
            height: 150px;
            background-color: transparent;
           
           
            .img{
                width: 150px;
                height: 150px;  
                left: 150px;
                bottom: 0px;
        
        }
        }

}
`
