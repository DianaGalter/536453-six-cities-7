export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
  GET_OFFERS: 'offers/getOffers',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers,
  }),
};
