import {
  SEARCH_FETCH,
  SEARCH_FETCH_SUCCESS,
  SEARCH_FETCH_ERROR,
} from "./actionTypes";
import { searchItems } from "./services";

export const onFetchStart = () => ({
  type: SEARCH_FETCH,
});

export const onFetchSuccess = (data) => ({
  type: SEARCH_FETCH_SUCCESS,
  payload: { data },
});

export const onFetchError = (error) => ({
  type: SEARCH_FETCH_ERROR,
  payload: { error },
});

export const onFetch = (item) => async (dispatch) => {
  dispatch(onFetchStart());

  try {
    const data = await searchItems(item);
    dispatch(onFetchSuccess(data));
  } catch (error) {
    dispatch(onFetchError(error));
  }
};
