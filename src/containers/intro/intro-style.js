import styled from "styled-components";

export const IntroStyle = styled.div`
  height: 100vh;
  background: white;

  .App {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    position: relative;
    
  }
  .nums-items{
    padding-bottom: 15%;
    color: rgba(0, 0, 0, 0.644);
  }
.description{
  color:black;
  display:flex;
  flex-direction: column;
    align-items: flex-start;
    width:25vw ;
    
    
    
}
.description-h4{
  padding-bottom: 40px;
  font-weight: bold;
  padding-left: 30px
}
.container{
  display:flex;
  justify-content: space-between;
  width: 90%;
  height: 70%;
  
}
  .logo {
    width: 100px;
    margin-bottom: 30px;
  }
  .title {
    margin-bottom: 30px;
    font-size: 24px;
  }

  .container-buttons  {
    position: absolute;
    margin: 0 auto;
    bottom: 100px;
    display: flex;
    font-size: 12px;
  }
.flexbox{
  display:flex;
}
  .slider-container {
    width: 100vw;
    height: 100vh;
    position:relative;
    z-index: 2;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100vh;
    display:flex;
  }
  
  &.activ{

.swiper-slide{
    animation-duration: 10s;
    animation-name: slidein;
   }
   @keyframes slidein {
    from {
      .imag{
        opacity: 10;
      }
      
    }
  
    to {
      .imag{
        opacity: 0;
      }
    }
  }



  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: white;
    border: 1px solid white;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    
    
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-title{
    color:black;
    
  }
  .menu{
    width: 100%;
    height: 100%;
  }
  .menu-options{
    position: absolute;
    z-index: 2;
    color: black; 
    font-size: 0vw;
    top: 35vh;
   
    
  }
  .header{
    color: black;
    display: flex;
    font-weight: bold;
    font-size:21px;
    justify-content: space-between;

    &.active {
      
      

      .header-menu {
        border: 1px solid black;
        border: solid 1px black !important;
        animation-duration: 4s;
        animation-name: header-menu;
        color:white;
        background-color: transparent;
        
      }
      @keyframes header-menu {
        0% {
          color:black;
        }
      
        100% {
          color:white;
        }}
      .mater{
        animation-duration: 10s;
        animation-name:mater;
        color:white;
      }
      @keyframes mater {
        0% {
          color:black;
        }
      
        100% {
          color:white;
        }}
      .header-contenedor{
       
        display:flex;
        justify-content: space-between;
      }
      
    }
  }
  .menu-capa { 
    &.activ {
    animation-duration: 2s;
    animation-name: capaMenu;
    height: 100vh;
    width: 100vw;
    background-color: black;
    position: absolute;
    z-index: 6;
    .menu-options{
      animation-duration: 5s;
      animation-name: menu-options;
      position: absolute;
      z-index: 2;
      
      font-size: 0vw;
      top: 35vh;
      
      color: white;
      font-size: 2vw;
    }
    
    @keyframes menu-options {
      0% {
        color: black;
        
      }
      25%{
        color:black;
        font-size: 1vw;
        transform: translateY(50vh);
      }
    
      100% {
        color:white;
        font-size: 2vw;
        transform: translateY(0);
      }}
   
      @keyframes capaMenu {
        0% {
        height: 100vh;
        width: 1vw;
        background-color: black;
        position: absolute;
        z-index: 6;
        left: 99%;
        }
      
        100% {
          height: 100vh;
        width: 100vw;
        background-color: black;
        position: absolute;
        z-index: 6;
        left: 0%;
        }
    }
  }
  .header-menu {
    height: 15vh;
    padding: 25px 17px;
    margin-right: 12px;
  }}
  .opt{
    font-size: 0px;
  }
  .sofa{
    position: absolute;
    z-index: 6;
    width: 0vw;
    transform: translateX(50vw);
    
  }
 .options{
      font-size: 3vw;
    }
  .cillection-options:hover{
    .opt{
      padding: 0 1vw 2vh;
      color: rgb(192, 183, 183);
    }
    
    .sofa{
      position: absolute;
      z-index: 6;
      animation-duration: 2s;
      animation-name: sofa;
      width: 30vw
    }
    @keyframes sofa {
      0% {
        width: 10vw;
      }
    
      100% {
        width: 30vw;
      }
  }
    .collection{
      height: 10vh;
      font-size: 3vw;
      animation-duration: 2s;
      animation-name: coll;
      
    }
    @keyframes coll {
      0% {
        height: 0px;
      }
    
      100% {
        height: 10vh;
      }
  }
    .opt{

    animation-duration: 2s;
    animation-name: opt;
      font-size: 2vw;
    }
    @keyframes opt {
      0% {
        font-size: 0.5vw;
      }
    
      100% {
        font-size: 2vw;
      }
  }
  
  }
`;
