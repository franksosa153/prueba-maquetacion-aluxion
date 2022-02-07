import React, { useEffect } from "react";
import { logo } from "../../assets/images/images";
import { IntroStyle } from "./intro-style";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { useState } from "react";

const Intro = () => {
  let mySwiper: any = null;

  const [active, setActive] = useState(false);
  const [activ, setActiv] = useState(false);

  useEffect(() => {
    mySwiper = new Swiper(".swiper-container", {
      speed: 1000,

      direction: "vertical",
      
      
      navigation: {

        type: "progressbar",
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
  }, []);
console.log(activ);
  return (
    <IntroStyle>
      <div className={`menu-capa ${active ? "activ" : ""}`}>
      <div className="menu-options">
        <div className="contenedor-options">
<div className="cillection-options">  
<h3 className="options">Collection</h3> 
<div className="collection">
  <div className="optF">
<p  className="opt ">Fumiture</p>
</div>
<p className="opt">Lighting</p>
<p className="opt">Acessories</p>
<img className="sofa" src={require('../../assets/images/recursos/Sofá-blanco.png')} alt="" />
</div>
</div> 
<h3 className="options">Design</h3>
<h3 className="options">Craftmanship</h3>
<h3 className="options">Ethics </h3>
</div>
</div>
 </div>
      <div className="container-header">
      <div className={` header ${active ? "active" : ""}`}>
        <h5 className="mater">mater</h5>
        <div className="header-menu" onClick={() => setActive(!active)}>
          <img src='../../assets/images/images' alt="" />
          X
        </div>
      </div>
      </div>
<div className="App">


<div className="container-buttons">
  <p>--- boiler ReactJS ---</p>
</div>

<div className="slider-container" >
  <div className="swiper-container">
    {/* <!-- Additional required wrapper --> */}
    <div className="swiper-wrapper">
      {/* <!-- Slides --> */}


      <div className="swiper-slide">

        
        <div className="container">
          <div className="description " >
            <p className="description-info">Michael W.Dreeben</p>
            <h4 className="description-h4 ">
              Dunes Anthrazite Black
            </h4>
            <p className="info-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ipsa incidunt iste vel eius inventore ut sint est exercitationem aliquid molestiae
            </p>
          </div>
          
        </div><img  className="imag" src={require('../../assets/images/recursos/Mesa-negra.png')} alt="Meza negra" />

      </div>
      <div className="swiper-slide">
        <div className="container">
          <div className="description">
            <h4 className="description-h4">
              Dunes Anthrazite Black
            </h4>
            <p className="info-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ipsa incidunt iste vel eius inventore ut sint est exercitationem aliquid molestiae
            </p>
          </div>
          

        </div>
<img src={require('../../assets/images/recursos/Silla-negra.png')} alt="" />

      </div>
    </div>
    {/* <!-- If we need pagination --> */}
    <div className="swiper-pagination">

    </div>
    <div className="boton">
      <div className="boton-content">
        <h2>Product Detatails</h2>
      </div>
    </div>

    {/* <!-- If we need scrollbar --> */}
    <div className="swiper-scrollbar"></div>
  </div>
</div>
</div>
      
      {/*
       <!-- <div className="bottom"></div>If we need navigation buttons --> */}
       
       <div className="botons">
       <div className="swiper-button-prev">
         <p className="nums-items">1</p>
       </div>
<div className="swiper-button-next">
  <p className="nums-items">2</p>
</div>
</div>
    </IntroStyle>
  );

};

export default Intro;
