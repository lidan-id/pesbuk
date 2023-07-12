import { useEffect, useState } from "react";
import styles from "./styles.module.css";
function LoginToast({ loginSubmit, closeToast }) {
  console.log(loginSubmit);
  useEffect(() => {
    let timer;
    if (loginSubmit) {
      timer = setTimeout(closeToast, 3000);
    }
    return () => clearTimeout(timer);
  }, [loginSubmit]);
  if (loginSubmit) {
    return (
      <div className={styles.container}>
        <div className={styles["title-container"]}>
          <div className={styles.title}>LOGIN COMPLETE !!!</div>
          <span onClick={closeToast} className={styles.x}>
            x
          </span>
        </div>
        <div className={styles.message}>Welcome!!</div>
      </div>
    );
  } else if (!loginSubmit) {
    return <div className={styles.empty}></div>;
  }
}
export default LoginToast;
