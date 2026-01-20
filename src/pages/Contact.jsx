import styles from "./Contact.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>

      <p className={styles.subtitle}>
        I’m actively seeking opportunities as a Java Full Stack Developer.
        Feel free to contact me for roles, collaborations, or project discussions.
      </p>

      <div className={styles.contactGrid}>
        {/* Gmail */}
        <a
          href="mailto:chaudharisomesh127@gmail.com"
          className={`${styles.contactItem} ${styles.gmailItem}`}
        >
          <MdEmail className={styles.gmailIcon} />
          <span>chaudharisomesh127@gmail.com</span>
        </a>

        {/* Phone */}
        <a href="tel:+919145223212" className={styles.contactItem}>
          <FaPhoneAlt />
          <span>+91 91452 23212</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/someshchaudhari123"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/somesh-chaudhari-bb97471b6/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/chaudharisomesh127/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          <SiLeetcode />
          <span>LeetCode</span>
        </a>

        {/* HackerRank */}
        <a
          href="https://www.hackerrank.com/profile/diamondsomesh777"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          <SiHackerrank />
          <span>HackerRank</span>
        </a>

        {/* CodeChef */}
        <a
          href="https://www.codechef.com/users/somesh127"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          <SiCodechef />
          <span>CodeChef</span>
        </a>

        {/* Location */}
        <div className={styles.contactItem}>
          <FaMapMarkerAlt />
          <span>Pune, India</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
