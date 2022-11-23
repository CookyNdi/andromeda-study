import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ContentMainPage = () => {
  let Navigate = useNavigate();
  const routeLogin = () => {
    let path = `/login`;
    Navigate(path);
  };
  const routeRegister = () => {
    let path = `/register`;
    Navigate(path);
  };
  return (
    <div className="bg">
      <Container className="pt-5">
        <Row className="text-white">
          <Col sm={6}>
            <div className="SectLeft d-flex flex-column justify-content-center align-items-center">
              <h1>ANDROMEDA</h1>
            </div>
          </Col>
          <Col sm={6}>
            <div className="SectRight d-flex align-items-center">
              <div className="d-flex flex-column ">
                <h4>
                  Bermain Sambil Belajar Itu Nyata, <br />
                  Buat Waktu Belajar Jadi Menyenangkan
                </h4>
                <div>
                  <form className="BtnMain d-flex flex-column align-items-center">
                    <button className="mt-3 btn-1" onClick={routeLogin}>
                      <span></span> Mulai
                    </button>
                    <button className="mt-3 btn-2" onClick={routeRegister}>
                      <span></span> Belum Punya Akun
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentMainPage;
