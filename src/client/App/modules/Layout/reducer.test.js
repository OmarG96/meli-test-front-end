import {
  SEARCH_FETCH,
  SEARCH_FETCH_ERROR,
  SEARCH_FETCH_SUCCESS,
} from "./actionTypes";
import reducer, { initialState } from "./reducer";

describe("layout reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SEARCH_FETCH", () => {
    const action = {
      type: SEARCH_FETCH,
    };
    expect(reducer({}, action)).toEqual({
      search: { data: null, loading: true, error: null },
    });
  });

  it("should handle SEARCH_FETCH_SUCCESS", () => {
    const action = {
      type: SEARCH_FETCH_SUCCESS,
      payload: {
        data: "data",
      },
    };
    expect(reducer({}, action)).toEqual({
      search: { data: "data", loading: false, error: null },
    });
  });

  it("should handle SEARCH_FETCH_ERROR", () => {
    const action = {
      type: SEARCH_FETCH_ERROR,
      payload: {
        error: new Error(),
      },
    };
    expect(reducer({}, action)).toEqual({
      search: { loading: false, error: new Error() },
    });
  });
});
