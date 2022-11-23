import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ClassContent = () => {
  const Navigate = useNavigate();
  const routeJapanese = () => {
    const path = `/class/japanese/`;
    Navigate(path);
  };
  return (
    <div>
      <div className="bg">
        <Container className="pt-5">
          <Row className="mt-4">
            <Col sm={4} className="mb-3">
              <Card className="p-2" style={{ height: "210px" }}>
                <Card.Body>
                  <Card.Title className="text-center">BAHASA JEPANG</Card.Title>
                  <Card.Text>
                    Belajar Bahasa Jepang <br />
                    Nihongo o manabu <br />
                    日本語を学ぶ
                  </Card.Text>
                  <div className="d-flex justify-content-end">
                    <Button onClick={routeJapanese}>Mulai</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="mb-3">
              <Card className="p-2" style={{ height: "210px" }}>
                <Card.Body>
                  <Card.Title className="text-center">
                    BAHASA INGGRIS
                  </Card.Title>
                  <Card.Text>
                    Coming Soon <br />
                    <br />
                    <br />
                    <div className="d-flex mt-3 justify-content-end">
                      <Button onClick={routeJapanese} disabled>
                        Mulai
                      </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="mb-3">
              <Card className="p-2" style={{ height: "210px" }}>
                <Card.Body>
                  <Card.Title className="text-center">BAHASA SUNDA</Card.Title>
                  <Card.Text>
                    Coming Soon <br />
                    <br />
                    <br />
                    <div className="d-flex mt-3 justify-content-end">
                      <Button onClick={routeJapanese} disabled>
                        Mulai
                      </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ClassContent;
