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
          2022 – 2025 | CGPA: 8.80
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
          2018 – 2021 | Percentage: 84.06%
        </p>

        <ul>
          <li>Studied fundamentals: Programming in C, Java, DBMS, Computer Networks</li>
          <li>Completed mini-projects and labs on Java and Web Technologies</li>
          <li>Gained strong foundation in software development concepts</li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
