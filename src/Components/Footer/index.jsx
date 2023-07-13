import styles from "./styles.module.css";
import fb from "./Media/facebook.png";
import ig from "./Media/instagram.png";
import lk from "./Media/linkedin.png";
import pt from "./Media/pinterest.png";
import tw from "./Media/twitter.png";
import yt from "./Media/youtube.png";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles["sub-container"]}>
        <div>
          <div className={styles.title}>Company</div>
          <div>About Us</div>
          <div>Career</div>
          <div>Blog</div>
          <div>Contact Us</div>
        </div>
        <div>
          <div className={styles.title}>Polices</div>
          <div>Privacy Policies</div>
          <div>Terms of Use</div>
          <div>Secure Shopping</div>
          <div>Copy Right Policy</div>
        </div>
        <div>
          <div className={styles.title}>Help</div>
          <div>Payment</div>
          <div>Shipping</div>
          <div>Return</div>
          <div>FAQ</div>
        </div>
        <div>
          <div className={styles.title}>Misc</div>
          <div>Affiliate</div>
          <div>Sitemap</div>
        </div>
      </div>
      <div className={styles.images}>
        <a href="https://id-id.facebook.com/">
          <img className={styles.image} src={fb} alt="" />
        </a>
        <a href="https://id.linkedin.com/">
          <img className={styles.image} src={ig} alt="" />
        </a>
        <a href="https://www.instagram.com/">
          <img className={styles.image} src={lk} alt="" />
        </a>
        <a href="https://id.pinterest.com/">
          <img className={styles.image} src={pt} alt="" />
        </a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Did">
          <img className={styles.image} src={tw} alt="" />
        </a>
        <a href="https://www.youtube.com/">
          <img className={styles.image} src={yt} alt="" />
        </a>
      </div>
      <div className={styles.copyright}>
        Copyright © 2023 . Pesbuk.com. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
