import { combineReducers } from "redux";
import { default as ListItemsReducer } from "./modules/ListItems/reducer";

export default combineReducers({
  listItems: ListItemsReducer,
});
