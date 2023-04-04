import React, { Component } from "react";

class SkillsAnimation extends Component {
  constructor() {
    super();
    this.state = { currentSkillIndex: 0 };
  }

  componentDidMount() {
    this.animationInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentSkillIndex: Math.floor(Math.random() * this.skills.length),
      }));
    }, 1600);
  }

  componentWillUnmount() {
    clearInterval(this.animationInterval);
  }

  render() {
    if (this.props.sharedSkills) {
      console.log(this.props);

      this.skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <div className="skills-tile">
            <i className={skills.class}></i>
          </div>
        );
      });
    }
    const { currentSkillIndex } = this.state;
    const HeaderSkillsAnimation = React.memo(
      () => {
        return (
          <div className="square-card-container">
            <div className="square-card">
              <div className="down">
                <div className="up">
                  <div className="squeeze">
                    <div className="rotate-in">
                      <div className="rotate-out">
                        <div className="square">
                          {this.skills ? this.skills[currentSkillIndex] : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      },
      (props, prevProp) => true
    );
    return <HeaderSkillsAnimation />;
  }
}

export default SkillsAnimation;
