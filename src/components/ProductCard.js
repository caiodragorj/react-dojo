/* globals window */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';

import CollapseItem from './collapseItem';

const CollapseList = ({items}) =>
  <Row>
    {items.map((buffer, index) => {
      return (
        <Col md={6} sm={3}>
          <CollapseItem key={index} title={buffer.title} description={buffer.description} />
        </Col>
      );
    })}
  </Row>
;

export default CollapseList
