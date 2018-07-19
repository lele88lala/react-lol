import React from 'react';
import PropTypes from 'prop-types';
import headPic from '../images/head.jpg';


export default class News extends React.Component {
  constructor() {
    super();
    this.state = {
      //
    };
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="aganist-info">
          <img src={headPic} alt="" />
          <span>
            匹配/胜利   7/8/7
          </span>
        </div>
        <div className="aganist-info">
          <img src={headPic} alt="" />
          <span>
            匹配/胜利   7/8/7
          </span>
        </div>
        <div className="aganist-info">
          <img src={headPic} alt="" />
          <span>
            匹配/胜利   7/8/7
          </span>
        </div>
        <div className="aganist-info">
          <img src={headPic} alt="" />
          <span>
            匹配/胜利   7/8/7
          </span>
        </div>
      </div>
    );
  }
}
