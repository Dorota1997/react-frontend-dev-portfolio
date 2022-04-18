import styles from "../styles/Footer.module.scss";
import { Icon } from "@iconify/react";

const Footer = ({ socialMedia, personalInfo }) => {
  const socialMediaMap = socialMedia.map((link) => (
    <span key={link.name}>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        <Icon icon={link.class} />
      </a>
    </span>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles["social-links"]}>{socialMediaMap}</div>
      <div className={styles["copyright-group"]}>
        <small>
          Copyright &copy; {personalInfo ? personalInfo.name : "???"}
        </small>
        <br />
        <small>Thanks to my close friend and colleague 纪丽瑶</small>
      </div>
      <div className={styles.archives}>
        <small className={styles.title}>Previous Versions</small>
        <br />
        <br />
        <a
          href="https://seanred-v-1-1-3-reactversion.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          V1.1.3 seanred.io React version
        </a>
      </div>
    </footer>
  );
};

export default Footer;
