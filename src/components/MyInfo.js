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
      <div>
        <img src={headPic} alt="hehe" />
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
