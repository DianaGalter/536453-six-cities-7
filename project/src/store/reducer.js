import offers from '../mocks/offers';
import {ActionType} from './action';

const initState = {
  city: 'Amsterdam',
  offers: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionType.GET_OFFERS:
      return {
        ...state,
        offers,
      };
    default:
      return state;
  }
};
