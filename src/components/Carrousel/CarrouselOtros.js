import Carousel from "react-bootstrap/Carousel";
import remera4 from "../../img/ropa/remera4.jpeg";
import remera5 from "../../img/ropa/remera5.jpeg";
import remera6 from "../../img/ropa/remera6.jpeg";
import { Row, Col, Card } from "react-bootstrap";

const otrosArray = [remera4, remera5, remera6];

const CarrouselOtros = () => {
  return (
    <>
      <h1>Otros</h1>
      <Carousel>
        <Carousel.Item>
          <Row xs={1} md={3} className="g-4">
            {otrosArray.map((otros) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={otros} />
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
            {otrosArray.map((otros) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={otros} />
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
            {otrosArray.map((otros) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={otros} />
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

export default CarrouselOtros;
