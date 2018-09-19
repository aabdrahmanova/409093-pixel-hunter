import {gameState, typesOfGame} from "../../data/data";
import {showNextGameScreen} from "../gameController";
import greeting from "../greeting/greeting";
import OneCardView from "./oneCard-view";
import TwoCardsView from "./twoCard-view";
import ThreeCardsView from "./threeCards-view";
import {changeScreen} from "../render";

export const showScreen = (screen) => {
  gameState.currentGame = screen;

  if (screen.type === typesOfGame.oneCard) {
    const gameOne = () => {
      const oneCardView = new OneCardView();

      oneCardView.onChange = () => showNextGameScreen();

      return oneCardView.element;
    };

    changeScreen(gameOne());

  } else if (screen.type === typesOfGame.twoCards) {
    const gameTwo = () => {
      const twoCardsView = new TwoCardsView();

      twoCardsView.onChange = () => {
        const checkedRadio = twoCardsView.element.querySelectorAll(`input[type="radio"]:checked`);

        if (checkedRadio.length === 2) {
          let correctedAnswerCount = 0;

          checkedRadio.forEach((element) => {
            if ((element.name === `question1` && element.value === gameState.currentGame.answers[0].correctAnswer) ||
                (element.name === `question2` && element.value === gameState.currentGame.answers[1].correctAnswer)) {
              correctedAnswerCount++;
            }
          });

          if (correctedAnswerCount === 2) {
            gameState.userAnswers.push({speed: `correct`, passed: true});
          } else {
            gameState.userAnswers.push({speed: `wrong`, passed: false});
            gameState.lives--;
          }

          showNextGameScreen();
        }
      };

      return twoCardsView.element;
    };

    changeScreen(gameTwo());

  } else {
    const gameThree = () => {
      const threeCardsView = new ThreeCardsView();

      threeCardsView.onClick = () => showNextGameScreen();

      return threeCardsView.element;
    };

    changeScreen(gameThree());
  }


  const back = document.querySelector(`.back`);
  back.onclick = () => changeScreen(greeting());
};
