import React, { Component } from 'react';

export default class Description extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <div data-component="description">
      <p>{this.props.text}</p>
    </div>;
  }
}
