import styled from 'styled-components';

export const DivBox = styled.div`



width: 430px !important;
height: 100%;
position: relative;
z-index: 1;
padding: 0;
margin: 0;
left: 10px;
bottom: 765px;
overflow: visible;
z-index: 1;
border-radius: 30px;
background-color: transparent;
display: flex;
align-self: center;
svg{
    color: black
}

#bt1{
    position: relative;
    left: 100px;
    top: 932px;
    z-index: 4;
    svg{
        position: relative;
        z-index: 5;
        color: black;
    }

}

#bt2{
    position: relative;
    left: 250px;
    top: 0px;
    z-index: 4;

    svg{
        position: relative;
        z-index: 5;
        color: black;
    }
}

h2{
    font-size: 25px;
    align-items: center;
    color: rgb(239,68,68);
    margin-top: 70px;
    margin-left: 40px;
    border-left: 15px solid rgb(239,68,68);
    padding-left: 10px;
}

.BoxMaster{

    display: flex;
    flex-direction: row;
    margin-top: 20px;
    width: 500px;
    height: 100px;
    width: 90%;
    justify-content: space-between;
    bottom: 0px;
    position: relative;

    h1{
    font-size: 36px;
    align-items: center;
    margin-right: 80px; 
    margin-left: 50px;
    white-space: nowrap;
    font-weight: 600;
}

}

.Cardbox{
    
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: black;    
    width: 500px;
height: 900px;
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
        width: 320px !important;
        height: 675px !important;
        position: relative;
        bottom: 10px !important;
        left: 5px !important;
        
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