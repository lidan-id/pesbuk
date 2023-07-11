import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function LoginModal({ open, onClose }) {
  return (
    <>
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="needs-validation">
            <div className="form-group was-validated mb-2">
              <label htmlFor="email" className="form-label">
                EMAIL
              </label>
              <input
                id="email"
                className="form-control is-valid"
                type="email"
                required
              />
              <div className="invalid-feedback">
                Please enter a valid email address
              </div>
            </div>
            <div className="form-group was-validated mb-2">
              <label htmlFor="password" className="form-label">
                PASSWORD
              </label>
              <input
                id="password"
                className="form-control is-valid"
                type="text"
                required
              />
              <div className="invalid-feedback">
                Please enter a valid password
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            className="btn mt-2 w-100"
            variant="primary"
            onClick={onClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
