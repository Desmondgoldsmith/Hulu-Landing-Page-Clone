import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://raw.githubusercontent.com/bradtraversy/hulu-webpage-clone/main/img/logo.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://raw.githubusercontent.com/bradtraversy/hulu-webpage-clone/main/img/logo.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://raw.githubusercontent.com/bradtraversy/hulu-webpage-clone/main/img/logo.png" onDragStart={handleDragStart} role="presentation" />,
];

const Trending = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Trending