import { Container } from "react-bootstrap";
import Navigation from "../../../../../Navigation";

const Materi12 = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="BGClassMateri">
        <Container className="ContainerMateri pt-5 d-flex justify-content-center align-items-center">
          <div className="CardMateri d-flex justify-content-center align-items-center">
            <h1 className="text-dark">Materi 1-2</h1>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Materi12;
