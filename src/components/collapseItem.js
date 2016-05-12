import React, { Component } from 'react';
import SharedButton from './SharedButton';

export default class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      title: undefined,
      description: undefined,
      count: 0,
      shared: 0
    };
  }

  componentDidMount() {
    alert('didMount')
  }
  
  componentWillMount() {
    alert('willMount')

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

  onClickShared(){
    this.setState({
      shared: this.state.shared + 1
    })
  }

  render () {
    const { title, description, visible, count, shared } = this.state;

    const descriptionStyle = {
      display: visible ? 'block' : 'none',
      background: '#CCC'
    };

    return <div data-component="collapse">
      <h2 onClick={this.toggleVisibility.bind(this)}>{title} - {count}</h2>
      <p style={descriptionStyle}>{description}</p>
      <SharedButton onClickShared={this.onClickShared.bind(this)} amount={shared} />
    </div>;
  }
}
