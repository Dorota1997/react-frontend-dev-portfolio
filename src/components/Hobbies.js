import React, { Component } from "react";

class Hobbies extends Component {
  render() {
    if (this.props.resumeBasicInfo && this.props.resumeHobbies) {
        var sectionName = this.props.resumeBasicInfo.section_name.hobbies;
        var hobbies = this.props.resumeHobbies.map(function (hobbies, i) {
          return (
            <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center hobbies-tile">
              <i data-icon={hobbies.icon}
              className="iconify" style={{ fontSize: '200%' }}>
                  </i>
                  <p className="text-center" style={{ marginTop: '4px' }}>
                    {hobbies.name}
                  </p>
              </div>
            </span>
          </li>
          );
        });
      
    }

    return (
        <section id="hobbies">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
            <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto hobbies-icon">{hobbies}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Hobbies;