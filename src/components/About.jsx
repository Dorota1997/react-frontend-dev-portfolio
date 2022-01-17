import React, { Component } from "react";
import { Icon } from "@iconify/react";
import nodeIcon from "@iconify/icons-logos/nodejs-icon";
import reactIcon from "@iconify/icons-logos/react";
import sassIcon from "@iconify/icons-logos/sass";
import LazyLoad from "react-lazyload";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section className="about --primary-background">
        <div className="col-md-12">
          <h1 className="section-header">
            <span>{sectionName}</span>
          </h1>
          <div className="row --flex-jc-c --flex-ai-c mx-auto mb-5">
            <div className="col-md-4 mb-5 --flex-jc-c --flex-ai-c">
              <div className="polaroid">
                <span>
                  <LazyLoad height={200}>
                    <img
                      height="250px"
                      src={profilepic}
                      alt="Avatar placeholder"
                    />
                  </LazyLoad>
                  <Icon
                    icon={nodeIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={sassIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 --flex-jc-c --flex-ai-c">
              <div className="col-md-10">
                <div className="card --card-background --primary-text">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="vscode-icons:file-type-vscode"
                      data-inline="false"
                      style={{ fontSize: "2rem" }}
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify float-right m-1"
                      data-icon="ci:close-big"
                      data-inline="false"
                      style={{ fontSize: "2rem" }}
                    ></span>
                    &nbsp;{" "}
                    <span
                      className="iconify float-right m-1"
                      data-icon="clarity:window-restore-line"
                      data-inline="false"
                      style={{ fontSize: "2rem" }}
                    ></span>
                    &nbsp;{" "}
                    <span
                      className="iconify float-right m-1"
                      data-icon="codicon:chrome-minimize"
                      data-inline="false"
                      style={{ fontSize: "2rem" }}
                    ></span>{" "}
                  </div>
                  <div className="card-body text-justify ml-3 mr-3">
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
