import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>

      <p className={styles.subtitle}>
  I am a Java Full Stack Developer with hands-on experience in Java, J2EE, Spring, Spring Boot, Spring Security, Hibernate, PostgreSQL, MySQL, and React. I hold a Bachelor of Engineering in Artificial Intelligence and Data Science from Savitribai Phule Pune University (SPPU).
</p>

<p className={styles.subtitle}>
  I specialize in building scalable, secure, and high-performance web applications with a strong focus on clean architecture and maintainable code. I am passionate about continuously learning modern software technologies and improving my development skills to deliver efficient and reliable solutions.
</p>
    </section>
  );
}

export default About;
