import React from "react";

const Footer = ({sharedBasicInfo}) => {
  if (sharedBasicInfo) {
    var networks = sharedBasicInfo.social.map(function (network) {
      return (
        <span key={network.name} className="m-4">
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.class}></i>
          </a>
        </span>
      );
    });
  }

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              Copyright &copy;{" "}
              {sharedBasicInfo
                ? sharedBasicInfo.name
                : "???"}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
