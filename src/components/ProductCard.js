/* globals window */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';

const ProductCard = (props) =>
  <div>
    <h1>{props.title}</h1>
    <img src={props.image} />
    <p>Description: {props.description}</p>
    <p>Discount: {props.discount}</p>
    <p>Price: {props.price}</p>
  </div>
;

export default ProductCard;
