import React, { Component } from 'react';
import './Footer.scss';
class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="copyright">
          <span>
            <a href="mailto:adguy72@gmail.com">David : adguy72@gmail.com</a> 
          </span>
        </div>
        <div className="submenu" />
      </footer>
    );
  }
}

export default Footer;
