import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Stage1 = () => {
  let Navigate = useNavigate();
  const routeMateri1 = () => {
    let path = `/class/japanese/stage-1/1-1/materi/1`;
    Navigate(path);
  };
  const routeLatihan1 = () => {
    let path = `/class/japanese/stage-1/1-1/latihan/1`;
    Navigate(path);
  };
  const routeMateri2 = () => {
    let path = `/class/japanese/stage-1/1-2/materi/2`;
    Navigate(path);
  };

  return (
    <div>
      <Container className="mb-4">
        <div className="BGStageJP">
          <Row className="text-center mt-3 text-white">
            <Col className="mt-2">
              <h2>Materi Stage 1</h2>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={3} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Materi 1-1</Card.Title>
                  <Card.Text>
                    Judul Materi ... <br />
                    Judul Materi Jepang
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={routeMateri1}>
                      Mulai
                    </Button>
                    <Button variant="primary" onClick={routeLatihan1}>
                      Latihan
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Materi 1-2</Card.Title>
                  <Card.Text>
                    Judul Materi ... <br />
                    Judul Materi Jepang
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" disabled onClick={routeMateri2}>
                      Mulai
                    </Button>
                    <Button variant="primary" disabled>
                      Latihan
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Materi 1-3</Card.Title>
                  <Card.Text>
                    Judul Materi ... <br />
                    Judul Materi Jepang
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" disabled>
                      Mulai
                    </Button>
                    <Button variant="primary" disabled>
                      Latihan
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Materi 1-4</Card.Title>
                  <Card.Text>
                    Judul Materi ... <br />
                    Judul Materi Jepang
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" disabled>
                      Mulai
                    </Button>
                    <Button variant="primary" disabled>
                      Latihan
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Materi 1-5</Card.Title>
                  <Card.Text>
                    Judul Materi ... <br />
                    Judul Materi Jepang
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" disabled>
                      Mulai
                    </Button>
                    <Button variant="primary" disabled>
                      Latihan
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Materi 1-6</Card.Title>
                  <Card.Text>
                    Judul Materi ... <br />
                    Judul Materi Jepang
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" disabled>
                      Mulai
                    </Button>
                    <Button variant="primary" disabled>
                      Latihan
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Materi 1-7</Card.Title>
                  <Card.Text>
                    Judul Materi ... <br />
                    Judul Materi Jepang
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" disabled>
                      Mulai
                    </Button>
                    <Button variant="primary" disabled>
                      Latihan
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Materi 1-8</Card.Title>
                  <Card.Text>
                    Judul Materi ... <br />
                    Judul Materi Jepang
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" disabled>
                      Mulai
                    </Button>
                    <Button variant="primary" disabled>
                      Latihan
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Ulangan 1</Card.Title>
                  <Card.Text>
                    Judul Materi ... <br />
                    Judul Materi Jepang
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" disabled>
                      Mulai
                    </Button>
                    <Button variant="primary" disabled>
                      Latihan
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Ulangan 2</Card.Title>
                  <Card.Text>
                    Judul Materi ... <br />
                    Judul Materi Jepang
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" disabled>
                      Mulai
                    </Button>
                    <Button variant="primary" disabled>
                      Latihan
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Stage1;
