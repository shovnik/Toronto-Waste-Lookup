export const UPDATE_KEYWORD = 'search:updateKeyword';
export const FETCH_RESULTS = 'search:fetchResults';

export const updateKeyword = keyword => ({
  type: UPDATE_KEYWORD,
  payload: { keyword }
});

export const fetchResults = () => ({
  type: FETCH_RESULTS
});
