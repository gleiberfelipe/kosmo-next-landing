import styled from 'styled-components';

export const NavBox = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
padding: 20px 200px 0px 80px;
width: 100%;
border-bottom: 2px solid rgb(245,245,245);


h1{
    font-size: 24px;
    color: rgb(0,0,0);
    font-weight: 500;
}
div{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 12px;

input{
    background-color: rgb(245,245,245);
    padding: 0px;
    width: 153px;
    height: 18px;
        ::placeholder{
            font-size: 50% !important;
        }
    }
svg{
    font-size: 20px;
    margin:0 10px;
}
    .search{
        background-color: rgb(245,245,245);
        margin-left: 0px;
    }

}
.divLi{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 300px;
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        li{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            width: 100%;
        }
    }
}


`