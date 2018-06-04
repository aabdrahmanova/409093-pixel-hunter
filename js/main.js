'use strict';

const KeyCodes = {
  LEFT: 37,
  RIGHT: 39
};
const SCREENS = [
  {
    id: `greeting`,
    link: document.getElementById(`greeting`)
  },
  {
    id: `rules`,
    link: document.getElementById(`rules`)
  },
  {
    id: `game-1`,
    link: document.getElementById(`game-1`)
  },
  {
    id: `game-2`,
    link: document.getElementById(`game-2`)
  },
  {
    id: `game-3`,
    link: document.getElementById(`game-3`)
  },
  {
    id: `stats`,
    link: document.getElementById(`stats`)
  },
  {
    id: `modal-error`,
    link: document.getElementById(`modal-error`)
  },
  {
    id: `modal-confirm`,
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

const MAIN = document.querySelector(`main.central`);
const buttons = document.querySelectorAll(`.arrows__btn`);
const BUTTON_LEFT = buttons[0];
const BUTTON_RIGHT = buttons[1];
let currentScreenIndex = 0;
const showScreen = (num) => {
  currentScreenIndex = num;
  MAIN.innerHTML = ``;
  MAIN.appendChild(document.importNode(SCREENS[num].link.content, true));
  MAIN.setAttribute(`data-id`, SCREENS[num].id);
};
showScreen(0);

BUTTON_LEFT.onclick = () => currentScreenIndex > 0 ? showScreen(currentScreenIndex - 1) : showScreen(currentScreenIndex);
BUTTON_LEFT.onclick = () => currentScreenIndex < SCREENS.length - 1 ? showScreen(currentScreenIndex + 1) : showScreen(currentScreenIndex);

document.onkeydown = (evt) => {
  switch (evt.keyCode) {
    case KeyCodes.RIGHT:
      BUTTON_LEFT.onclick();
      break;
    case KeyCodes.LEFT:
      BUTTON_RIGHT.onclick();
      break;
  }
};
