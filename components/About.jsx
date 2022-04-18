import styles from "../styles/About.module.scss";
import Image from "next/image";
import { Icon } from "@iconify/react";

const About = ({ sectionName, profilePic, bioHeader, bio }) => {
  return (
    <section className={styles.about + " --primary-backgroun"}>
      <h1 className="section-title">
        <span>{sectionName}</span>
      </h1>
      <div className={styles["container"]}>
        <div className={styles.polaroid + " polaroid"}>
          <span>
            <Image
              src={profilePic}
              width="250px"
              height="250px"
              alt="Sean giving a thumbs up"
            />
            <span>
              <Icon icon="vscode-icons:file-type-node" />
              <Icon icon="logos:react" />
              <Icon icon="logos:sass" />
            </span>
          </span>
        </div>
        <div className={styles.card + " --card-background --primary-text"}>
          <div className={styles["card-header"]}>
            <div style={{ marginRight: "auto" }}>
              <Icon icon="vscode-icons:file-type-vscode" />
            </div>
            <div>
              <Icon icon="codicon:chrome-minimize" />
              <Icon icon="codicon:chrome-restore" />
              <Icon icon="codicon:chrome-close" />
            </div>
          </div>
          <div className={styles["card-body"]}>
            <span className="wave">{bioHeader}</span>
            <code className="--primary-text">{bio}</code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
