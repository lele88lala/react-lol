import React from 'react';
import PropTypes from 'prop-types';

export default class HelloReact extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonText: 'Button',
    };
  }

  render() {
    const { buttonText } = this.state;
    const { text } = this.props;
    return (
      <div>
        <h1>
          {`Hello ${text}`}
        </h1>
        <button
          type="button"
          onClick={() => {
            this.setState({ buttonText: 'I am a button' });
          }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

HelloReact.propTypes = {
  text: PropTypes.string,
};

HelloReact.defaultProps = {
  text: 'React',
};
