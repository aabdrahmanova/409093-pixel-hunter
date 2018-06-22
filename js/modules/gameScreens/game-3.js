import {changeScreen, render} from '../../render';
import stats from '../stats';
import greeting from '../greeting';
import screens from '../../data/data';
import {headerTemplate} from '../header';
import footerTemplate from '../footer';

screens.isGamescreen = true;

const template = `
${headerTemplate()}
  <div class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
  </form>
  <div class="stats">
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </div>
</div>
${footerTemplate()}`;

const gameThree = render(template);
const options = gameThree.querySelectorAll(`.game__option`);
const back = gameThree.querySelector(`.back`);

options.forEach((item) => {
  item.onclick = () => changeScreen(stats);
});

back.onclick = () => changeScreen(greeting);

export default gameThree;
