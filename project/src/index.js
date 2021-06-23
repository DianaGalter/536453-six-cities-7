import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers.js';

const cards = [
  {
    title: 'First card',
    id: 0,
  },
  {
    title: 'Second card',
    id: 1,
  },
  {
    title: 'Third card',
    id: 2,
  },
  {
    title: 'Fourth card',
    id: 3,
  },
  {
    title: 'Fifth card',
    id: 4,
  },
];
ReactDOM.render(
  <React.StrictMode>
    <App cards={cards} offers={offers}/>
  </React.StrictMode>,
  document.getElementById('root'),
);
