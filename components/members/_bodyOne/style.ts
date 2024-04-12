
import styled from "styled-components";




export const BodyBox = styled.div`

display: flex;
flex-direction: row;


.boxOne{

    width: 500px;
    height: 500px;
    background-color: red;
    

}
.boxTwo{

    width: 300px;
    height: 300px;
    background-color: purple;

    .img{
        width: 100%;
        height: 100%;
        background-color: green;
        display: flex;
        flex-direction: column;
        object-fit: contain;
        border-radius: 50%;
    }
}

`
