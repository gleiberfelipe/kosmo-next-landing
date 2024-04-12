import styled from "styled-components";

export const ServiceBox = styled.div`

background-color: rgb(17,17,17);
padding: 0;
margin: 70px 0 0 0;
height: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
color: white;
padding: 0 150px;

@keyframes levitate
{
  
    0%,100%{
		
		transform:translatey(0)
	}
	50%{
		
		transform:translatey(-20px)
	}   
}

.box{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 150px;
    margin: 20px 0;

    
    .triangulo {
  width: 0;
  height: 0;
  border-radius: 5px;
  position: relative;
  right: 65px;  
  top: -55px;
  padding: 0;
  margin: 0;  
  border-left: 30px solid transparent; /* ajuste conforme necessário */
  border-right: 30px solid transparent; /* ajuste conforme necessário */
  border-bottom: 50px solid #8e54e9; /* ajuste conforme necessário */
  z-index: 1;
  animation-name: levitate;
    animation: levitate ease-in-out infinite;
    animation-duration: 6s;   
    animation-fill-mode: forwards;
    animation-delay: 0.3s
}
.trianguloTwo {
  width: 0;
  height: 0;
  border-radius: 5px;
  position: relative;
  left: 80px;  
  top: -55px;
  
  border-left: 30px solid transparent; /* ajuste conforme necessário */
  border-right: 30px solid transparent; /* ajuste conforme necessário */
  border-bottom: 50px solid #8e54e9; /* ajuste conforme necessário */
  padding: 0;
  margin: 0;
  z-index: 1;
  animation-name: levitate;
    animation: levitate ease-in-out infinite;
    animation-duration: 5s;   
    animation-fill-mode: forwards;
    animation-delay: 0.1s
}
    h1{
        font-size: 27px;
        flex-wrap: wrap;
        width: 200px;
        padding: 10px;
    }
    

    p{
        width: 200px;
        padding: 10px;
    }

    .circle{
        color: white;
        display: flex;
        background-color: white;
        color: #8e54e9;
        width: 120px;
        height: 120px;
        font-size: 50px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        border: 1px solid #8e54e9;
        background: radial-gradient(circle at center,white 39%,white 40%, white 50%, rgb(17,17,17) 51%);
        z-index: 2;
        position: relative;
        left: 0px;
    }
    .circleright{
        color: white;
        display: flex;
        background-color: white;
        color: #8e54e9;
        width: 120px;
        height: 120px;
        font-size: 50px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        border: 1px solid #8e54e9;
        background: radial-gradient(circle at center,white 39%,white 40%, white 50%, rgb(17,17,17) 51%);
        z-index: 2;
        position: relative;
        left: -50px;
    }
}

/* .uncle{
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-left: 100px;
    h2{

        color: white;
        width: 400px;
        font-size: 30px;
        span{
            color: #f70bcf;
        }
    }

    .nephew{
        display: flex;
        justify-content: space-around;
        color: white;

        .cousin{
            width: 160px;
        }
    }
} */


@media only screen and (max-width: 768px){
    
    padding: 0 0;

.box{
    padding: 0;
    h1{
        font-size: 24px;
    }

    div{
       padding: 0px;
       margin: 0px;
    }
    
    .triangulo{
        right: 30px;
    }
    .circleright{
        left: -15px;
    }
}

}
`