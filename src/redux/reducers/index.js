import { combineReducers } from "redux";
import { cakeReducer } from "./cakes";
import { iceCreamReducer } from "./iceCreams";

export const reducers = combineReducers({
  cakes: cakeReducer,
  iceCreams: iceCreamReducer
});
