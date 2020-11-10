import React, { Component } from 'react';
import $ from 'jquery';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  setLanguage(language, idName) {
    document.getElementById(idName).removeAttribute('filter', 'brightness(40%)');
    var flagId = language === 'pl' ? 'english-flag' : 'polish-flag';
    document.getElementById(flagId).setAttribute('filter', 'brightness(40%)')
    document.documentElement.lang = language;
    var langPath = document.documentElement.lang === 'pl' ? '/resumeData.json' : '/resumeDataEN.json';
    this.getResumeData(langPath);
  }

  componentDidMount() {
    this.setLanguage('en', 'english-flag');
  }

  getResumeData(path) {
    $.ajax({
      url: path,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Header data={this.state.resumeData.main} />
        <div className="col-md-12 mx-auto text-center language">
            <div
              onClick={() => this.setLanguage('pl', 'polish-flag')}
              style={{display:'inline'}}>
              <span
                className="iconify mr-5"
                data-icon="twemoji-flag-for-flag-poland"
                data-inline="false"
                style={{ fontSize: '50px', cursor: 'pointer' }}
                id="polish-flag"
              ></span>
            </div>
            <div
              onClick={() => this.setLanguage('en', 'english-flag')}
              style={{display:'inline'}}>
              <span
                className="iconify"
                data-icon="twemoji-flag-for-flag-united-kingdom"
                data-inline="false"
                style={{ fontSize: '50px', cursor: 'pointer' }}
                id="english-flag"
              ></span>
            </div>
          </div>
        <About data={this.state.resumeData.main} />
        <Projects data={this.state.resumeData.projects} />
        <Skills data={this.state.resumeData.resume} />
        <Experience data={this.state.resumeData.experience} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
