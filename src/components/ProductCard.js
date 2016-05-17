/* globals window */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import SharedButton from './SharedButton';
import Title from './Title';
import Picture from './Picture';
import Description from './Description';

class ProductCard extends Component {
  constructor(props) {
    super(props);
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
    const { name, images, description, discount, price, amount = 0 } = this.state;
    return (
      <div>
        <Title text={name} />
        <Picture image={images} />
        <Description text={description} />
        <p>Discount: {discount}</p>
        <p>Price: {price}</p>
        <SharedButton amount={amount} onClickShared={this.onClickShared.bind(this)} />
      </div>
    );
  }
}

export default ProductCard;
