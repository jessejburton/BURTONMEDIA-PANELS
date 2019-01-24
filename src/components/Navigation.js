import React, { Component } from 'react';

export default class Navigation extends Component {
  constructor(props) {
    super();
    this.state = {
      Classes: ['navigation']
    };
    window.addEventListener('scroll', this.onScrollPage);
  }
  onNavClick = (e) => {
    console.log(e.target.text);
    var elmnt = document.getElementById('Workshop');
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  onScrollPage = (e) => {
    const workshopTop = document.getElementById('Workshop').offsetTop - 30;

    if (window.pageYOffset > workshopTop) {
      this.setState({
        Classes: ['navigation', 'dark']
      });
    } else {
      this.setState({
        Classes: ['navigation']
      });
    }
  };

  render() {
    return (
      <div
        className={this.state.Classes.join(' ')}
        onScroll={this.onScrollPage}
      >
        <div>
          <a href="/" className="navigation__brand">
            BURTON<strong>MEDIA</strong>
          </a>
        </div>
        <div className="navigation__links">
          <a onClick={this.onNavClick}>Workshop</a>
          <a onClick={this.onNavClick}>Time & Location</a>
          <a onClick={this.onNavClick}>Register</a>
        </div>
      </div>
    );
  }
}
