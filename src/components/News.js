import React from 'react';
import PropTypes from 'prop-types';

export default class News extends React.Component {
  constructor() {
    super();
    this.state = {
      //
    };
  }

  render() {
    return (
      <div className="news-wrapper">
        <span>
          视频
        </span>
        <span>
          热点
        </span>
      </div>
    );
  }
}
