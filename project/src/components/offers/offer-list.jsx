import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import cardsPropTypes from '../card/card.prop';
import offersPropTypes from '../offers/offers.prop';


export default function OfferList (props) {
  const {cards, offers} = props;

  return (cards.map((card, i) => (
    <Card key={`${card.title}-${card.id}`} offers={offers[i]} />
  )));
}

OfferList.propTypes = {
  cards: PropTypes.arrayOf(cardsPropTypes),
  offers: offersPropTypes,
};
