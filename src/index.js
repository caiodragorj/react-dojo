/* globals window */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CollapseList from './components/collapseList.js';

const items = [{
  title:"item 1",
  description:"description 1"
},{
  title:"item 2",
  description:"description 2"
}]

const App = () =>
  <div>
    <CollapseList items={items}/>
  </div>
;

ReactDOM.render(<App />, document.getElementById('app'));
