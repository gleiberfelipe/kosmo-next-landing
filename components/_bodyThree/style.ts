import styled from "styled-components";

export const Loadbox = styled.div`

display: flex;
flex-direction: column;

justify-content: center;
align-items: center;
background-color: rgb(17,17,17);
border: none;
padding: 0;
margin: 0;
color: white;

.imgs{

    display: flex;
    flex-direction: row;
    padding: 50px;
    gap: 50px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
    
    }
    h2{
        font-size: 50px;
    }

    p{
        font-size: 20px;
        width: 300px;
        text-align: justify;  
    }
    .map, .diamond{
     width: 800px;
     height: 400px; 
     border-radius: 60px;
     border-bottom: 15px solid #8e54e9;
     overflow: hidden;
   position: relative;
   display: flex;
  justify-content: center;
  align-items: center;

    }
}

hr{
    background-image: linear-gradient(to right, #4776e6, #5870e9, #6968eb, #7c5feb, #8e54e9);
    width: 146px;
    height: 5px;
    margin-top: 50px;
    border: none;
}

h1{
    font-size: 50px;
    color: white;
    margin: 20px 0;
}

.pboxagain{
    width: 600px;
    font-size: 20px;
    color: white;
    text-align: center;
    margin: 20px 0;
}


.screens{
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    margin-left: 100px;
    height: 1100px;
    
    overflow: hidden;
    

    .icon p{
                width: 100px;
                font-size: 90px;
                margin: 150px 30px 0 0px;
            }

    .children{
        padding: 0;
        margin: 0;
        width: 600px;
        margin-left: 100px;
       
h1{
    margin: 30px 0;
}
        svg{
            position: relative;
            z-index: 2;
            padding: 0;
            margin: 0;
            
        }
            img{

                width: 382px;
                height: 830px;
                position: relative;
                z-index: 1;
                padding: 0;
                margin: 0;
                bottom: 852px;
                left: 23px;
            }

          
    }
}

/* .react-flow__node {

 
 width: 150px;  
 height: 150px; 
 border-radius: 50%; 
  background-image: url('/82b52388d2418b4c76480d7e6fc35ca3.jpg'); 
  background-size: cover; 
  background-position: center; 
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
 */


@keyframes levitate
{
  
    0%,100%{
		
		transform:translatey(0)
	}
	50%{
		
		transform:translatey(-20px)
	}   
}
.circleBox{
  
    background-color: rgb(17,17,17);
    margin-top: 100px;

    .circleOne{

        width: 500px;
        height: 500px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        left: 0px;
        z-index: 2;
        background-image: url('/522b89a6e06ce18044367a842aca9275.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
        animation-name: levitate;
        animation: levitate ease-in-out infinite;
        animation-duration: 6s;   
        animation-fill-mode: forwards;
        animation-delay: 0.3s

    }
    .circleTwo{

        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        top: 0px;
        right: 0px;
        z-index: 2;
        background-image: url('/31c3a32989fe4fd21bcdade143df7f6b.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
        animation-name: levitate;
        animation: levitate ease-in-out infinite;
        animation-duration: 7s;   
        animation-fill-mode: forwards;
        animation-delay: 0.2s

    }
    .circleThree{

        width: 350px;
        height: 350px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        bottom: 100px;
        left: 300px;
        z-index: 2;
        background-image: url('/5bb92a1b96831f3c1f7298e4c1e61fa5.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
        animation-name: levitate;
        animation: levitate ease-in-out infinite;
        animation-duration: 8s;   
        animation-fill-mode: forwards;
        animation-delay: 0.4s

    }

    .circleFour{

        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        bottom: 100px;
        left: 200px;
        z-index: 2;
        background-image: url('/5a446cc28dd65340810ff8e96cb15c3c.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
        animation-name: levitate;
        animation: levitate ease-in-out infinite;
        animation-duration: 9s;   
        animation-fill-mode: forwards;
        animation-delay: 0.5s

    }
    }
    .circleFive{

        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        bottom: 200px;
        left: 600px;
        z-index: 2;
        background-image: url('/57d3493b65b102b195ab45bae13d31e3.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
        animation-name: levitate;
        animation: levitate ease-in-out infinite;
        animation-duration: 6s;   
        animation-fill-mode: forwards;
        animation-delay: 0.1s

       
    }
    
    .barOne{
        background-color: white;
        position: relative;
        width: 150px;
        height: 5px;
        bottom: 850px;
        left: 50px;
        transform: rotateZ(110deg) ;
        z-index: 1;
    }
    .barTwo{
        background-color: white;
        position: relative;
        width: 150px;
        height: 5px;
        bottom: 820px;
        left: 300px;
        transform: rotateZ(230deg) ;
        z-index: 1;
    }
    .barThree{
        background-color: white;
        position: relative;
        width: 150px;
        height: 5px;
        bottom: 450px;
        left: 250px;
        transform: rotateZ(110deg) ;
        z-index: 1;
    }
    .barFour{
        background-color: white;
        position: relative;
        width: 250px;
        height: 5px;
        bottom: 400px;
        left: 500px;
        transform: rotateZ(250deg) ;
        z-index: 1;
    }
}


@keyframes rotate
{
  
    0%{
		
		transform: rotate(0)
	}
	100%{
		
		transform: rotate(360deg)
	}   
}
@keyframes rotateInverted
{
  
    0%{
		
		transform: rotateZ(0)
	}
	100%{
		
		transform: rotateZ(-360deg)
	}   
}

.bigball{
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px dotted gray;
    margin: 100px;
    transform-origin: center;
    animation-name: rotate;
    animation: rotate  infinite;
    animation-duration: 40s;   
    animation-fill-mode: forwards;
    
   


}

.ballBox{

    height: 600px;
    height: 900px;
    margin: 100PX 0


        
}

.ball{
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    background-size: cover; 
    background-position: center; 
    animation-name: rotateInverted;
        animation: rotateInverted infinite;
        animation-duration: 40s;
        cursor: pointer;    
 
}
.ball.one{
    background-image: url('/36ca7c6dd22f1acad34ea31d936cbc5f.jpg'); 
    bottom: 50px;
    left: 250px;    
}
.ball.two{
    background-image: url('/39532aab00e737c2ccc737f1cec84adb.jpg');
    bottom: 0px;
    left: 500px;     
}
.ball.three{
    background-image: url('/a303a25e2cf567bfc9f116796f95d73a.jpg');
    top: 220px;
    left: 500px; 
}
.ball.four{
    background-image: url('/f4a453b9dc62fbc5292961c9f5ce7b0f.jpg'); 
    top: 250px;
    left: 250px; 
}
.ball.five{
    background-image: url('/ed081b73cbbdca982d22b2a6774a135a.jpg'); 
    bottom: 20px;
    left: -10px; 
}
.ball.six{
    background-image: url('/c84a3373e44e1c612d9ab95ec091ce2b.jpg'); 
    bottom: 400px;
    left: 0px; 
}

@media only screen and (max-width: 768px){
 

    p{
        width: 300px;
    }
    .pboxagain{
        width: 300px !important;
        display: flex;
        text-align: justify !important;
        padding: 0 10px !important
     
        
    }
    .imgs{
        flex-direction: column !important;
        padding: 0px !important;
        gap: 0px;
        align-items: center;
        
        div{
            padding: 0px;
        }
     

        .map, .diamond{
        width: 380px !important;
        height: 190px !important; 
        border-radius: 20px !important;
        img{
            object-fit: cover !important;
            border-radius: 20px;
        }


       

        .pboxagain{
            width: 380px !important;
            text-align: justify !important;
        }
    }
}
    .imgs.one{
            display: flex;
            flex-direction: column-reverse !important;
            
        }
    .screens{
    
flex-direction: column !important;
    align-items: center;
    width: 100%;
    margin-bottom: 100px !important;
    margin-top: 150px !important;
    height: 2100px !important;
    margin-left: 0px !important;
    

  
        .icon p svg{
            width: 400px;
            text-align: center;
            margin-top: 0px;
            position: relative !important;
            height: 0px;
            z-index: 2;
            bottom: 1050px !important;
            left: 20px;

        }

        .children{
            width: 414px !important;
            align-self: center;
            h1{
                width: 380px;                
                text-align: center;
                padding-right: 40px;
                
            }
            max-height: 700px;
            margin-bottom: 100px !important;
            
            svg{
                width: 340px;
            }

            img{
                width: 320px !important;
                height: 670px !important;
                bottom: 770px !important;
                border-radius: 35px;
                left: 5px !important;
                        
                }
         }

    

    }

    .circleBox{
    
     
        .circleOne{
        width: 250px !important;
        height: 250px !important;

        }
        .circleTwo{
            width: 75px !important;
            height: 75px !important;
        }
        .circleThree{

        width: 175px !important;
        height: 175px !important;
        left: 120px !important;
        bottom: 50px !important;
        }

        .circleFour{
            width: 75px !important;
            height: 75px !important;
            bottom: 20px !important;
            left: 100px !important;
        }

        .circleFive{
            width: 75px !important;
            height: 75px !important; 
            bottom: 100px !important;
            left: 195px !important;
        }

        .barOne{
            bottom: 450px;
            left: 0px;
        }
        .barTwo{
            bottom: 420px;
            left: 130px;
        }
        .barThree{
            bottom: 250px;
            left: 100px;
        }
        .barFour{
            bottom: 270px;
            left: 90px;
        }
    }

        .ballBox{

        height: 250px;
        width: 250px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        border-radius: 50%;
        
            }
        .bigball{
            width: 250px !important;
            height: 250px !important;
            margin: 0;
            padding: 0;
            border-radius: 50%;
        
            
        
            }

            .ball{
            width: 50px;
            height: 50px;
            
                
                }
        .ball.one{
            
            bottom: 20px;
            left: 100px;    
        }
        .ball.two{
        
            bottom: 20px;
            left: 200px;     
        }
        .ball.three{
        
            toP: 50px;
            left: 210px; 
        }
        .ball.four{
        
            top: 70px;
            left: 110px; 
        }
        .ball.five{
        
            bottom: 50px !important;
            left: -10px; 
        }

        .ball.six{
            background-image: url('/c84a3373e44e1c612d9ab95ec091ce2b.jpg'); 
            bottom: 220px;
            left: 0px; 
        }
}

`