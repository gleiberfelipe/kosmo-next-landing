import styled from 'styled-components';

export const DivBox = styled.div`


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
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    background-color: white;
    color: black;
    align-items: center;
    width: 100%;
    height: 100%;

    :hover{
        background-color: rgb(239,68,68);
        color: white;
    }
    div{
        width: 100%;
        height: 100%;
        display: flex;
    flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    p{
        font-size: 15px;
        margin: 15px 0;
    }
    
    svg{
        font-size: 45px;
        margin: 15px;
    }
}


`