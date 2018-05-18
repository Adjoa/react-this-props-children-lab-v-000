import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';

class ThemedDecorations extends React.Component {
  render() {
    const themedDivs = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div> 
      );
    })
    
    return (
      <div>
        {themedDivs}
      </div>
    );
  }
};

export default ThemedDecorations;