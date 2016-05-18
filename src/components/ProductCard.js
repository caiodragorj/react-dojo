/* globals window */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import SharedButton from './SharedButton';
import Title from './Title';
import Picture from './Picture';
import Description from './Description';
import Discount from './Discount';

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
    const { name, images, description, offers, price, amount = 0 } = this.state;
    const image = typeof images !== 'undefined' ? images[0] : '';
    return (
      <div>
        <Title text={name} />
        <Picture image={image} />
        <Description text={description} />
        <Discount offers={offers} />
        <p>Price: {price}</p>
        <SharedButton amount={amount} onClickShared={this.onClickShared.bind(this)} />
      </div>
    );
  }
}

export default ProductCard;
