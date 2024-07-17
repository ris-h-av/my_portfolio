import styles from "./heroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg"

function Hero() {
  return (
    <section className={styles.container} id="hero">
      <div>
        <img className={styles.hero} src={heroImg} alt="profile pic" />
        <img className={styles.colorMode} src={themeIcon} alt="change theme" />
      </div>
      <div className={styles.info}>
        <h1>Risab Kumar</h1>
      </div>
    </section>
  );
}

export default Hero;
