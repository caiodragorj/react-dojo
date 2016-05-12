import React from 'react';
import {Row, Col} from 'react-bootstrap';

import ProductCard from './ProductCard';

const ProductList = ({products}) =>
  <Row>
    {products.map((buffer, index) =>
      <Col key={index+1} sm={12} md={6} lg={4}>
        <ProductCard {...buffer}/>
      </Col>
    )}
  </Row>
;

export default ProductList;
