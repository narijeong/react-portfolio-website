import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id="portfolio">
      <h1>My Works</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/placeholder.png'
              text='Amazon Clone website built with React deployed on Firebase'
              label='React'
              path="https://www.github.com/narijeong" 
            />
            <CardItem
              src='images/placeholder.png'
              text='Amazon Clone website built with React deployed on Firebase'
              label='React'
              path="https://www.github.com/narijeong"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/placeholder.png'
              text='Django web application for restaurant business'
              label='Django'
              path="https://www.github.com/narijeong"
            />
            <CardItem
              src='images/placeholder.png'
              text='Django web application for restaurant business'
              label='Django'
              path="https://www.github.com/narijeong"
            />
            <CardItem
              src='images/placeholder.png'
              text='Django web application for restaurant business'
              label='Django'
              path="https://www.github.com/narijeong"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;