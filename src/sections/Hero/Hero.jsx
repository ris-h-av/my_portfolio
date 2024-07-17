import styles from "./heroStyles.module.css";
import heroImg from "../../assets/hero-img.jpg";
import themeIcon from "../../assets/sun.svg"
import linkedinIcon from "../../assets/linkedin-light.svg"
import twitterIcon from "../../assets/twitter-light.svg"
import githubIcon from "../../assets/github-light.svg"

function Hero() {
  return (
    <section className={styles.container} id="hero">
      <div>
        <img className={styles.hero} src={heroImg} alt="profile pic" />
        <img className={styles.colorMode} src={themeIcon} alt="change theme" />
      </div>
      <div className={styles.info}>
        <h1>Risab Kumar</h1>
        <h2>Backend Developer</h2>
        <span>
          <a href="https://in.linkedin.com/" target="_blank" alt="linked in">
            <img src={linkedinIcon} alt="linkedin.com" />
          </a>
          <a href="https://x.com/" target="_blank" alt="twitter">
            <img src={twitterIcon} alt="twiiter.com" />
          </a>
          <a href="https://github.com/" target="_blank" alt="github">
            <img src={githubIcon} alt="github.com" />
          </a>
        </span>
        <p>
          With a passion to change the world. 
        </p>
        {/* <a href={CV}>
          <button className="hover"></button>
        </a> */}
      </div>
    </section>
  );
}

export default Hero;
