import React, { Component } from "react";
import CarouselBox from "../Component/CarouselBox";
import Carousel from "react-bootstrap/Carousel";
import { Container, CardDeck, Card, Button } from "react-bootstrap";
export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox/>
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?
                                    auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <Card.Title> Developers </Card.Title>

                <Card.Text>
                  Photographer: Anna Shvets The best free stock photos and
                  videos from talented creators.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1172105/pexels-photo-1172105.jpeg?
                     auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360"
              />
              <Card.Body>
                <Card.Title> Developers </Card.Title>
                <Card.Text>
                  Photographer: Anna Shvets The best free stock photos and
                  videos from talented creators.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1231023/pexels-photo-1231023.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360https://images.pexels.com/photos/
                     1231023/pexels-photo-1231023.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360"
              />
              <Card.Body>
                <Card.Title> Developers </Card.Title>
                <Card.Text>
                  Photographer: Anna Shvets The best free stock photos and
                  videos from talented creators.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}
