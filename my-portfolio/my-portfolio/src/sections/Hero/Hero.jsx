import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';
import {useTheme} from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    return(
    <section id = "hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className ={styles.hero} 
                src={heroImg} 
                alt="Profile Picture of Nennina Felle" 
            />
            <img className={styles.colorMode}
                 src={themeIcon} 
                 alt ="Color mode icon">
            </img>
        </div>
        <div className ={styles.info}>
            <h1>
            Nennina 
            <br />
            Felle
            </h1>

            <h2>
                Full-Stack Developer
            </h2>
            <span>
                <a href="https://twitter.com/" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com/" target="_blank">
                    <img src={githubIcon} alt="GitHub icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn icon" />
                </a>
            </span>
            <p>
                Passion for developing modern react apps for commercial businesses.
            </p>
            <a href ={CV} download>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
    );
} 

export default Hero;