import { Container } from "react-bootstrap";

const LoginContent = () => {
  return (
    <div className="bg">
      <Container className="pt-5 bgTest d-flex align-items-center justify-content-center">
        <div className="box">
          <div className="form">
            <h2>Login</h2>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <div className="link">
              <a href="/register">Register</a>
            </div>
            <input type="submit" value="Login" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginContent;
