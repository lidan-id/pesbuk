import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "./logo.png";
import { useEffect, useState } from "react";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";
import LoginToast from "../Toast/LoginToast";
const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginSubmited, setIsLoginSubmited] = useState(false);

  return (
    <>
      <div className={styles.navigasi}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} alt="" />
          <div>
            <span className={styles.pes}>PES</span>BUK
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={styles.login}
            onClick={() => {
              setIsLoginModalOpen(true);
            }}
          >
            LOG IN
          </div>
          <div
            className={styles.signup}
            onClick={() => {
              setIsRegisterModalOpen(true);
            }}
          >
            SIGN UP
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div onClick={navigate("./books")} className={styles.home}>
          Home
        </div>
        <div className={styles.books}>Books</div>
      </div>
      {/* <button onClick={()=>{navigate('/about')}}>SEE ABOUT</button> */}
      <LoginModal
        open={isLoginModalOpen}
        onClose={() => {
          setIsLoginModalOpen(false);
        }}
        submited={() => {
          setIsLoginModalOpen(false);
          setIsLoginSubmited(true);
        }}
      />
      <RegisterModal
        open={isRegisterModalOpen}
        onClose={() => {
          setIsRegisterModalOpen(false);
        }}
        alreadyUser={() => {
          setIsRegisterModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
      <LoginToast
        loginSubmit={isLoginSubmited}
        closeToast={() => {
          setIsLoginSubmited(false);
        }}
      />
    </>
  );
};

export default Header;
// data-aos="fade-right"
