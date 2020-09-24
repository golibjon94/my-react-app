import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import aurora1Img from "../assets/aurora1.jpg";
import aurora2Img from "../assets/aurora2.jpg";
import aurora3Img from "../assets/aurora3.jpg";
import aurora4Img from "../assets/aurora4.jpg";
export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel style={{height:"900px", width: "1300px" }}>
        <Carousel.Item >
          <img className="d-block w-100" src={aurora1Img} alt="Aurora" />
          <Carousel.Caption>
            <h3>Aurora image</h3>
            <p>
              We are a legal specialist, with deep in-house roots and
              understanding. That understanding means we know how critical
              integration is to successful IT initiatives. So we design and
              deliver software and services in ways that truly connect
              technology, data and process.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={aurora2Img} alt="Aurora" />
          <Carousel.Caption>
            <h3>Aurora image</h3>
            <p>
              It also means we build interfaces and workflows specifically tuned
              to lawyers, clients and diverse staff roles — each providing
              necessary context and intuitive experience for those audiences.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
          <img className="d-block w-100" src={aurora3Img} alt="Aurora" />
          <Carousel.Caption>
            <h3>Aurora image</h3>
            <p>
              We are focused on partnering in ways that sincerely prioritize
              your success. So we execute projects at a scale and pace that’s
              best suited to your specific environment, priorities, culture, and
              timelines — not ours.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
          <img className="d-block w-100" src={aurora4Img} alt="Aurora" />
          <Carousel.Caption>
            <h3>Aurora image</h3>
            <p>
              We work to achieve success for you and build a long term
              relationship. You’ve already made a big investment in the promise
              of new software. We’re the team that will enable you to achieve
              real ROI in practice.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
          <img className="d-block w-100" src={aurora1Img} alt="Aurora" />
          <Carousel.Caption>
            <h3>Aurora image</h3>
            <p>
              We are a legal specialist, with deep in-house roots and
              understanding. That understanding means we know how critical
              integration is to successful IT initiatives. So we design and
              deliver software and services in ways that truly connect
              technology, data and process.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
