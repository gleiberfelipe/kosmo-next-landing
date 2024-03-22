import styled from 'styled-components';

export const LoginBox = styled.div`

display: flex;
flex-direction: row;
padding: 50px 0;

.imageBox{
    width: 805px;
    height: 781px;
    background-color: rgb(203, 228, 232);

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

.FormBox{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px 0 50px;

   form{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px 0 50px;


    h1{
        font-size: 36px;
        color: black;
        margin-top: 30px; 
        margin-bottom: 15px;
        font-weight: 600;
        text-anchor: start;
    }

    p{
        font-size: 20px;
        color: black;
        text-align: start;
        margin-bottom: 25px;
        padding: 0px;
        margin-left: 0px;        
    }
    
    input{
        color: black;
        border-bottom: 1px solid gray;
        margin-bottom: 15px;
        width: 300px;

        ::placeholder{
            font-size: 20px;
            color: gray;
        }
    }}

    Button{
        padding: 0 20px;
        margin-top: 20px;
        width: 250px;
        height: 50px;
    }

    .bt1{
        background-color: rgb(239,68,68);
        color: white;
     
    }
    
    .bt2{
        background-color: white;
        color: black;
        border: 2px solid black;
        margin-bottom: 30px;
      

        svg{
            margin-right: 10px;
            font-size: 23px;
        }
    }

    Link{
    text-decoration: underline;
    }
}
`