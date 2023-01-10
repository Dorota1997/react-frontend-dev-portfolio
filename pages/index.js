import Meta from "../components/Meta";
import About from "../components/About";
import GitHubCornerButton from "../components/common/GitHubCornerButton";
import Header from "../components/Header";
import { useData } from "../components/DataContext";

import Spinner from "../components/common/Spinner";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Projects = dynamic(() => import("../components/Projects"), {
  loading: () => (
    <div style={{ margin: "auto", height: "300px" }}>
      <Spinner />
    </div>
  ),
});
const Skills = dynamic(() => import("../components/Skills"));
const Experience = dynamic(() => import("../components/Experience"));
const Footer = dynamic(() => import("../components/Footer"));

const Home = ({ theme, onToggleTheme }) => {
  const { currentLang, setLang, primaryLang, secondaryLang, sharedData } =
    useData();

  const pageInfo = currentLang.page_info;
  const personalInfo = sharedData.personal_info;
  const sectionNames = pageInfo.section_names;
  const skillIcons = sharedData.skills.icons;
  const socialMedia = sharedData.personal_info.social_media;

  return (
    <>
      <Meta />
      <GitHubCornerButton />
      <Header
        theme={theme}
        onToggleTheme={onToggleTheme}
        currentLang={currentLang}
        primaryLang={primaryLang}
        secondaryLang={secondaryLang}
        setLang={setLang}
      />
      <Suspense
        fallback={
          <div style={{ margin: "auto", height: "300px" }}>
            <Spinner />
          </div>
        }
      >
        <Projects
          sectionName={sectionNames.projects}
          projects={currentLang.projects}
          pageInfo={pageInfo}
        />
      </Suspense>
      <About
        sectionName={sectionNames.about}
        profilePic={personalInfo.image}
        bioHeader={pageInfo.bioHeader}
        bio={pageInfo.bio}
      />
      <Skills sectionName={sectionNames.skills} skillIcons={skillIcons} />
      {/* <Experience
        sectionName={sectionNames.experience}
        experience={currentLang.experience}
      /> */}
      <Footer socialMedia={socialMedia} personalInfo={personalInfo} />
    </>
  );
};

export default Home;
