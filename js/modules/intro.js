import IntroView from './intro-view';
import {changeScreen} from '../render';
import greeting from './greeting';

const intro = () => {
  const introView = new IntroView();
  introView.onClick = () => changeScreen(greeting());

  return introView.render();
};

export default intro;
