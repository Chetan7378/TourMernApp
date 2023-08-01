import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasconryTmagesGallery from "../components/Image-gallery/MasconryTmagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
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
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* Featured Tour */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our fatured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* Featured Tour end*/}
      {/* experince section sart*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br />
                  We will serve you
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br />
                  Quam soluta voluptatum voluptate quibusdam suscipit eum.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5 ">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15+</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="ecperience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* experince sections end */}

      {/* -------- gallry sections start ---------*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallary"} />
              <h2 className="gallery__title">Visit our customers gallery</h2>
            </Col>
            <Col lg="12">
              <MasconryTmagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* -------- gallry sections end ----------*/}

      {/* -------- testimonials sections sstart ----------*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />

              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* -------- testimonials sections end ----------*/}
    </>
  );
};

export default Home;
