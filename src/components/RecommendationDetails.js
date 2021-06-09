import React, {Component} from "react";

class RecommendationDetails extends Component {
  render() {    
    return (
      <div className="card mb-0">
        <div className="row g-0 p-4">
          <div className="text-center col-md-3 col-lg-2 my-auto py-4">
            <img src={this.props.image} alt="Richard Steinmetz"/>
          </div>
          <div className="col-md-9 col-lg-10 pl-5">
            <div
              className="portfolio-card card-body font-trebuchet text-justify ml-3 mr-3"
            >
              <h2 className="card-title">
                {this.props.title}
              </h2>
              <p className="card-text"> 
                {this.props.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RecommendationDetails;
