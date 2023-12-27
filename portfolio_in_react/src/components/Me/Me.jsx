import React from 'react';
import styles from './Me.module.css';
import { getImageUrl } from "../../utils";
 
export const Me = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Ajay</h1>
          <p className={styles.description}>
            I'm a Computer Science Student, driven to excel in software development. 
          </p>
          <a href="resume.pdf" className={styles.contactBtn}>
            Resume
          </a>
        </div>
        <img src={getImageUrl("me/Image.png")} alt="My Image" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    );
  };