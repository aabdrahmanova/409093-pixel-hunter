import AbstractView from '../abstract-view';
import footerTemplate from '../footer';
import {headerTemplate} from '../header';
import {gameScreen} from '../../main';

export default class OneCardView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    ${headerTemplate(true)}
      <div class="game">
      <p class="game__task">${gameScreen.model.currentGame.question}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${gameScreen.model.currentGame.answers[0].src}" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
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
    const form = this.element.querySelector(`form.game__content`);

    form.onchange = (e) => {
      let target = e.target;
      if (target.value === gameScreen.model.currentGame.answers[0].correctAnswer) {
        gameScreen.model.userAnswers.push({speed: `correct`, passed: true});
      } else {
        gameScreen.model.userAnswers.push({speed: `wrong`, passed: false});
        gameScreen.die();
      }
      this.onChange();
    };
  }

  onChange() {
  }

}
