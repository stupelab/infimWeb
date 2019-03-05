import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import './Styles/Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        const fecha= new Date();
        const yearDate = fecha.getFullYear();
        // <!--<a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">
        //   <i className="fa fa-facebook-f"></i>
        // </a> -->
        return (
          <div className="footer-section">
              <span className="copyright">{`Copyright © ${yearDate} Ínfim Collective. All rights reserved`}</span>
              <div className="social-network-section">
                <a href="mailto:infimcollective@gmail.com?Subject=Hello!" ><i className="fa fa-inbox"></i></a>
                <a href="https://www.instagram.com/infimcollective" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
          </div>
        );
    }
}

export default Footer;
