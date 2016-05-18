import React, { Component } from 'react';

const Description = ({text}) =>
  <div data-component="description"
       dangerouslySetInnerHTML={ { __html: text } }></div>;

export default Description;
