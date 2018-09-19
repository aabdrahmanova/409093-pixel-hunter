import AbstractView from '../../abstract-view';
import footerTemplate from '../footer';

export default class IntroView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
    ${footerTemplate()}`;
  }

  bind() {
    const asterisk = this.element.querySelector(`.intro__asterisk`);
    asterisk.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      this.onClick();
    });

  }

  onClick() {
  }

}
