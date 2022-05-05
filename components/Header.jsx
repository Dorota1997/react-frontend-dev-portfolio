import Typical from "react-typical";
import styles from "../styles/Header.module.scss";
// import Avatar3d from "./Avatar3d";
import ThemeToggler from "./styled-components/ThemeToggler";
import HeaderTitleTypeAnimation from "./common/HeaderTitleTypeAnimation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ContactButton from "./common/ContactButton";
import ContactModal from "./common/ContactModal";

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
  const { ref, inView } = useInView({
    rootMargin: "-100px",
  });
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = (show) => {
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    setShowModal(show);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          {/* <Avatar3d /> */}
          <Image
            className={loaded ? "unblur" : ""}
            src="/images/sean-avatar.webp"
            width="200px"
            height="200px"
            alt="Sean giving a thumbs up"
            blurDataURL={"/images/sean-avatar-blur.webp"}
            placeholder="blur"
            onLoadingComplete={() => setLoaded(true)}
          />
          <style jsx>{`
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
          <h1 className={styles.typical}>
            <Typical steps={"Sean Redmon"} loop={50} />
          </h1>
          <div className={styles["title-container"]}>
            <HeaderTitleTypeAnimation textArray={titles} />
          </div>
          <ContactButton
            ref={ref}
            inView={inView}
            onToggleModal={() => handleToggleModal(true)}
          />
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
            <ThemeToggler theme={theme} onToggleTheme={onToggleTheme} />
          </div>
        </div>
      </div>
      {showModal && (
        <ContactModal onToggleModal={() => handleToggleModal(false)} />
      )}
    </header>
  );
};

export default Header;
