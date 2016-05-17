import React, { Component } from 'react';

export default class Title extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <div data-component="title">
    <h1>{this.props.text}</h1>
    </div>;
  }
}
