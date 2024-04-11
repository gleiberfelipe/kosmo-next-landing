import styled from 'styled-components';

export const DivBox = styled.div`



width: 430px !important;
height: 500px;
position: relative;
z-index: 1;
padding: 0;
margin: 0;
left: 10px;
bottom: 885px;
overflow: visible;
z-index: 1;
border-radius: 30px;
background-color: red;
display: flex;
align-self: center;

#btone{
    color: black !important;
svg{
    color: black !important;
}
}
#bttwo{
    color: black !important;
svg{
    color: black !important;
}
}




.Cardbox{
    
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: black;    
    width: 300px;
height: 600px;
    bottom: 0px;
    
    
        z-index: 2;
        border-radius: 20px;
        overflow: visible !important;

    :hover{
        background-color: rgb(239,68,68);
        color: white;
    }


    p{
        font-size: 15px;
        margin: 15px 0;
    }
    img{
        display: flex;
        width: 230px !important;
        height: 500px !important;
        position: relative;
        bottom: 0px !important;
        left: 20px !important;
        
        z-index: 1;
        border-radius: 50px !important; 
        object-fit: cover;
        margin-right: 20px;
        
      
    }
    svg{
        font-size: 45px;
        margin: 15px;
    }
}





`