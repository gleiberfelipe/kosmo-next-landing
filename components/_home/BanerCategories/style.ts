import styled from 'styled-components';

export const BBox = styled.div`

display: flex;
flex-direction: row;
background-color: black;
margin:50px;
width: 1170px;
height: 500px;
padding: 50px;

.textMain{
    display: flex;
    flex-direction: column;

    h2{
        font-size: 16px;
        color: rgb(0,255,102);
        margin-bottom: 20px;
        
    }

    h1{
        font-size: 48px;
        width: 600px;
        color: rgb(250,250,250);
        margin-bottom: 20px;
    }

    .badges{
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;

        div{
            background-color: white;
            border-radius: 50%;
            margin: 15px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 50px;
            height: 50px;

        .number{
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin:0;
        }
        
        .time{
            font-size: 11px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin:0;
        }
        }
    }
    Button{
        background-color: rgb(0,255,102);
        border-radius: 4px;
        width: 170px;
        height: 56px;
        padding: 0 25px;
    }
}

.imgBox{
    
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%, rgba(0,0,0, 0.5) 100%);
        border-radius: 50%;

    img{
    width: 800px;
    height: 620px;
    object-fit: contain;
    transform: scale(1.4);
    position: relative;
    bottom: 120px;
    right: 40px;
    

}}


`