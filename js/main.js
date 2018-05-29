'use strict';

const SCREENS = [
  document.getElementById(`greeting`),
  document.getElementById(`rules`),
  document.getElementById(`game-1`),
  document.getElementById(`game-2`),
  document.getElementById(`game-3`),
  document.getElementById(`stats`),
  document.getElementById(`modal-error`),
  document.getElementById(`modal-confirm`)
];
const LEFT_KEYCODE = 37;
const RIGHT_KEYCODE = 39;

let showScreen = (num) => {
  let main = document.querySelector(`.central`);
  main.innerHTML = ``;
  main.appendChild(document.importNode(SCREENS[num].content, true));
};

showScreen(0);
