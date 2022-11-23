import Navigation from "../../../../../Navigation";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Materi11Sect3 = () => {
  const navigate = useNavigate();
  const routeMateri11Sect1 = () => {
    const path = `/class/japanese/stage-1/1-1/materi/1`;
    navigate(path);
  };
  const routeMateri11Sect2 = () => {
    const path = `/class/japanese/stage-1/1-1/materi/2`;
    navigate(path);
  };
  const routeMateri11Sect4 = () => {
    const path = `/class/japanese/stage-1/1-1/materi/4`;
    navigate(path);
  };
  const routeMateri11Sect5 = () => {
    const path = `/class/japanese/stage-1/1-1/materi/5`;
    navigate(path);
  };
  const routeLatihan11Sect3 = () => {
    const path = `/class/japanese/stage-1/1-1/latihan/3`;
    navigate(path);
  };
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="BGClassMateri">
        <Container className="ContainerMateri pt-5 d-flex justify-content-center align-items-center">
          <div className="RowMateri">
            <div className="ColMateri d-flex justify-content-center align-items-center">
              <h1 className="text-dark">Tempat Materi 3</h1>
            </div>
            <div className="ColButtonMateri d-flex pt-3 ps-4 pe-4 justify-content-between align-items-center">
              <button className="btnPrev" onClick={routeMateri11Sect2}>
                Prev
              </button>
              <div className="PaginationMateri">
                <ul>
                  <li>
                    <button onClick={routeMateri11Sect1}></button>
                  </li>
                  <li>
                    <button onClick={routeMateri11Sect2}></button>
                  </li>
                  <li>
                    <button disabled></button>
                  </li>
                  <li>
                    <button onClick={routeMateri11Sect4}></button>
                  </li>
                  <li>
                    <button onClick={routeMateri11Sect5}></button>
                  </li>
                </ul>
              </div>
              <button className="btnNext" onClick={routeMateri11Sect4}>
                Next
              </button>
            </div>
            <div className="mt-1 d-flex justify-content-center">
              <button onClick={routeLatihan11Sect3}>Latihan</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Materi11Sect3;
