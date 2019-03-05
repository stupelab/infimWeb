import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import './Styles/About.css';

class About extends React.Component {

    render(){
        return (
          <div className="about-section">
            <div className="infim-image">
              <img src="../data/infimFoto.jpg" alt="Ínfim Collective"></img>
              <span className="text-image">
                <span className="infim-text purple">ÍNFIM</span>
                <span className="infim-text green">ÍNFIM</span>
                <span className="infim-text blue">ÍNFIM</span>
              </span>
            </div>
            <div className="manifest-section">
              Founded in Spring 2018, Ínfim Collective is formed by a group of makers, coders, technologists and performers. Our goal is to create value and experience to people by delivering singular projects, from new media installations to live audiovisual performances.
            </div>
          </div>
        );
    }
}

export default About;
