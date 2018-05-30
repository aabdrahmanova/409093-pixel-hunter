'use strict';

const LEFT_KEYCODE = 37;
const RIGHT_KEYCODE = 39;
const SCREENS = [
  {
    class: `greeting`,
    link: document.getElementById(`greeting`)
  },
  {
    class: `rules`,
    link: document.getElementById(`rules`)
  },
  {
    class: `game-1`,
    link: document.getElementById(`game-1`)
  },
  {
    class: `game-2`,
    link: document.getElementById(`game-2`)
  },
  {
    class: `game-3`,
    link: document.getElementById(`game-3`)
  },
  {
    class: `stats`,
    link: document.getElementById(`stats`)
  },
  {
    class: `modal-error`,
    link: document.getElementById(`modal-error`)
  },
  {
    class: `modal-confirm`,
    link: document.getElementById(`modal-confirm`)
  }
];
const ARROWS = document.createElement(`div`);
ARROWS.className = `arrows__wrap`;
ARROWS.innerHTML = `<style>
                    .arrows__wrap {
                      position: absolute;
                      top: 95px;
                      left: 50%;
                      margin-left: -56px;
                    }
                    .arrows__btn {
                      background: none;
                      border: 2px solid black;
                      padding: 5px 20px;
                    }
                    </style>
                    <button class="arrows__btn"><-</button>
                    <button class="arrows__btn">-></button>`;

document.body.appendChild(ARROWS);

let main = document.querySelector(`main.central`);
let left = document.querySelectorAll(`.arrows__btn`)[0];
let right = document.querySelectorAll(`.arrows__btn`)[1];
let showScreen = (num) => {
  main.innerHTML = ``;
  main.appendChild(document.importNode(SCREENS[num].link.content, true));
  main.className = `central ` + SCREENS[num].class;
};
let showNextScreen = () => {
  switch (main.className) {
    case `central greeting`:
      showScreen(1);
      break;
    case `central rules`:
      showScreen(2);
      break;
    case `central game-1`:
      showScreen(3);
      break;
    case `central game-2`:
      showScreen(4);
      break;
    case `central game-3`:
      showScreen(5);
      break;
    case `central stats`:
      showScreen(6);
      break;
    case `central modal-error`:
      showScreen(7);
      break;
  }
};
let showPreviousScreen = () => {
  switch (main.className) {
    case `central rules`:
      showScreen(0);
      break;
    case `central game-1`:
      showScreen(1);
      break;
    case `central game-2`:
      showScreen(2);
      break;
    case `central game-3`:
      showScreen(3);
      break;
    case `central stats`:
      showScreen(4);
      break;
    case `central modal-error`:
      showScreen(5);
      break;
    case `central modal-confirm`:
      showScreen(6);
      break;
  }
};

showScreen(0);

document.onkeydown = (evt) => {
  switch (evt.keyCode) {
    case RIGHT_KEYCODE:
      showNextScreen();
      break;
    case LEFT_KEYCODE:
      showPreviousScreen();
      break;
  }
};
left.onclick = () => showPreviousScreen();
right.onclick = () => showNextScreen();
