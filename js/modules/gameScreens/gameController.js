import {gameScreens, typesOfGame, gameState, fullGameArr} from "../../data/data";
import {changeScreen} from "../../render";
import {gameOne} from "./game-1";
import {gameTwo} from "./game-2";
import {gameThree} from "./game-3";
import stats from "../stats";


export const startGame = () => {
  fullGameArr();
  let start = gameScreens[0];
  showScreen(start);
};

export const showNextGameScreen = () => {
  let currentGameIndex = gameScreens.indexOf(gameState.currentGame);
  let nextScreen = gameScreens[currentGameIndex + 1];

  if (gameState.lives < 0 && currentGameIndex < gameScreens.length) {
    gameState.isFailed = true;
    changeScreen(stats);
  } else {
    if (nextScreen) {
      showScreen(nextScreen);
    }
  }
};

const showScreen = (screen) => {
  gameState.currentGame = screen;

  if (screen.type === typesOfGame.oneCard) {
    changeScreen(gameOne());
  } else if (screen.type === typesOfGame.twoCards) {
    changeScreen(gameTwo());
  } else {
    changeScreen(gameThree());
  }
};
