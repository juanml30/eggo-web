import Carousel from "react-bootstrap/Carousel";
import remera1 from "../../img/ropa/remera1.jpeg";
import remera2 from "../../img/ropa/remera2.jpeg";
import remera3 from "../../img/ropa/remera3.jpeg";
import { Row, Col, Card } from "react-bootstrap";

const remeraArray = [remera1, remera2, remera3];

const CarrouselRemeras = () => {
  return (
    <>
      <h1>Remeras</h1>
      <Carousel>
        <Carousel.Item>
          <Row xs={1} md={3} className="g-4">
            {remeraArray.map((remera) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={remera} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} md={3} className="g-4">
            {remeraArray.map((remera) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={remera} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} md={3} className="g-4">
            {remeraArray.map((remera) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={remera} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarrouselRemeras;
