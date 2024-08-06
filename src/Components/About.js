import React, { Component } from 'react';

class About extends Component {
  render() {
    const { data } = this.props;

    // Declare variables with default values
    let name = '';
    let profilepic = '/images/profilepic.jpg'; // Corrected path
    let bio = '';
    let street = '';
    let city = '';
    let state = '';
    let zip = '';
    let phone = '';
    let email = '';
    let resumeDownload = '';

    // Override default values with data from props if available
    if (data) {
      name = data.name;
      profilepic = `images/${data.image}`;
      bio = data.bio;
      street = data.address.street;
      city = data.address.city;
      state = data.address.state;
      zip = data.address.zip;
      phone = data.phone;
      email = data.email;
      resumeDownload = data.resumedownload;
    }

    // Debugging: Log the profile picture path
    console.log('Profile Picture Path:', profilepic);

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt={`${name} Profile Pic`} />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span><br />
                  <span>{street}<br />
                    {city} {state}, {zip}
                  </span><br />
                  <span>{phone}</span><br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
