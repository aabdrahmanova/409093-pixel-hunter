import AbstractView from '../abstract-view';
import footerTemplate from '../footer';
import {headerTemplate} from '../header';
import {gameState} from '../../data/data';

export default class ThreeCardsView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
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
  }

  bind() {
    const options = this.element.querySelectorAll(`.game__option`);

    options.forEach((el) => {
      el.onclick = (e) => {
        let target = e.target;
        let index = parseInt(target.getAttribute(`data-id`), 10);
        if (gameState.currentGame.answers[index].correctAnswer === `paint`) {
          gameState.userAnswers.push({speed: `correct`, passed: true});
        } else {
          gameState.userAnswers.push({speed: `wrong`, passed: false});
          gameState.lives--;
        }
        this.onClick();
      };
    });
  }

  onClick() {
  }

}
