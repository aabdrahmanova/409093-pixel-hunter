import {changeScreen, render} from '../../render';
import greeting from '../greeting';
import {headerTemplate} from '../header';
import footerTemplate from '../footer';
import {gameState} from '../../data/data';
import {showNextGameScreen} from './gameController';

export const gameTwo = () => {
  const template = `
  ${headerTemplate(true)}
  <div class="game">
    <p class="game__task">${gameState.currentGame.question}</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${gameState.currentGame.answers[0].src}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${gameState.currentGame.answers[1].src}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
      ${gameState.userAnswers.map((index) =>
    `<li class="stats__result stats__result--${index.speed}"></li>`).join(``)}
      </ul>
    </div>
  </div>
  ${footerTemplate()}`;

  const renderGameTwo = render(template);
  const form = renderGameTwo.querySelector(`form.game__content`);
  const back = renderGameTwo.querySelector(`.back`);

  form.onchange = () => {
    const checkedRadio = form.querySelectorAll(`input[type="radio"]:checked`);

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

  back.onclick = () => changeScreen(greeting);

  return renderGameTwo;
};

