import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1>Somesh Chaudhari</h1>
        <h2>Java Full Stack Developer</h2>

        <p>
          Java Full Stack Developer specializing in Spring Boot, Hibernate,
          PostgreSQL, and React. I build scalable backend systems and
          modern, responsive web applications with a strong focus on
          performance, security, and clean architecture.
        </p>

        <a
          href="/Somesh_9145223212.pdf"
          className={styles.resumeBtn}
          download
        >
          Download Resume
        </a>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/profile.jpg"
          alt="Somesh Chaudhari - Java Full Stack Developer"
          className={styles.profileImage}
        />
      </div>
    </section>
  );
}

export default Home;
