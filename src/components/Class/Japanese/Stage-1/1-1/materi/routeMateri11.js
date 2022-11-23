import { useNavigate } from "react-router-dom";
import Materi11Sect1 from "./1";

const routeMateri11 = () => {
  const navigate = useNavigate();
  const routeMateri11Sect1 = () => {
    const path = `/class/japanese/stage-1/1-1/materi/1`;
    navigate(path);
  };
  const routeMateri11Sect2 = () => {
    const path = `/class/japanese/stage-1/1-1/materi/2`;
    navigate(path);
  };
  const routeMateri11Sect3 = () => {
    const path = `/class/japanese/stage-1/1-1/materi/3`;
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
}

export default routeMateri11