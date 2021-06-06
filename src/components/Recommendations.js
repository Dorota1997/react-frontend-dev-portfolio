import React, { Component } from "react";

class Recommendations extends Component {
    render() {
        if (this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.recommendations;
        }

        return (
            <section id="recommendations">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
                        <span>{sectionName}</span>
                    </h1>
                </div>
            </section>
        )
    }
}

export default Recommendations;
