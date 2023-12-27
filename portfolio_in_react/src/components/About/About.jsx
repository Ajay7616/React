import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/Image.png")} alt="Me with a laptop" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                As a beginner, I have handful experience in developing Full Stack projects
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning</h3>
              <p>
                I am currently developing my knowledge in Machine Learning branch also
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};