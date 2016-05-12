/* globals window */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';

import data from './data';
import ProductList from './components/ProductList.js';


const App = ({products}) =>
  <Grid>
    <ProductList products={products} />
  </Grid>
;

ReactDOM.render(<App {...data} />, document.getElementById('app'));
