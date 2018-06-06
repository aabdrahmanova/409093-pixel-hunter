'use strict';

const KeyCodes = {
  LEFT: 37,
  RIGHT: 39
};
let screens = [
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
let arrows = document.createElement(`div`);
arrows.className = `arrows__wrap`;
arrows.innerHTML = `<style>
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

document.body.appendChild(arrows);

let main = document.querySelector(`main.central`);
let buttons = document.querySelectorAll(`.arrows__btn`);
let buttonLeft = buttons[0];
let buttonRight = buttons[1];

let currentScreenIndex = 0;

const showScreen = (num) => {
  let lastScreenIndex = screens.length - 1;

  if (num < 0) {
    currentScreenIndex = lastScreenIndex;
  } else if (num > lastScreenIndex) {
    currentScreenIndex = 0;
  } else {
    currentScreenIndex = num;
  }

  main.innerHTML = ``;
  main.appendChild(document.importNode(screens[currentScreenIndex].link.content, true));
  main.setAttribute(`data-id`, screens[currentScreenIndex].id);
};

showScreen(0);

buttonLeft.onclick = () => showScreen(currentScreenIndex - 1);
buttonRight.onclick = () => showScreen(currentScreenIndex + 1);

document.onkeydown = (evt) => {
  switch (evt.keyCode) {
    case KeyCodes.RIGHT:
      showScreen(currentScreenIndex + 1);
      break;
    case KeyCodes.LEFT:
      showScreen(currentScreenIndex - 1);
      break;
  }
};
