import styles from "./footer.module.css";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        icellers | uki |{" "}
        <span className={styles.icon}>
          <a
            href="https://github.com/ukihunter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
        </span>
      </div>
      <div className={styles.text}>@All right Riceverd </div>
    </footer>
  );
};

export default Footer;
