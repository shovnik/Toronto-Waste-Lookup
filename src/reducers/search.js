<<<<<<< HEAD
import { UPDATE_KEYWORD, FETCH_RESULTS } from '../actions/search'
import data from '../wasteData';

export default function searchReducer(state = { keyword:'', results: [] }, { type, payload }) {
  switch (type) {
    case UPDATE_KEYWORD:
      return {
        keyword: payload.keyword,
        results: payload.keyword === '' ? [] : state.results
      };
    case FETCH_RESULTS:
      const keyword = state.keyword.trim().toLowerCase();
      if(keyword === "")
        return { ...state };
      return {
        ...state,
        results: data.filter(item => item.keywords.toLowerCase().includes(keyword))
      };
    default:
      return state;
  }
}
=======
import { UPDATE_KEYWORD, FETCH_RESULTS } from '../actions/search'
import data from '../wasteData';

export default function searchReducer(state = { keyword:'', results: [] }, { type, payload }) {
  switch (type) {
    case UPDATE_KEYWORD:
      return {
        keyword: payload.keyword,
        results: payload.keyword === '' ? [] : state.results
      };
    case FETCH_RESULTS:
      const keyword = state.keyword.trim().toLowerCase();
      if(keyword === "")
        return { ...state };
      return {
        ...state,
        results: data.filter(item => item.keywords.toLowerCase().includes(keyword))
      };
    default:
      return state;
  }
}
>>>>>>> 8386796dec32488dba8a43ce73684a4e0f882705
