import styles from "./Education.module.css";

function Education() {
  return (
    <section id="education" className={styles.education}>
      <h2>Education</h2>

      {/* BE - AI & DS */}
      <div className={styles.educationCard}>
        <h3>Bachelor of Engineering in Artificial Intelligence and Data Science</h3>
        <p className={styles.institute}>
          Savitribai Phule Pune University, Pune
        </p>
        <p className={styles.duration}>
          June 2022 – June 2025 | CGPA: 8.80 |  SGPA (Last Sem): 9.55
        </p>

        <ul>
          <li>Studied core subjects: Machine Learning, Data Structures, DBMS, OOP, Operating Systems</li>
          <li>Built academic and self projects using Java, Spring Boot, Hibernate, PostgreSQL</li>
          <li>Practiced DSA on LeetCode, HackerRank, CodeChef</li>
        </ul>
      </div>

      {/* Diploma */}
      <div className={styles.educationCard}>
        <h3>Diploma in Computer Engineering</h3>
        <p className={styles.institute}>
          Maharashtra State Board of Technical Education, Jalna
        </p>
        <p className={styles.duration}>
          Aug 2018 – Aug 2021 | Percentage: 84.06%
        </p>

        <ul>
          <li>Studied fundamentals: Programming in C, Java, DBMS, Computer Networks</li>
          <li>Completed mini-projects and labs on Java and Web Technologies</li>
          <li>Gained strong foundation in software development concepts</li>
        </ul>
      </div>

      {/* 10th (SSC) */}
      <div className={styles.educationCard}>
        <h3>Secondary School Certificate (SSC)</h3>
        <p className={styles.institute}>
          Dnyanjyot High School, Jalna
        </p>
        <p className={styles.duration}>
          June 2017 – June 2018 | Percentage: 88.20%
        </p>

        <ul>
          <li>Completed secondary education with strong academic performance</li>
          <li>Built a solid foundation in Mathematics and Science</li>
          <li>Actively participated in school academic activities</li>
        </ul>
      </div>

    </section>
  );
}

export default Education;