import React from "react";
import TopLogo from "./TopLogo/topLogo";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import ShopFoto1 from "../../../Assets/shop1.jpg";
import ShopFoto2 from "../../../Assets/shop2.jpg";
import ShopFoto3 from "../../../Assets/shop3.jpg";

import styleClass from "./MainPage.module.css";

const mainPage = props => {
  return (
    <div className={styleClass.All}>
      <TopLogo></TopLogo>
      <div className={styleClass.Carousel}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={ShopFoto1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ShopFoto3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ShopFoto2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default mainPage;
