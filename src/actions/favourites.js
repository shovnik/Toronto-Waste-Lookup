export const ADD_FAVOURITE = 'favourites:addFavourite';
export const REMOVE_FAVOURITE = 'favourites:removeFavourite';

export const addFavourite = item => ({
  type: ADD_FAVOURITE,
  payload: { item }
});

export const removeFavourite = item => ({
  type: REMOVE_FAVOURITE,
  payload: { id: item.id }
});
