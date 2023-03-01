import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      const images = this.props.data.images;
      var title = this.props.data.title;
      var description = this.props.data.description;
      var github = this.props.data.github;
      if (this.props.data.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-4" key={i}>
              <span>
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "350%" }}>
                    <p className="skills-styles text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
        if (this.props.data.images) {
          var img = images.map((elem, i) => {
            return <div key={i} data-src={elem} />;
          });
        }
      }
    }
        return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className=" mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="col-md-10 mx-auto">
              <h1 className="project-title-settings1 text-center">{title}</h1>
              <p className="modal-description font-montserrat text-center">{description}</p>
              <div className="col-md-12 text-center">
                <p className="list-inline mx-auto">{tech}</p>
              </div>
              <div className="button-container">
                <div className="text-center mt-5 mr-4">
                  {github ? (
                    <button
                      onClick={() => {
                        window.open(github, "_blank");
                      }}
                      className="link-button"
                    >
                      GitHub
                    </button>
                  ) : null}
                </div>

              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
