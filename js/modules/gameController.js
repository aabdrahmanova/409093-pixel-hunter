// import {gameScreens, gameState, fullGameArr} from "../data/data";
// import {changeScreen} from "./render";
// import stats from "./stats/stats";
// import getResult from "./user-result";
// import {showScreen} from "./gameScreens/gameScreen";


// export const startGame = () => {
//   fullGameArr();
//   let start = gameScreens[0];
//   showScreen(start);
// };

// export const showNextGameScreen = () => {
//   let currentGameIndex = gameScreens.indexOf(gameState.currentGame);
//   let nextScreen = gameScreens[currentGameIndex + 1];

//   if (gameState.lives < 0 && currentGameIndex < gameScreens.length) {
//     gameState.isFailed = true;
//     gameState.total = getResult(gameState.userAnswers, gameState.lives);
//     changeScreen(stats());
//   } else if (nextScreen) {
//     showScreen(nextScreen);
//   } else {
//     gameState.isFailed = false;
//     gameState.total = getResult(gameState.userAnswers, gameState.lives);
//     changeScreen(stats());
//   }

// };
