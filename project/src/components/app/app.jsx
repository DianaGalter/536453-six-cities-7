import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import Main from '../main/main';
import SignIn from '../signin/singin';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../notfound/notfound';

import PropTypes from 'prop-types';
export default function App({ cards = [] }) {
  return <Main cards={cards} />;
}

App.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};
