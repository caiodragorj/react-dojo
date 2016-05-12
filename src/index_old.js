/* globals window */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';

import CollapseList from './components/collapseList.js';

const items = [{
  title:"item 1",
  description:"description 1"
},{
  title:"item 2",
  description:"description 2"
},{
  title:"item 3",
  description:"description 3"
},{
  title:"item 4",
  description:"description 4"
},{
  title:"item 5",
  description:"description 5"
},{
  title:"item 6",
  description:"description 6"
}];

const App = () =>
  <Grid>
    <CollapseList items={items}/>
  </Grid>
;

ReactDOM.render(<App />, document.getElementById('app'));
