import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Login = () => {
  const navigate = useNavigate();
  const isFilled = () => {
    navigate("/");
  };
  return (
    <div className="wrapper bg-black d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">LOGIN</h2>
        <form className="needs-validation">
          <div className="form-group was-validated mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" required />
            <div className="invalid-feedback">Please Enter your email</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" required />
            <div className="invalid-feedback">Please Enter your password</div>
          </div>
          <div className="form-group form-check mb-2">
            <input type="checkbox" className="form-check-input" />
            <label htmlFor="checkbox" className="form-check-label">
              Remember me
            </label>
          </div>
          <button
            onClick={isFilled}
            type="submit"
            className="btn btn-success w-100 block mt-2"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
