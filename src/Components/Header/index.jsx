import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "./logo.png";
import { useEffect, useState } from "react";
import LoginModal from "../../Modals/LoginModal";
import RegisterModal from "../../Modals/RegisterModal";
const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <>
      <div className={styles.navigasi}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} alt="" />
          <div>
            <span>PES</span>BUK
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
      {/* <button onClick={()=>{navigate('/about')}}>SEE ABOUT</button> */}
      <LoginModal
        open={isLoginModalOpen}
        onClose={() => {
          setIsLoginModalOpen(false);
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
    </>
  );
};

export default Header;
// data-aos="fade-right"
