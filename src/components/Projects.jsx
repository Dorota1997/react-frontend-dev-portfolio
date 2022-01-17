import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import LazyVideo from "./LazyVideo";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="section-header col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div className="__container">
                  <LazyVideo
                    src={projects.preview}
                    type="video/mp4"
                    muted
                    autoPlay={"autoplay"}
                    loop
                  ></LazyVideo>
                  {/* <video muted autoPlay={"autoplay"} loop> */}
                  {/* <source src={projects.preview} type="video/mp4" /> */}
                  {/* </video> */}
                  <span className="project-date --accent-background1">
                    {projects.startDate}
                  </span>
                  <br />
                  <p className="project-title-settings mt-3 --primary-text">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section className="portfolio --secondary-background --primary-text">
        <div className="col-md-12">
          <h1 className="section-title">
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
