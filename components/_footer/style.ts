import styled from 'styled-components';

export const FooterBox = styled.div`

background-color: black;
padding: 50px 50px 0 50px;
width: 100%;
color: white;
margin: 0;

.FooterMaster{

    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
}
.FooterChildren{
    display:flex;
    flex-direction: column;
    padding: 0;
    margin: 0;

    h1{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    h2{
        font-size: 18px;
        margin-top: 10px;
    }

    p{
        font-size: 15px;
        margin-top: 10px;
    }
    input{
        margin-top: 10px;
        background-color: black;
        font-size: 15px;
        border: 2px solid white;
        border-radius: 5px;
        padding: 7px;
        ::placeholder{
            font-size: 15px;
            padding-left: 15px;
        }
    }
}
.FooterChildrenImg{
    
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;    
    margin-top: 10px;
   gap: 10px;
}
div.FooterChildrenImgV{
    
    
    img{
    width: 76px;
    height: 76px;
    object-fit: contain;
}
}
div.FooterChildrenImgH{
   
    display: flex;
    flex-direction: column;
 
img{
    width: 110px;
    height: 40px;
    object-fit: contain;
    transform: scale(2.8);
}
}
.FooterChildrenSvg{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;

    p{
font-size: 25px;
    }

}
.FooterFooter{
    margin-top: 50px;
    padding-bottom: 20px;
    font-size: 20px;
    color: gray;
    display: flex;
align-content: center;
justify-content: center;
}
`