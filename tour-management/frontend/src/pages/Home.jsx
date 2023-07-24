import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={"know before you go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Travelling opens the door to creating {""}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit neque eligendi ratione in veniam? Fugiat, quasi.
                  Ad perspiciatis quidem debitis alias temporibus ullam eligendi
                  saepe! Adipisci consequatur at nam rerum!
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* ==============Hero section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we server</h5>
              <h2 className="services__title">We offer our best</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
