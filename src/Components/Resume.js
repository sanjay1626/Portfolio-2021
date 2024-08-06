import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(edu => (
        <div key={edu.school} className="item">
          <h3>{edu.school}</h3>
          <p className="info">
            {edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em>
          </p>
          <p>{edu.description}</p>
        </div>
      ));
      var work = this.props.data.work.map(job => (
        <div key={job.company} className="item">
          <h3>{job.company}</h3>
          <p className="info">
            {job.title}<span>&bull;</span> <em className="date">{job.years}</em>
          </p>
          <p>{job.description}</p>
        </div>
      ));
      var skills = this.props.data.skills.map(skill => (
        <li key={skill.name}>
          <span style={{ width: skill.level }} className={`bar-expand ${skill.name.toLowerCase()}`}></span>
          <em>{skill.name}</em>
        </li>
      ));
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="item">{education}</div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="item">{work}</div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>{skillmessage}</p>
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
