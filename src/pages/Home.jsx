import styles from "./Home.module.css";
// import profileImg from "../assets/profile.jpg";   // 👈 add this

function Home() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1>Somesh Chaudhari</h1>
        <h2>Java Full Stack Developer</h2>

        <p>
  Java Full Stack Developer with hands-on experience in designing and developing scalable web applications using Spring Boot, Hibernate, and Microservices architecture. Proficient in building responsive and user-friendly interfaces with React, Angular, and TypeScript. Strong understanding of RESTful APIs, database design with PostgreSQL and MySQL, and secure application development using Spring Security. Passionate about writing clean, maintainable code and delivering high-performance, reliable applications.
</p>

<a
  href={`${process.env.PUBLIC_URL}/Somesh_Chaudhari_9145223212.pdf`}
  className={styles.resumeBtn}
  download
>
  Download Resume
</a>

      </div>

      <div className={styles.imageWrapper}>
        <img
  src={`${process.env.PUBLIC_URL}/profile.jpg`}
  alt="Somesh Chaudhari - Java Full Stack Developer"
  className={styles.profileImage}
/>

      </div>
    </section>
  );
}

export default Home;
