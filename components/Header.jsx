import Typical from "react-typical";
import styles from "../styles/Header.module.scss";
// import Avatar3d from "./Avatar3d";
import ThemeToggler from "./styled-components/ThemeToggler";
import HeaderTitleTypeAnimation from "./common/HeaderTitleTypeAnimation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Header = ({
  theme,
  onToggleTheme,
  currentLang,
  primaryLang,
  secondaryLang,
  setLang,
}) => {
  const titles = [
    "Front-end Developer",
    "前端开发人员",
    "is making the web beautiful",
    "在中国生活了七年",
  ];

  const [loaded, setLoaded] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          {/* <Avatar3d /> */}
          <Image
            className={loaded ? "unblur" : ""}
            src="/sean-avatar.webp"
            width="200px"
            height="200px"
            alt="Sean giving a thumbs up"
            blurDataURL={"/sean-avatar-blur.webp"}
            placeholder="blur"
            onLoadingComplete={() => setLoaded(true)}
          />
          <style jsx global>{`
            .unblur {
              animation: unblur 0.5s ease;
            }

            @keyframes unblur {
              from {
                filter: blur(10px);
              }
              to {
                filter: blur(0);
              }
            }
          `}</style>
          <h1 className="--primary-text">
            <Typical steps={"Sean Redmon"} loop={50} />
          </h1>
          <div className={styles["title-container"] + " --primary-text"}>
            <HeaderTitleTypeAnimation textArray={titles} />
          </div>
          <ThemeToggler theme={theme} onToggleTheme={onToggleTheme} />
        </div>

        <div className={styles.language}>
          <div>
            <button
              onClick={() => setLang("primary")}
              style={
                currentLang == primaryLang
                  ? { filter: "brightness(100%)", outline: "none" }
                  : { filter: "brightness(40%)" }
              }
            >
              <Icon
                className={styles["language-icon"]}
                icon="emojione:flag-for-united-states"
              />
            </button>
            <button
              onClick={() => setLang("secondary")}
              style={
                currentLang == secondaryLang
                  ? { filter: "brightness(100%)" }
                  : { filter: "brightness(40%)" }
              }
            >
              <Icon
                className={styles["language-icon"]}
                icon="emojione:flag-for-china"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
