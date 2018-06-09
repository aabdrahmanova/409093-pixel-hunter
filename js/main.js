import {changeScreen} from './render';
import intro from './intro';

// const template = `
//   <div id="intro" class="intro">
//     <h1 class="intro__asterisk">*</h1>
//     <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
//   </div>`;

// const intro = render(template);

changeScreen(intro);

// const KeyCodes = {
//   LEFT: 37,
//   RIGHT: 39
// };
// const screens = [
//   {
//     id: `greeting`,
//     link: document.getElementById(`greeting`)
//   },
//   {
//     id: `rules`,
//     link: document.getElementById(`rules`)
//   },
//   {
//     id: `game-1`,
//     link: document.getElementById(`game-1`)
//   },
//   {
//     id: `game-2`,
//     link: document.getElementById(`game-2`)
//   },
//   {
//     id: `game-3`,
//     link: document.getElementById(`game-3`)
//   },
//   {
//     id: `stats`,
//     link: document.getElementById(`stats`)
//   },
//   {
//     id: `modal-error`,
//     link: document.getElementById(`modal-error`)
//   },
//   {
//     id: `modal-confirm`,
//     link: document.getElementById(`modal-confirm`)
//   }
// ];
// const arrows = document.createElement(`div`);
// arrows.className = `arrows__wrap`;
// arrows.innerHTML = `<style>
//                     .arrows__wrap {
//                       position: absolute;
//                       top: 95px;
//                       left: 50%;
//                       margin-left: -56px;
//                     }
//                     .arrows__btn {
//                       background: none;
//                       border: 2px solid black;
//                       padding: 5px 20px;
//                     }
//                     </style>
//                     <button class="arrows__btn"><-</button>
//                     <button class="arrows__btn">-></button>`;

// document.body.appendChild(arrows);

// const main = document.querySelector(`main.central`);
// const buttons = document.querySelectorAll(`.arrows__btn`);
// const buttonLeft = buttons[0];
// const buttonRight = buttons[1];

// let currentScreenIndex = 0;

// const showScreen = (num) => {
//   const lastScreenIndex = screens.length - 1;

//   if (num < 0) {
//     currentScreenIndex = lastScreenIndex;
//   } else if (num > lastScreenIndex) {
//     currentScreenIndex = 0;
//   } else {
//     currentScreenIndex = num;
//   }

//   main.innerHTML = ``;
//   main.appendChild(document.importNode(screens[currentScreenIndex].link.content, true));
//   main.setAttribute(`data-id`, screens[currentScreenIndex].id);
// };

// showScreen(0);

// buttonLeft.onclick = () => showScreen(currentScreenIndex - 1);
// buttonRight.onclick = () => showScreen(currentScreenIndex + 1);

// document.onkeydown = (evt) => {
//   switch (evt.keyCode) {
//     case KeyCodes.RIGHT:
//       showScreen(currentScreenIndex + 1);
//       break;
//     case KeyCodes.LEFT:
//       showScreen(currentScreenIndex - 1);
//       break;
//   }
// };
