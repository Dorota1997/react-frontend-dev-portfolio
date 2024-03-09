import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



/*
type SocialLink = {
  name: string;
  url: string;
  class: string;
};

type SkillIcon = {
  name: string;
  class: string;
};

type BasicInfo = {
  main_icon: string;
  name: string;
  titles: string[];
  social: SocialLink[];
  image: string;
};

type Skills = {
  icons: SkillIcon[];
};

type UserProfile = {
  basic_info: BasicInfo;
  skills: Skills;
};



*/

/*
type Technology = {
    class: string;
    name: string;
};

type Project = {
    title: string;
    startDate: string;
    description: string;
    images: string[];
    url: string;
    technologies: Technology[];
};

type Experience = {
    company: string;
    title: string;
    years: string;
    mainTech: string[];
    technologies: string[];
    icon?: string;
};

type SectionNames = {
    about: string;
    projects: string;
    skills: string;
    experience: string;
};

type BasicInfo = {
    description_header: string;
    description: string;
    section_name: SectionNames;
};

type MainContent = {
    basic_info: BasicInfo;
    projects: Project[];
    experience: Experience[];
};

type WebsiteContents = {
    [language: string]: MainContent;
};

const websiteContent: WebsiteContents = {
    en: {
        basic_info: {
            description_header: "Hi",
            description: "👋 I'm Davina Griss. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React, and Vue. What you are seeing now is a portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜",
            section_name: {
                about: "About me",
                projects: "Projects",
                skills: "Skills",
                experience: "Experience",
            },
        },
        projects: [
            {
                title: "Animal Shelter",
                startDate: "2020",
                description: "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processes and allows to store all evidence on adopting animals from animal shelter.",
                images: [
                    "images/portfolio/animal-shelter/p1.jpg",
                    "images/portfolio/animal-shelter/p2.jpg",
                ],
                url: "",
                technologies: [
                    { class: "devicon-angularjs-plain", name: "Angular" },
                    { class: "devicon-typescript-plain", name: "TypeScript" },
                    { class: "devicon-csharp-plain", name: "C#" },
                ],
            },
            // More projects...
        ],
        experience: [
            {
                company: "DefOpenSource",
                title: "Front-End Developer",
                years: "10.2019 - present",
                mainTech: ["Angular 8/9/10"],
                technologies: [
                    "REST API",
                    "RxJS",
                    "JavaScript",
                    "Bootstrap",
                    // More technologies...
                ],
                icon: "devicon-typescript-plain",
            },
            // More experiences...
        ],
    },
    other_language_key: {
        // Translated content follows the same structure...
    },
};


*/

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <div className="col-md-12 mx-auto text-center language">
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$primaryLanguage,
                window.$secondaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
              id={window.$primaryLanguageIconId}
            ></span>
          </div>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-poland"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
        </div>
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
