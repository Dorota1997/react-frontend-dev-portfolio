import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import { Icon } from "@iconify/react";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ProjectDetailsModal = ({ show, onHide, data }) => {
  const images = data.images;
  const title = data.title;
  const description = data.description;
  const url = data.url;
  const liveSiteUrl = data.liveSiteUrl;
  const techMap = data.technologies.map((icon) => (
    <li key={icon.name}>
      <span>
        <Icon icon={icon.class} />
        <p>{icon.name}</p>
      </span>
    </li>
  ));
  const imagesMap = images.map((image) => {
    return <div key={image} data-src={image} />;
  });

  return (
    <>
      <Modal
        className="--modal-overlay-background"
        show={show}
        onHide={onHide}
        data={data}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div
          className="modal-toolbar --toolbar-background --primary-text"
          onClick={onHide}
        >
          <div style={{ marginRight: "auto" }}>
            <Icon icon="vscode-icons:file-type-vscode" />
          </div>
          <div>
            <Icon icon="codicon:chrome-minimize" />
            <Icon icon="codicon:chrome-restore" />
            <Icon className="close-modal-btn" icon="codicon:chrome-close" />
          </div>
        </div>
        <div className="column --third-background">
          <div className="column-flex" style={{ marginBottom: "50px" }}>
            <AutoplaySlider
              animation="scaleOutAnimation"
              className="slider-image"
              play={true}
              cancelOnInteraction={true}
              interval={4000}
            >
              {imagesMap}
            </AutoplaySlider>
          </div>
          <div className="column-flex">
            <div className="top-group">
              <h3 className="modal-title --primary-text">{title}</h3>
              {url ? (
                <>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    GitHub <Icon icon="akar-icons:github-fill" />
                  </a>
                  <a
                    href={liveSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-link"
                  >
                    Live site <Icon icon="bx:link-external" />
                  </a>
                </>
              ) : null}
            </div>
            <p className="modal-description --primary-text">{description}</p>
            <div className="column">
              <ul>{techMap}</ul>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectDetailsModal;
