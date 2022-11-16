import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App(props) {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState(
    window.$primaryLanguage
  );
  document.title = sharedData.basic_info?.name;

  function applyPickedLanguage(pickedLanguage) {
    setSelectedLanguage(pickedLanguage);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    loadResumeFromPath(resumePath);
  }

  useEffect(() => {
    loadSharedData();
    applyPickedLanguage(window.$primaryLanguage);
  }, []);

  function loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        setResumeData(data);
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  function loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        setSharedData(data);
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <div
          onClick={() => applyPickedLanguage(window.$primaryLanguage)}
          style={
            selectedLanguage === window.$primaryLanguage
              ? { display: "inline", filter: "brightness(40%)" }
              : { display: "inline" }
          }
        >
          <span
            className="iconify language-icon mr-5"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
          ></span>
        </div>
        <div
          onClick={() => applyPickedLanguage(window.$secondaryLanguage)}
          style={
            selectedLanguage === window.$secondaryLanguage
              ? { display: "inline", filter: "brightness(40%)" }
              : { display: "inline" }
          }
        >
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-poland"
            data-inline="false"
          ></span>
        </div>
      </div>
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
}

export default App;
