import React from 'react';

const Picture = ({image}) => {
  return <picture>
      { image.largest && <source srcSet={image.largest} media="(min-width: 1367px)" /> }
      { image.large && <source srcSet={image.large} media="(min-width: 1024px) and (max-width: 1366px)" /> }
      { image.big && <source srcSet={image.big} media="(min-width: 769px) and (max-width: 1023px)" /> }
      { image.medium && <source srcSet={image.medium} media="(max-width: 768px)" /> }
      <img srcSet={image.medium} />
    </picture>;

};

export default Picture;
