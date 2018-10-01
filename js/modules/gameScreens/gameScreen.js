import {typesOfGame} from "../../data/data";
import greeting from "../greeting/greeting";
import OneCardView from "./oneCard-view";
import TwoCardsView from "./twoCard-view";
import ThreeCardsView from "./threeCards-view";
import {changeScreen} from "../render";
import {gameScreen} from "../../main";

export const showScreen = (screen) => {
  gameScreen.model.currentGame = screen;

  if (screen.type === typesOfGame.oneCard) {
    const gameOne = () => {
      const oneCardView = new OneCardView();

      oneCardView.onChange = () => gameScreen.nextScreen();

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
            if ((element.name === `question1` && element.value === gameScreen.model.currentGame.answers[0].correctAnswer) ||
                (element.name === `question2` && element.value === gameScreen.model.currentGame.answers[1].correctAnswer)) {
              correctedAnswerCount++;
            }
          });

          if (correctedAnswerCount === 2) {
            gameScreen.model.userAnswers.push({speed: `correct`, passed: true});
          } else {
            gameScreen.model.userAnswers.push({speed: `wrong`, passed: false});
            gameScreen.die();
          }

          gameScreen.nextScreen();
        }
      };

      return twoCardsView.element;
    };

    changeScreen(gameTwo());

  } else {
    const gameThree = () => {
      const threeCardsView = new ThreeCardsView();

      threeCardsView.onClick = () => gameScreen.nextScreen();

      return threeCardsView.element;
    };

    changeScreen(gameThree());
  }


  const back = document.querySelector(`.back`);
  back.onclick = () => changeScreen(greeting());
};
