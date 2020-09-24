import React, { Component } from "react";
import { Media, Container, Col, Row, Card, ListGroup } from "react-bootstrap";
import Js from '../assets/js.png'
export default class Blog extends Component {
  render() {
    return (
      <Container>
      <Row>
        <Col md="9">
          <Media className="m-5">
            <img
              width={150}
              height={150}
              className="mr-3"
              src={Js}
            />
            <Media.Body>
              <h5>Blog post</h5>
              <p>
                JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a
                programming language that conforms to the ECMAScript
                specification. [7] JavaScript is high-level, often just-in-time
                compiled, and multi-paradigm.
              </p>
            </Media.Body>
          </Media>

          <Media className="m-5">
          <img
              width={150}
              height={150}
              className="mr-3"
              src={Js}
            />
            <Media.Body>
              <h5>Blog post</h5>
              <p>
                JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a
                programming language that conforms to the ECMAScript
                specification. [7] JavaScript is high-level, often just-in-time
                compiled, and multi-paradigm.
              </p>
            </Media.Body>
          </Media>

          <Media className="m-5">
          <img
              width={150}
              height={150}
              className="mr-3"
              src={Js}
            />
            <Media.Body>
              <h5>Blog post</h5>
              <p>
                JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a
                programming language that conforms to the ECMAScript
                specification. [7] JavaScript is high-level, often just-in-time
                compiled, and multi-paradigm.
              </p>
            </Media.Body>
          </Media>

          <Media className="m-5">
          <img
              width={150}
              height={150}
              className="mr-3"
              src={Js}
            />
            <Media.Body>
              <h5>Blog post</h5>
              <p>
                JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a
                programming language that conforms to the ECMAScript
                specification. [7] JavaScript is high-level, often just-in-time
                compiled, and multi-paradigm.
              </p>
            </Media.Body>
          </Media>
        </Col>
            <Col md="3">
                  <h5 className="text-center mt-5">Categories</h5>
                  <Card>
                        <ListGroup variant="flush">
                              <ListGroup.Item>HTML/CSS</ListGroup.Item>
                              <ListGroup.Item>JAVASCRIPT</ListGroup.Item>
                              <ListGroup.Item>PYTHON</ListGroup.Item>
                              <ListGroup.Item>JAVA</ListGroup.Item>
                              <ListGroup.Item>C#</ListGroup.Item>
                        </ListGroup>
                  </Card>

                  <Card className="mt-3" bg="light">
                        <Card.Body>
                              <Card.Title>Side Widget</Card.Title>
                              <Card.Text>
                              JavaScript is high-level, often just-in-time
                              compiled, and multi-paradigm.
                              JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS,                            
                              </Card.Text>
                        </Card.Body>
                  </Card>
            </Col>
      </Row>
      </Container>
    );
  }
}
