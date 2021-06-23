import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import Main from '../main/main';
import SignIn from '../signin/sing-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../notfound/not-found';
import offersPropTypes from '../offers/offers.prop';
import cardsPropTypes from '../card/card.prop';
import PropTypes from 'prop-types';

export default function App({ cards = [], offers }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main cards={cards} offers={offers}/>
        </Route>
        <Route exact path={AppRoute.SIGNIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cards: PropTypes.arrayOf(cardsPropTypes),
  offers: offersPropTypes,
};
