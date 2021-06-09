import React, { Component } from "react";
import RecommendationDetails from "./RecommendationDetails";

class Recommendations extends Component {
    render() {
        if (this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.recommendations;
        }
        if (this.props.resumeRecommendations) {
          var recoTitle = this.props.resumeRecommendations.title;
          var recoText = this.props.resumeRecommendations.text;
          var recoImage = this.props.resumeRecommendations.image;
        }
        return (
            <section id="recommendations">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
                        <span>{sectionName}</span>
                    </h1>
                    <RecommendationDetails title={recoTitle} text={recoText} image={recoImage} />
                </div>
            </section>
        )
    }
}

export default Recommendations;
