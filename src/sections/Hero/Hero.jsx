import styles from "./heroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import twitterLight from "../../assets/twitter-light.svg"
import twitterDark from "../../assets/twitter-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import CV from "../../assets/cv.pdf"
import { useTheme  } from "../../common/ThemeContext";

function Hero() {
  const {theme,toggleTheme} = useTheme();

  const themeIcon = theme === 'light'? sun : moon;
  const linkedinIcon = theme === 'light'? linkedinLight : linkedinDark;
  const twitterIcon = theme === 'light'? twitterLight : twitterDark;
  const githubIcon = theme === 'light'? githubLight : githubDark;

  return (
    <section className={styles.container} id="hero">
      <div>
        <img className={styles.hero} src={heroImg} alt="profile pic" />
        <img className={styles.colorMode} src={themeIcon} onClick={toggleTheme} alt="change theme" />
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
        <a href={CV} download>
          <button className="hover" >Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
