import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" fill alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            oh yes, we did. The lama pizza, well baked slice of pizza.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>find our restaurants</h1>
          <p className={styles.text}>
            1654R. Road #304
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1654R. Road #304
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1654R. Road #304
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1654R. Road #304
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>working hours</h1>
          <p className={styles.text}>
            monday until friday
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            saturday - sunday
            <br /> 9:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
