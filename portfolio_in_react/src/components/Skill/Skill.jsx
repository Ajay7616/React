import React from 'react';
import styles from './Skill.module.css';
import skills from "../../data/skill.json";
import { getImageUrl } from "../../utils";

export const Skill = () => {
    const categories = Array.from(new Set(skills.map(skill => skill.category)));

    return (
        <section className={styles.container} id="skill">
            <h2 className={styles.title}>Skills</h2>
            {categories.map((category, index) => (
                <div key={index}>
                    <h3 className={styles.category}>{category}</h3>
                    <div className={styles.content}>
                        <div className={styles.skills}>
                            {skills
                                .filter(skill => skill.category === category)
                                .map((skill, id) => (
                                    <div key={id} className={styles.skill}>
                                        <div className={styles.skillImageContainer}>
                                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                        </div>
                                        <p>{skill.title}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}