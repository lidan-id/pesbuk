import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function RegisterModal({ open, onClose, alreadyUser }) {
  return (
    <>
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="needs-validation">
            <div className="form-group was-validated mb-2">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                id="firstname"
                className="form-control "
                type="text"
                required
              />
              <div className="valid-feedback">Looks good</div>
            </div>
            <div className="form-group was-validated mb-2">
              <label htmlFor="username" className="form-label">
                Last Name
              </label>
              <input className="form-control " type="text" required />
              <div className="valid-feedback">Looks good</div>
            </div>
            <div className="form-group was-validated mb-2">
              <label htmlFor="username" className="form-label">
                EMAIL
              </label>
              <input className="form-control " type="email" required />
              <div className="invalid-feedback">
                Please enter a valid email address
              </div>
            </div>
            <div className="form-group was-validated mb-2">
              <label htmlFor="username" className="form-label">
                PASSWORD
              </label>
              <input className="form-control " type="text" required />
              <div className="invalid-feedback">
                Please enter a valid password
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ marginRight: "160px" }}>
            <span style={{ color: "black" }}>Already a user?</span>
            <span
              onClick={alreadyUser}
              style={
                ({ width: "fix-content" },
                { color: "blue" },
                { cursor: "pointer" })
              }
            >
              LOG IN
            </span>
          </div>
          <Button className="w-100" variant="primary" onClick={onClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterModal;
