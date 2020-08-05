import React from "react";
import Slider from "react-slick";
import heart from "../../../assets/svgs/heart.svg";
import { Col } from "react-bootstrap";
import "./style.scss";
import heartBroken from "../../../assets/svgs/heart-broken.svg";

export default function ProductCard(props) {
  // We will load isLiked from firebase and then set it to this state
  const [isLiked, setIsLiked] = React.useState(false);

  const settings = {
    className: "sliderImages",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const likeBtn = isLiked ? (
    <img
      onClick={() => setIsLiked(!isLiked)}
      src={heart}
      className="likeIcon"
      alt="heart"
    />
  ) : (
    <img
      onClick={() => setIsLiked(!isLiked)}
      src={heartBroken}
      className="likeIcon"
      alt="heart broken"
    />
  );

  const slider = (
    <Slider {...settings}>
      <div>
        <img src={props.info.images[0]} alt="product pic" />
      </div>
      <div>
        <img src={props.info.images[1]} alt="product pic" />
      </div>
      <div>
        <img src={props.info.images[2]} alt="product pic" />
      </div>
    </Slider>
  );

  return (
    <React.Fragment>
      <Col xs={8} md={5} lg={3} className="productCard">
        {/*When we get the real product we need to add an id to each product*/}
        {likeBtn}
        {slider}
        <div className="productCardTitle">{props.info.title}</div>
        <div className="productCardPrice">${props.info.price}</div>
        <div className="productCardBrand">{props.info.brand}</div>
      </Col>
    </React.Fragment>
  );
}
