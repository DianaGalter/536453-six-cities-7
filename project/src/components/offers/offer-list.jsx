import React from 'react';
import Card from '../card/card';
import offersPropTypes from '../offers/offers.prop';


export default function OfferList (props) {
  const {offers} = props;

  if (!offers) {
    return;
  }

  return (offers.map((offer, i) => (
    <Card key={`${offer.title}-${offer.id}`} offers={offer} />
  )));
}

OfferList.propTypes = {
  offers: offersPropTypes,
};
