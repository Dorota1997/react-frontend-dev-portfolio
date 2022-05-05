import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "../styles/Experience.module.scss";
import { Icon } from "@iconify/react";

const Experience = ({ sectionName, experience }) => {
  const exp = experience.map((exp) => {
    const technologies = exp.technologies;
    const lessons = exp.lessons.map((lesson) => {
      return (
        <span className={styles["main-badge"]} key={lesson}>
          {lesson}
        </span>
      );
    });
    const tech = technologies.map((technology) => {
      return (
        <span className={styles["badge"]} key={technology}>
          {technology}
        </span>
      );
    });
    return (
      <VerticalTimelineElement
        date={exp.time}
        iconStyle={{
          background: "#000",
          color: "#00d9ff",
          textAlign: "center",
        }}
        icon={<Icon icon="logos:react" />}
        key={exp.time}
      >
        <h3 className={styles["vertical-timeline-element-title"]}>
          {exp.title}
        </h3>
        <h4 className={styles["vertical-timeline-element-subtitle"]}>
          <span>{exp.organization}</span>
          <span className={styles.lessons}>{lessons}</span>
        </h4>
        <div className={styles["badge-group"]}>{tech}</div>
      </VerticalTimelineElement>
    );
  });

  return (
    <section className={styles["experience"]}>
      <h1 className="section-title">
        <span>{sectionName}</span>
      </h1>
      <VerticalTimeline>
        {exp}
        <VerticalTimelineElement
          iconStyle={{
            background: "#000",
            color: "#00d9ff",
            textAlign: "center",
          }}
          icon={<Icon icon="bxs:hourglass-top" />}
        />
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
