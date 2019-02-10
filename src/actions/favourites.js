<<<<<<< HEAD
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
=======
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
>>>>>>> 8386796dec32488dba8a43ce73684a4e0f882705
