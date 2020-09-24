import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";

import Ux from "../assets/ux.jpg";
import Team from "../assets/team.jpg";
import Programming from "../assets/prog.jpg";
import Framework from "../assets/frame.png";
import Libraries from "../assets/libraries.png";
export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="leds-tab-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">Team </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">Programming </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src={Ux} width={550} height={400} />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing, elit.
                    Molestias voluptates doloribus, laborum repellat ad quod
                    veniam, in illum ex odio minus, repudiandae! Cupiditate
                    veniam vitae illo sunt! Mollitia, est, eum.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <img src={Team} width={550} height={400} />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rerum quia, amet reiciendis velit nobis corporis, nesciunt
                    iste quaerat asperiores voluptatem, aliquam.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img src={Programming} width={550} height={400} />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing, elit.
                    Molestias voluptates doloribus, laborum repellat ad quod
                    veniam, in illum ex odio minus, repudiandae! Cupiditate
                    veniam vitae illo sunt! Mollitia, est, eum.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <p>
                    <img src={Framework} width={550} height={400} />
                    Lorem, ipsum dolor sit amet consectetur adipisicing, elit.
                    Molestias voluptates doloribus, laborum repellat ad quod
                    veniam, in illum ex odio minus, repudiandae! Cupiditate
                    veniam vitae illo sunt! Mollitia, est, eum.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <img src={Libraries} width={550} height={400} />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing, elit.
                    Molestias voluptates doloribus, laborum repellat ad quod
                    veniam, in illum ex odio minus, repudiandae! Cupiditate
                    veniam vitae illo sunt! Mollitia, est, eum.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
