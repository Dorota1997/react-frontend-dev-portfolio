import styles from "../styles/Skills.module.scss";
import { Icon } from "@iconify/react";

const Skills = ({ sectionName, skillIcons }) => {
  return (
    <section className={styles.skills + " --secondary-background"}>
      <h1 className="section-title">
        <span>{sectionName}</span>
      </h1>
      <div className={styles["icon-group"]}>
        <ul>
          {skillIcons.map((skills) => (
            <li
              className={styles["skills-tile"] + " --skills-tile"}
              key={skills.name}
            >
              <Icon icon={skills.class} />
              <p className={styles["skills-name"]}>{skills.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
