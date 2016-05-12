/* globals window */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CollapseList from './collapseList.js';

const itens=[{
  title:"item 1",
  description:"description 1"
},{
  title:"item 2",
  description:"description 2"
}]

const App = () =>
  <div>
    <CollapseList itens={itens}/>
  </div>
;

ReactDOM.render(<App />, document.getElementById('app'));
