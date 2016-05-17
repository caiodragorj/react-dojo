/* globals window */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import SharedButton from './SharedButton';
import Title from './Title';
import Description from './Description';

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
        <Title text={title} />
        <img src={image} />
        <Description text={description} />
        <p>Discount: {discount}</p>
        <p>Price: {price}</p>
        <SharedButton amount={amount} onClickShared={this.onClickShared.bind(this)} />
      </div>
    );
  }
}

export default ProductCard;
