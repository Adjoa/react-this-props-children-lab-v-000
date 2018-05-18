import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';

class Invitation extends React.Component {
  render() {
    return (
      <div>
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>
      );
  };
};

export default Invitation;