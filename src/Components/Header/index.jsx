import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "./logo.png";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // const navigate = useNavigate();
  cons;
  function signUp() {}
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
          <div className={styles.login} onClick={signUp}>
            LOG IN
          </div>
          <div className={styles.signUp}>SIGN UP</div>
        </div>
      </div>
      {/* <button onClick={()=>{navigate('/about')}}>SEE ABOUT</button> */}
    </>
  );
};

export default Header;
// data-aos="fade-right"
