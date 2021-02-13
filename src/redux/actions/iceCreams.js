import { ADD_ICECREAM, BUY_ICECREAM } from "../constants";

export const buyIceCreams = (iceCreams) => {
  return {
    type: BUY_ICECREAM,
    payload: parseInt(iceCreams, 0)
  };
};

export const addIceCreams = (iceCreams) => {
  return {
    type: ADD_ICECREAM,
    payload: parseInt(iceCreams, 0)
  };
};
