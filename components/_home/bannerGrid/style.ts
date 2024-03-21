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

.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 280px);
    grid-template-rows: repeat(2, 280px);
    gap: 20px;
  }

  .grid-item {
    background-color: #ccc;
    border: 1px solid #999;
    padding: 20px;
    text-align: center;
    background-image: linear-gradient(to left top, #595757, #434142, #2e2d2d, #1a1a1a, #000000);
 
    .textPerfume{
        position: relative;
        bottom: 110px;
        display: flex;
        flex-direction: column;
        color: white;
        text-align: left;

        h1{
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        p, span{

            font-size: 15px;
            font-weight: 500px;
        }

        a{
            margin-top: 10px;        
            text-decoration: underline;
        }

        
    }
  }
  .grid-item-jbl {
    background-color: #ccc;
    border: 1px solid #999;
    padding: 20px;
    text-align: center;
    background-image: linear-gradient(to left top, #595757, #434142, #2e2d2d, #1a1a1a, #000000);
    img{
        transform: scale(1.5);
        position: relative;
        top: 50px;
        left: 35px;
    }
    .textJbl{
        position: relative;
        bottom: 30px;
        display: flex;
        flex-direction: column;
        color: white;
        text-align: left;

        h1{
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        p, span{

            font-size: 15px;
            font-weight: 500px;
        }

        a{
            margin-top: 10px;        
            text-decoration: underline;
        }

        
    }
  }

  .item-2x2 {
    grid-column: span 2;
    grid-row: span 2;
    background-color: rgb(0,0,0);
    overflow: hidden;
    img{
        transform: scale(1.4);
        position: relative;
        top: 50px;
    }

    .textPlay{
        position: relative;
        bottom: 30px;
        display: flex;
        flex-direction: column;
        color: white;
        text-align: left;

        h1{
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        p, span{

            font-size: 15px;
            font-weight: 500px;
        }

        a{
            margin-top: 10px;        
            text-decoration: underline;
        }

        
    }
  
  }

  .item-2x1 {
    grid-column: span 2;
    grid-row: span 1;
    background-color: rgb(0,0,0);
    overflow: hidden;

    img{
        transform: scale(0.85) scaleX(-1);
        position: relative;
        bottom: 70px;
        left: 50px;
    }
    .textWomen{
        position: relative;
        bottom: 250px;
        display: flex;
        flex-direction: column;
        color: white;
        text-align: left;

        h1{
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        p, span{

            font-size: 15px;
            font-weight: 500px;
        }

        a{
            margin-top: 10px;        
            text-decoration: underline;
        }

        
    }
  
  }
  .badgesMaster{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
    
    .badgesChildren{
        display: flex;
        flex-direction: column;
        align-items: center;
    justify-content: center;
   
    }

  }

.firstcircle{
    display: flex;
width: 60px;
height: 60px;
border-radius: 50%;
background-color: gray;
align-items: center;
justify-content: center;
}
.secondcircle{
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
    color: white;
    align-items: center;
    justify-content: center;

    p{
        display: flex;
        font-size: 30px;
        align-items: center;
justify-content: center;
    }
}
.textBox{

    margin-top: 30px;
    margin-bottom: 30px;
        display: flex;
        flex-direction: column;        
        align-items: center;
        justify-content: center;
    h1{
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p{
        font-size: 12px;
    }
}

`