import { ADD_CAKE, BUY_CAKE } from "../constants";

const initialState = {
  cakes: 0,
  message: ""
};

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.cakes - action.payload > 0) {
        return {
          ...state,
          cakes: state.cakes - action.payload,
          message: ""
        };
      } else {
        return {
          ...state,
          message: `Sorry! We only have ${state.cakes} cakes available right now.`
        };
      }
    case ADD_CAKE:
      return {
        ...state,
        cakes: state.cakes + action.payload,
        message: ""
      };
    default:
      return state;
  }
};
