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

    h1{
    font-size: 36px;
    align-items: center;
    margin-right: 80px; 
    margin-left: 50px;
    white-space: nowrap;
    font-weight: 600;
}

}
.BoxChildren{
    display: flex;
    flex-direction: row;
    align-items: center
    flex-wrap;
    margin-right: 20px;

}
.time{
    display: flex;
    flex-direction: column;
   
    margin-right: 15px;

    h3{
        font-size: 25px;
        align-items: center;
        padding-bottom: 10px;
    }

    p{
        font-size: 12px;
        align-items: top;
    }
}


`