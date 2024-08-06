import React, { Component } from 'react';
import $ from 'jquery';
import DarkModeToggle from './DarkModeToggle'; // Assuming a Dark Mode toggle component

class Header extends Component {
  componentDidMount() {
    // JavaScript for fade-in and fade-out effects
    document.querySelectorAll('#nav .menu-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
          submenu.style.display = 'block';
          submenu.style.opacity = 0;
          submenu.style.transition = 'opacity 0.3s';
          setTimeout(() => submenu.style.opacity = 1, 0);
        }
      });
      item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
          submenu.style.opacity = 0;
          setTimeout(() => submenu.style.display = 'none', 300);
        }
      });
    });
  }

  render() {
    const { data } = this.props;

    let userName = 'Sanjay Gonsalbes';
    let occupation = 'Software Engineer';
    let description = 'Challenging myself to develop innovative websites';
    let city = 'San Diego';
    let networks = ['LinkedIn', 'GitHub'];
    if (data) {
      userName = data.name;
      occupation = data.occupation;
      description = data.description;
      city = data.address.city;
      networks = data.social.map(network => (
        <li key={network.name}>
          <a href={network.url}><i className={network.className}></i></a>
        </li>
      ));
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <DarkModeToggle />
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current menu-item">
              <a className="smoothscroll" href="#home">Home</a>
            </li>
            <li className="menu-item">
              <a className="smoothscroll" href="#about">About</a>
            </li>
            <li className="menu-item">
              <a className="smoothscroll" href="#resume">Resume</a>
            </li>
            <li className="menu-item">
              <a className="smoothscroll" href="#portfolio">Works</a>
            
              
            </li>
            <li className="menu-item">
              <a className="smoothscroll" href="#testimonials">Testimonials</a>
            </li>
            <li className="menu-item">
              <a className="smoothscroll" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
    );
  }
}

export default Header;
