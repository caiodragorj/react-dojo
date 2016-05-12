import React, { Component } from 'react';

export default class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      title: undefined,
      description: undefined,
      count: 0
    };
  }

  componentWillMount() {
    this.setState({
      title: this.props.title,
      description: this.props.description
    });
  }

  toggleVisibility() {
    this.setState({
      visible: !this.state.visible,
      count: this.state.count + this.state.visible
    });
  }

  render () {
    const { title, description, visible, count } = this.state;

    const descriptionStyle = {
      display: visible ? 'block' : 'none',
      background: '#CCC'
    };

    return <div data-component="collapse">
      <h2 onClick={this.toggleVisibility.bind(this)}>{title} - {count}</h2>
      <p style={descriptionStyle}>{description}</p>
    </div>;
  }
}
