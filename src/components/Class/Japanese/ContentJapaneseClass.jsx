import { Container } from "react-bootstrap";
import Stage1 from "./Stage-1/Stage1";
import Stage2Jp from "./Stage-2/Stage2Jp";
import Stage3Jp from "./Stage-3/Stage3Jp";

const ContentJapaneseClass = () => {
  return (
    <div className="BGClassJp">
      <Container className="pt-5">
        <Stage1 />
        <Stage2Jp />
        <Stage3Jp />
      </Container>
    </div>
  );
};

export default ContentJapaneseClass;
