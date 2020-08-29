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
                  <img src="https://images.ctfassets.net/ooa29xqb8tix/2IwSz500ZOmoyWWCoc28as/16c9a0ca05d3b125c9df82e0d6522718/DraggedImage.jpeg" />
                  <p>
                    askhg ajhslkjhl a jashlak jaslkjh ah ajh kjahjh aj hkla
                    dshflkhsak fsdlkjashdkjh kjs j ahskjh dsfjh lkj ksslkjh se
                    sd sdusdoiu ysui soiu ysdoiuy dsiuidsuy iosdp sd
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <img src="https://moriohcdn.b-cdn.net/1a984cc004.png" />
                  <p>
                    askhg ajhslkjhl a jashlak jaslkjh ah ajh kjahjh aj hkla
                    dshflkhsak fsdlkjashdkjh kjs j ahskjh dsfjh lkj ksslkjh se
                    sd sdusdoiu ysui soiu ysdoiuy dsiuidsuy iosdp sd
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                 <img src="https://moriohcdn.b-cdn.net/1a984cc004.png"/>
                  <p>
                    askhg ajhslkjhl a jashlak jaslkjh ah ajh kjahjh aj hkla
                    dshflkhsak fsdlkjashdkjh kjs j ahskjh dsfjh lkj ksslkjh se
                    sd sdusdoiu ysui soiu ysdoiuy dsiuidsuy iosdp sd
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <img src="https://static-2.gumroad.com/res/gumroad/2845048238670/asset_previews/7df0d3cc982a22c4a3d1a9002f9c3645/retina/01.png" />
                  <p>
                    askhg ajhslkjhl a jashlak jaslkjh ah ajh kjahjh aj hkla
                    dshflkhsak fsdlkjashdkjh kjs j ahskjh dsfjh lkj ksslkjh se
                    sd sdusdoiu ysui soiu ysdoiuy dsiuidsuy iosdp sd
                  </p>
                </Tab.Pane>
                
                <Tab.Pane eventKey="fifth">
                  <img src="https://i.morioh.com/990d21e6a2.png" />
                  <p>
                    askhg ajhslkjhl a jashlak jaslkjh ah ajh kjahjh aj hkla
                    dshflkhsak fsdlkjashdkjh kjs j ahskjh dsfjh lkj ksslkjh se
                    sd sdusdoiu ysui soiu ysdoiuy dsiuidsuy iosdp sd
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
