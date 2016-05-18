import React from 'react';
import { discount }from '../utils/numeral';

const Discount = ({offers}) => {
  offers = offers ? offers : [];
  return (
    <div>
    {offers.filter(o=> o.listPrice - o.salesPrice > 0).map((o, i) => {
      const value = discount(o.listPrice, o.salesPrice);
      return <label key={i}>{value} de desconto</label>;
    })}
    </div>
  );
}

export default Discount;
