import { combineReducers } from "redux";
import { default as LayoutReducer } from "./modules/Layout/reducer";

export default combineReducers({
  layout: LayoutReducer,
});
