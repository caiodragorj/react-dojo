/* globals window */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import SharedButton from './SharedButton';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      description: '',
      discount: '',
      price: 'R$ 0,00',
      amount: 0
    }
  }

  componentWillMount() {
    this.setState({
      ...this.props
    });
  }

  onClickShared(){
    this.setState({
      amount: this.state.amount + 1
    });
  }

  render(){
    const { title, image, description, discount, price, amount } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <img src={image} />
        <p>Description: {description}</p>
        <p>Discount: {discount}</p>
        <p>Price: {price}</p>
        <SharedButton amount={amount} onClickShared={this.onClickShared.bind(this)} />
      </div>
    );
  }
}

export default ProductCard;
