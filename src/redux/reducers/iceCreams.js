import { ADD_ICECREAM, BUY_ICECREAM } from "../constants";

const initialState = {
  iceCreams: 0,
  message: ""
};

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      if (state.iceCreams - action.payload > 0) {
        return {
          ...state,
          iceCreams: state.iceCreams - action.payload,
          message: ""
        };
      } else {
        return {
          ...state,
          message: `Sorry! We only have ${state.iceCreams} ice creams available right now.`
        };
      }
    case ADD_ICECREAM:
      return {
        ...state,
        iceCreams: state.iceCreams + action.payload,
        message: ""
      };
    default:
      return state;
  }
};
