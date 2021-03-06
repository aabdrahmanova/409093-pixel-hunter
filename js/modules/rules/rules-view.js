import AbstractView from '../abstract-view';
import footerTemplate from '../footer';
import {headerTemplate} from '../header';

export default class RulesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    ${headerTemplate()}
      <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit">Go!</button>
      </form>
    </div>
    ${footerTemplate()}`;
  }

  bind() {
    const buttonGo = this.element.querySelector(`.rules__button`);
    const nameInput = this.element.querySelector(`.rules__input`);

    buttonGo.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onClick();
    });

    buttonGo.disabled = true;

    oninput = () => {
      if (nameInput.value !== ``) {
        buttonGo.disabled = false;
      } else {
        buttonGo.disabled = true;
      }
    };
  }

  onClick() {
  }

}
