import { ADD_CAKE, BUY_CAKE } from "../constants";

export const buyCakes = (cakes) => {
  return {
    type: BUY_CAKE,
    payload: parseInt(cakes, 0)
  };
};

export const addCakes = (cakes) => {
  return {
    type: ADD_CAKE,
    payload: parseInt(cakes, 0)
  };
};
