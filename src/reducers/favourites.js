import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions/favourites'

let currentId = 0;

export default function favouritesReducer(state = [], { type, payload }) {
  switch (type) {
    case ADD_FAVOURITE:
      return [
        ...state,
        {
          ...payload.item,
          id: ++currentId
        }
      ];
    case REMOVE_FAVOURITE:
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
}
