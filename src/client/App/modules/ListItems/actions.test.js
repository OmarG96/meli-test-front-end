import {
  SEARCH_FETCH,
  SEARCH_FETCH_ERROR,
  SEARCH_FETCH_SUCCESS,
} from "./actionTypes";
import { onFetch, onFetchError, onFetchStart, onFetchSuccess } from "./actions";
import { searchItems } from "./services";

jest.mock("./services", () => ({
  ...jest.requireActual("./services"),
  searchItems: jest.fn(),
}));

describe("GIVEN actions for Layout", () => {
  it("THEN should onFetchStart return the correct object", () => {
    const expected = {
      type: SEARCH_FETCH,
    };

    expect(onFetchStart()).toEqual(expected);
  });

  it("THEN should onFetchSuccess will returns the correct object", () => {
    const expected = {
      type: SEARCH_FETCH_SUCCESS,
      payload: {
        data: "data",
      },
    };
    expect(onFetchSuccess("data")).toEqual(expected);
  });

  it("THEN should onFetchError will returns the correct object", () => {
    const expected = {
      type: SEARCH_FETCH_ERROR,
      payload: {
        error: "error",
      },
    };
    expect(onFetchError("error")).toEqual(expected);
  });

  it("THEN should onFetch  will returns the correct object", async () => {
    searchItems.mockResolvedValue({ items: [], categories: [] });

    const onFetchStartResult = {
      type: SEARCH_FETCH,
    };

    const onFetchSuccessResult = {
      type: SEARCH_FETCH_SUCCESS,
      payload: {
        data: { items: [], categories: [] },
      },
    };

    const dispatch = jest.fn();
    const action = onFetch();

    await action(dispatch);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith(onFetchStartResult);
    expect(dispatch).toBeCalledWith(onFetchSuccessResult);
  });

  it("THEN should onFetch  will returns the correct object if there are a Error", async () => {
    searchItems.mockRejectedValue(new Error());

    const onFetchStartResult = {
      type: SEARCH_FETCH,
    };

    const onFetchErrorResult = {
      type: SEARCH_FETCH_ERROR,
      payload: {
        error: new Error(),
      },
    };

    const dispatch = jest.fn();
    const action = onFetch();

    await action(dispatch);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith(onFetchStartResult);
    expect(dispatch).toBeCalledWith(onFetchErrorResult);
  });
});
