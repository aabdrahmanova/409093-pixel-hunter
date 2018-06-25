import {changeScreen, render} from '../../render';
import greeting from '../greeting';
import {headerTemplate} from '../header';
import footerTemplate from '../footer';
import {gameState} from '../../data/data';
import {showNextGameScreen} from './gameController';

export const gameThree = () => {
  const template = `
  ${headerTemplate(true)}
    <div class="game">
    <p class="game__task">${gameState.currentGame.question}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option" data-id="0">
        <img src="${gameState.currentGame.answers[0].src}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected" data-id="1">
        <img src="${gameState.currentGame.answers[1].src}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option" data-id="2">
        <img src="${gameState.currentGame.answers[2].src}" alt="Option 1" width="304" height="455">
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

  const renderGameThree = render(template);
  const options = renderGameThree.querySelectorAll(`.game__option`);
  const back = renderGameThree.querySelector(`.back`);

  options.forEach((element) => {
    element.onclick = (e) => {
      let target = e.target;
      let index = parseInt(target.getAttribute(`data-id`), 10);
      if (gameState.currentGame.answers[index].correctAnswer === `paint`) {
        gameState.userAnswers.push({speed: `correct`, passed: true});
      } else {
        gameState.userAnswers.push({speed: `wrong`, passed: false});
        gameState.lives--;
      }
      showNextGameScreen();
    };
  });

  back.onclick = () => changeScreen(greeting);

  return renderGameThree;
};

