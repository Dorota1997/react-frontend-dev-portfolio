import React, { Component } from "react";
import $ from "jquery";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

class Main extends Component {
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
      .setAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .removeAttribute("filter", "brightness(40%)");
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
        <div
          className="--flex-jc-c --flex-ai-c"
          style={{ flexDirection: "column" }}
        >
          <Header
            sharedData={this.state.sharedData.basic_info}
            theme={this.props.theme}
            toggleTheme={this.props.toggleTheme}
          />
          <div className="language --flex-ai-c --flex-jc-c">
            <div
              onClick={() =>
                this.applyPickedLanguage(
                  window.$primaryLanguage,
                  window.$secondaryLanguageIconId
                )
              }
            >
              <span
                className="iconify language-icon mr-5"
                data-icon="twemoji-flag-for-flag-canada"
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
            >
              <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-china"
                data-inline="false"
                id={window.$secondaryLanguageIconId}
              ></span>
            </div>
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

export default Main;
