import { Container } from "react-bootstrap";

const RegisterContent = () => {
  return (
    <div className="bg">
      <Container className="pt-5 bgTest d-flex align-items-center justify-content-center">
        <div className="boxReg">
          <div className="formReg">
            <h2>Register</h2>
            <div className="inputBoxReg">
              <input type="text" required="required" />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBoxReg">
              <input type="password" required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <div className="inputBoxReg">
              <input type="password" required="required" />
              <span>Confirm Password</span>
              <i></i>
            </div>
            <div className="link">
              <a href="/login">Login</a>
            </div>
            <input type="submit" value="Register" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterContent;
