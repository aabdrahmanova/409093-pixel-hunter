import {gameScreens, fullGameArr} from "../../data/data";
import getResult from "../user-result";
import {changeScreen} from "../render";
import stats from "../stats/stats";
import {showScreen} from "../gameScreens/gameScreen";

export class GameScreen {
  constructor(model) {
    this.model = model;
  }

  start() {
    this.model.restart();
    fullGameArr();
    let start = gameScreens[0];
    showScreen(start);
  }

  get result() {
    getResult(this.model.userAnswers, this.model.lives);
  }

  die() {
    this.model.lives -= 1;
  }

  nextScreen() {
    let currentGameIndex = gameScreens.indexOf(this.model.currentGame);
    let nextScreen = gameScreens[currentGameIndex + 1];

    if (this.model.lives < 0 && currentGameIndex < gameScreens.length) {
      this.model.isFailed = true;
      this.model.total = this.result();
      changeScreen(stats());
    } else if (nextScreen) {
      showScreen(nextScreen);
    } else {
      this.model.isFailed = false;
      this.model.total = this.result();
      changeScreen(stats());
    }
  }
}
