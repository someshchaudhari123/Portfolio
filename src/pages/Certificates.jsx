import styles from "./Certificates.module.css";
import { certificates } from "../data/certificates";

function Certificates() {
  return (
    <section id="certificates" className={styles.container}>
      <h1 className={styles.heading}>Certification</h1>

      <div className={styles.grid}>
        {certificates.map((cert, index) => (
          <div className={styles.card} key={index}>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>

            <div className={styles.actions}>
              {/* <a href={cert.file} target="_blank" rel="noreferrer">
                View
              </a> */}
              <a href={cert.file} download>
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;