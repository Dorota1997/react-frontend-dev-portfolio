import React, { Component } from 'react';
import Typical from 'react-typical';
import Switch from 'react-switch';

class Header extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = 'data-theme';
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === 'dark' ? 'light' : 'dark';
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var title = this.props.data.title;
    }

    return (
      <header id="home">
        <div className="row banner">
          <div className="col-md-12 mx-auto pt-5">
            <div style={{ paddingBottom: '10px' }}>
              <h1>
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <h1>
                <Typical steps={[title]} wrapper="p" />
              </h1>
            </div>
          </div>
          
          <Switch
            checked={this.state.checked}
            onChange={this.onThemeSwitchChange}
            offColor="#baaa80"
            onColor="#353535"
            className="react-switch mx-auto"
            width={90}
            height={40}
            uncheckedIcon={
              <span
                className="iconify"
                data-icon="twemoji:owl"
                data-inline="false"
                style={{
                  display: 'block',
                  height: '100%',
                  fontSize: 25,
                  textAlign: 'end',
                  marginLeft: '20px',
                  color: '#353239',
                }}
              ></span>
            }
            checkedIcon={
              <span
                className="iconify"
                data-icon="noto-v1:sun-with-face"
                data-inline="false"
                style={{
                  display: 'block',
                  height: '100%',
                  fontSize: 25,
                  textAlign: 'end',
                  marginLeft: '10px',
                  color: '#353239',
                }}
              ></span>
            }
            id="icon-switch"
          />
        </div>
      </header>
    );
  }
}

export default Header;
