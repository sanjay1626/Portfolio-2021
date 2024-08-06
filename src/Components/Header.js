import React, { Component } from 'react';
import $ from 'jquery';
import DarkModeToggle from './DarkModeToggle'; // Assuming a Dark Mode toggle component

class Header extends Component {
  throttle = (func, wait) => {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    };
  }

  handleScroll = () => {
    const scrollPosition = $(window).scrollTop();
    const banner = $('.banner');
    const navWrap = $('#nav-wrap');

    // Fade out the banner as the user scrolls down
    if (scrollPosition > 200) {
      banner.addClass('fading-out');
      navWrap.addClass('fading-out');
     } else {
      banner.removeClass('fading-out');
      navWrap.removeClass('fading-out');
      
    }
  }

  handleScrollThrottled = this.throttle(this.handleScroll, 100);

  componentDidMount() {
    // JavaScript for fade-in and fade-out effects
    $(function() {
      console.log('Document is ready');
      $('#nav .menu-item a.smoothscroll').on({
        mouseenter: function() {
          $(this).animate({ opacity: 0.7 }, 300);
        },
        mouseleave: function() {
          $(this).animate({ opacity: 1 }, 300);
        }
      });
    });
    // Add smooth scrolling effect
    $(window).on('scroll', this.handleScrollThrottled);
  }

  render() {
    const { data } = this.props;
// Default values
const userName = data?.name || 'Sanjay Gonsalves';
const occupation = data?.occupation || 'Software Engineer';
const description = data?.description || 'Challenging myself to develop innovative websites';
const city = data?.address?.city || 'San Diego';
const networks = data?.social?.map(network => (
  <li key={network.name}>
    <a href={network.url}><i className={network.className}></i></a>
  </li>
)) || [
  <li key="linkedin">
    <a href="https://www.linkedin.com/in/sanjaygonsalves/"><i className="fa fa-linkedin"></i></a>
  </li>,
  <li key="github">
    <a href="https://github.com/sanjaygonsalves"><i className="fa fa-github"></i></a>
  </li>
];

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
            <li className="menu-item login-btn">
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h1>I'm {userName}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
              {networks}
            </ul>
          </div>
        </div>
        

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
    );
  }
}

export default Header;
