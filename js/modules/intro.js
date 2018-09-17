import {changeScreen, render} from '../render';
import greeting from './greeting';
import footerTemplate from './footer';

const intro = () => {
  const template = `
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
  ${footerTemplate()}`;

  const renderIntro = render(template);
  const asterisk = renderIntro.querySelector(`.intro__asterisk`);
  asterisk.onclick = () => changeScreen(greeting());

  return renderIntro;
};


export default intro;
