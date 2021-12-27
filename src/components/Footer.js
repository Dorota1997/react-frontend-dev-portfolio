import React, { Component } from "react";

class Footer extends Component {
  render() {
    
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-5" >
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer id="portfolio" >
         <h1 className="section-title"style={{ color: "black" }}>
            <span>Get In Touch</span>
          </h1>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-6 text-center copyright-container">
            <div className="container">
              <small className="copyright-tag">
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
