import AbstractView from '../abstract-view';
import footerTemplate from '../footer';
import {headerTemplate} from '../header';
import {gameScreen} from '../../main';

export default class ThreeCardsView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    ${headerTemplate(true)}
      <div class="game">
      <p class="game__task">${gameScreen.model.currentGame.question}</p>
      <form class="game__content  game__content--triple">
        <div class="game__option" data-id="0">
          <img src="${gameScreen.model.currentGame.answers[0].src}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected" data-id="1">
          <img src="${gameScreen.model.currentGame.answers[1].src}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option" data-id="2">
          <img src="${gameScreen.model.currentGame.answers[2].src}" alt="Option 1" width="304" height="455">
        </div>
      </form>
      <div class="stats">
        <ul class="stats">
        ${gameScreen.model.userAnswers.map((index) =>
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
        if (gameScreen.model.currentGame.answers[index].correctAnswer === `paint`) {
          gameScreen.model.userAnswers.push({speed: `correct`, passed: true});
        } else {
          gameScreen.model.userAnswers.push({speed: `wrong`, passed: false});
          gameScreen.die();
        }
        this.onClick();
      };
    });
  }

  onClick() {
  }

}
