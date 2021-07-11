import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import Main from '../main/main';
import SignIn from '../signin/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../notfound/not-found';
import offersPropTypes from '../offers/offers.prop';

export default function App({ offers }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main offers={offers}/>
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
  offers: offersPropTypes,
};
