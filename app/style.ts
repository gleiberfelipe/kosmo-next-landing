import styled from 'styled-components';

export const BoxHome = styled.div`
 
 display: flex;
 flex-direction: row;


 .divSlide{
    display: flex;
    flex-direction: row;
    color: rgb(250, 250, 250);
    width: 892px;
    height: 344px;
    padding-left: 64px;    
    background-color: rgb(0,0,0);
 main{

    display: flex;
    flex-direction: column;
    
    h1{
      font-size: 55px;
      gap: 8px;
      width: 294px;
      height: 120px;
      font-weight: 600;
    }

    p{
        font-size: 25px;
        white-space: nowrap;
        width: 150px;        
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 50px;

        svg{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 15px;
        }
    }

    hr{
        width: 120px;
    }
    section{
        display: flex;
        flex-direction: row;
        font-size: 16px;
        margin-top: 30px;
        margin-right: 100px;

        h2{
            font-size: 16px;
            color: rgb(250, 250, 250);
            align-items: center;
            text-align: center;
            padding: 13px;
        }
        img{
            width: 40px;
            height: 49px;
        }
    }
 }}

`