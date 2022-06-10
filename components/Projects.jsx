import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = ({ sectionName, projects, pageInfo }) => {
  const [modalData, setModalData] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (data) => {
    setShowModal(true);
    setModalData(data);
  };

  const projectsMap = projects.map((project) => {
    return (
      <div className="project" key={project.title}>
        <div className="wrapper">
          <div className="photo" onClick={() => handleShowModal(project)}>
            <video muted autoPlay={"autoplay"} loop>
              <source src={project.preview} type="video/webm" />
            </video>
            <span className="project-date --accent-background1 --secondary-text">
              {project.startDate}
            </span>
            <p className="project-title --third-text">{project.title}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="projects-section --secondary-background --primary-text">
      <h1 className="section-title">
        <span>{sectionName}</span>
      </h1>
      <div className="projects-group">{projectsMap}</div>
      {modalData && (
        <ProjectDetailsModal
          show={showModal}
          onHide={() => setShowModal(false)}
          data={modalData}
        />
      )}
    </section>
  );
};

export default Projects;
