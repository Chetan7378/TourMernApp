import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import guideImg from "../assets/images/guide.png";
import weatherImg from "../assets/images/weather.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet, consectetur adipicing elit.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipicing elit.",
  },
  {
    imgUrl: customizationImg,
    title: "customization",
    desc: "Lorem ipsum dolor sit amet, consectetur adipicing elit.",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
