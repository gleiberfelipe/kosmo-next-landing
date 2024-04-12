
import styled from "styled-components";




export const BodyBox = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 150px;
padding-top: 70px;

.boxOne{
    padding: 50px;
    width: 500px;
    height: 500px;
    background-color: transparent;
    position: relative;
    border-radius: 50%;
    left: 250px;
    top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    
   
        background-color: #8E54E9;
        background-image: radial-gradient(circle, #4776e6, #5870e9, #6968eb, #7c5feb, #8e54e9);
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
    bottom: 500px;
    margin-bottom: 0px;
  


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
.boxThree{
    padding: 50px;
    width: 500px;
    height: 500px;
    background-color: transparent;
    position: relative;
    border-radius: 50%;
    right: 250px;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    
   
        background-color: #8E54E9;
        background-image: radial-gradient(circle, #4776e6, #5870e9, #6968eb, #7c5feb, #8e54e9);
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
.boxFour{

    
    width: 300px;
    height: 300px;
    background-color: transparent;
    position: relative;
    left: 250px;
    bottom: 100px;
  


    .imgTwo{
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

.boxFive{
    padding: 50px;
    width: 400px;
    height: 400px;
    background-color: transparent;
    position: relative;
    border-radius: 50%;
    left: 0px;
    bottom: 100px;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    
   
        background-color: #8E54E9;
        background-image: radial-gradient(circle, #4776e6, #5870e9, #6968eb, #7c5feb, #8e54e9);
        object-fit: contain;

        h2{
            font-size: 25px;
            font-weight: 600;
            color: white;
            width: 300px;
            width: 300px;
            text-align: center;
        }
    h1{
        font-size: 30px;
            font-weight: 600;
            color: red;
            width: 300px;
            width: 300px;
            text-align: center;
    }

}
@media only screen and (max-width: 768px){

margin-top: 100px;

.boxOne{
    width: 250px;
    height: 250px;
   
    margin-bottom: 100px;
    left: 200px;
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
        bottom: 400px;
        
       
        .img{
            width: 150px;
            height: 150px;        
    
    }
    }

    .boxThree{
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
    .boxFour{
        width: 150px !important;
        height: 150px !important;
        left: 180px;
    bottom: 50px;

        .imgTwo{
      width: 150px !important;
        height: 150px !important;
        
}
    }

    .boxFive{
        width: 200px;
        height: 200px;
        bottom: 60px;
        left: 120px;

        h2{
            font-size: 13px;
            font-weight: 400;
          
        }
    h1{
        font-size: 20px;
            font-weight: 400;
           
          
    }
}
`
