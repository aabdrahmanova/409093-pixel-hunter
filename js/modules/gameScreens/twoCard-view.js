import AbstractView from '../abstract-view';
import footerTemplate from '../footer';
import {headerTemplate} from '../header';
import {gameState} from '../../data/data';

export default class TwoCardsView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
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
  }

  bind() {
    const form = this.element.querySelector(`form.game__content`);

    form.onchange = () => this.onChange();
  }

  onChange() {
  }

}
