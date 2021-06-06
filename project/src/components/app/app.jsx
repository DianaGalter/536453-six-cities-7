import React from 'react';
import Main from '../main/main';
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
