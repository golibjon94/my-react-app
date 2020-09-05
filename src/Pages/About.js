import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="leds-tab-example" defaultActivKey="first">
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
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img src="https://techspawn.com/wp-content/uploads/2014/12/techspawn-designer.jpg"/>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Molestias voluptates doloribus, laborum repellat ad quod veniam,
                   in illum ex odio minus, repudiandae! Cupiditate veniam vitae illo sunt!
                    Mollitia, est, eum.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <img src="https://static2.clutch.co/s3fs-public/software-development-team-1.jpg" />
                  <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quia, 
                  amet reiciendis velit nobis corporis, nesciunt iste quaerat asperiores voluptatem, 
                  aliquam. 
                   
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                 <img src="https://cdn.seeklearning.com.au/media/images/career-guide/module/web-developer-module.jpg"/>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Molestias voluptates doloribus, laborum repellat ad quod veniam,
                   in illum ex odio minus, repudiandae! Cupiditate veniam vitae illo sunt!
                    Mollitia, est, eum.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                <p>
                  <img src="https://www.whizsolutions.co.uk/wp-content/uploads/2018/02/Server-Side-Frameworks-2.png"/>
                  Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Molestias voluptates doloribus, laborum repellat ad quod veniam,
                   in illum ex odio minus, repudiandae! Cupiditate veniam vitae illo sunt!
                    Mollitia, est, eum.
                  </p>
                </Tab.Pane>
                
                <Tab.Pane eventKey="fifth">
                  <img src="https://www.developintelligence.com/wp-content/uploads/2015/09/word-image-1.jpeg" />
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Molestias voluptates doloribus, laborum repellat ad quod veniam,
                   in illum ex odio minus, repudiandae! Cupiditate veniam vitae illo sunt!
                    Mollitia, est, eum.
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
