import React, { Component } from "react";
import Typical from "react-typical";
import ThemeToggler from "./styled-components/ThemeToggler";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      var logo = "images/" + this.props.sharedData.logo;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <header
        id="home"
        style={{ height: window.innerHeight - 140, display: "block" }}
      >
        <div className="row --flex-ai-c --flex-jc-c" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <img className="header-logo" src={logo} />
              <br />
              <h1 className="mb-0 --primary-text">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <ThemeToggler
                theme={this.props.theme}
                toggleTheme={this.props.toggleTheme}
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
