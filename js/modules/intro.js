import {changeScreen, render} from '../render';
import greeting from './greeting';
import footerTemplate from './footer';

const template = `
<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>
${footerTemplate()}`;

const intro = render(template);
const asterisk = intro.querySelector(`.intro__asterisk`);
asterisk.onclick = () => changeScreen(greeting);

export default intro;
