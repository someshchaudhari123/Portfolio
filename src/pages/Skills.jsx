import styles from "./Skills.module.css";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Technical Skills</h2>
<p className={styles.subtitle}>
  Core technologies and tools I use to build reliable, scalable, and secure software solutions.
</p>


      <div className={styles.skillGrid}>
        {skills.map((group, index) => (
          <div key={index} className={styles.skillCard}>
            <h3>{group.category}</h3>

            <ul>
              {group.items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
