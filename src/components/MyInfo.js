import React from 'react';
import PropTypes from 'prop-types';
import headPic from '../images/head.jpg';

export default class MyInfo extends React.Component {
  constructor() {
    super();

    this.state = {
    //   buttonText: 'Button'
    };
  }

  render() {
    return (
      <div className="mine">
        <div className="my-info">
          <img className="head-image" src={headPic} alt="head pic" />
          <div>
            lele88lala &nbsp; 女
          </div>
          <div>
            影流 &nbsp; 璀璨钻石 5
          </div>
        </div>
        <div className="my-friends">
          <div className="one-friend">
            <img src={headPic} alt="" />
            <span>
              辅助有颗carry的心
            </span>
          </div>
          <div className="one-friend">
            <img src={headPic} alt="" />
            <span>
              辅助有颗carry的心
            </span>
          </div>
          <div className="one-friend">
            <img src={headPic} alt="" />
            <span>
              辅助有颗carry的心
            </span>
          </div>
          <div className="one-friend">
            <img src={headPic} alt="" />
            <span>
              辅助有颗carry的心
            </span>
          </div>
          <div className="one-friend">
            <img src={headPic} alt="" />
            <span>
              辅助有颗carry的心
            </span>
          </div>
          <div className="one-friend">
            <img src={headPic} alt="" />
            <span>
              辅助有颗carry的心
            </span>
          </div>
          <div className="one-friend">
            <img src={headPic} alt="" />
            <span>
              辅助有颗carry的心
            </span>
          </div>
          <div className="one-friend">
            <img src={headPic} alt="" />
            <span>
              辅助有颗carry的心
            </span>
          </div>
          <div className="one-friend">
            <img src={headPic} alt="" />
            <span>
              辅助有颗carry的心
            </span>
          </div>
        </div>
      </div>
    );
  }
}

MyInfo.propTypes = {
  text: PropTypes.string,
};

MyInfo.defaultProps = {
  text: 'React',
};
