/* globals window */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from 'react-bootstrap';

import CollapseItem from './collapseItem';

const CollapseList = ({itens}) =>
  <Row>
    {itens.map((item, i) => {
      item.title += ` - ${i}`;
      return (
        <Col md={3}>
          <CollapseItem title={item.title} description={item.description} />
        </Col>
      );
    })}
  </Row>
;

export default CollapseList
