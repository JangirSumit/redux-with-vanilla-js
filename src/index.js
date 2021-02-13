import { createStore } from "redux";
import { reducers } from "./redux/reducers";
import {
  addCakes,
  addIceCreams,
  buyCakes,
  buyIceCreams
} from "./redux/actions";

const store = createStore(reducers);

store.subscribe(() => {
  console.log(store.getState());
  let state = store.getState();
  document.getElementById(
    "cakes"
  ).innerText = `Cakes Available: ${state.cakes.cakes}`;
  document.getElementById(
    "iceCreams"
  ).innerText = `Ice Creams Available: ${state.iceCreams.iceCreams}`;

  document.getElementById("cakes-message").innerText = `${state.cakes.message}`;
  document.getElementById(
    "iceCreams-message"
  ).innerText = `${state.iceCreams.message}`;

  document.getElementById("cakes-input").value = "";
  document.getElementById("iceCreams-input").value = "";
});

document.getElementById("buy-cake").addEventListener("click", (event) => {
  if (document.getElementById("cakes-input").value) {
    store.dispatch(buyCakes(document.getElementById("cakes-input").value));
  }
});

document.getElementById("add-cake").addEventListener("click", (event) => {
  if (document.getElementById("cakes-input").value) {
    store.dispatch(addCakes(document.getElementById("cakes-input").value));
  }
});

document.getElementById("buy-iceCream").addEventListener("click", (event) => {
  if (document.getElementById("iceCreams-input").value) {
    store.dispatch(
      buyIceCreams(document.getElementById("iceCreams-input").value)
    );
  }
});

document.getElementById("add-iceCream").addEventListener("click", (event) => {
  if (document.getElementById("iceCreams-input").value) {
    store.dispatch(
      addIceCreams(document.getElementById("iceCreams-input").value)
    );
  }
});
