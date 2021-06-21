import {
  SEARCH_FETCH,
  SEARCH_FETCH_SUCCESS,
  SEARCH_FETCH_ERROR,
} from "./actionTypes";

const initialState = {
  search: {
    loading: false,
    data: null,
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FETCH:
      return {
        ...state,
        search: {
          data: null,
          loading: true,
          error: null,
        },
      };

    case SEARCH_FETCH_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        search: {
          data,
          loading: false,
          error: null,
        },
      };

    case SEARCH_FETCH_ERROR:
      const { error } = action.payload;
      return {
        ...state,
        search: {
          ...state.search,
          loading: false,
          error: error,
        },
      };

    default: {
      return state;
    }
  }
};

export default reducer;
export { initialState };
