import IntroView from './intro-view';
import {changeScreen} from '../render';
import greeting from '../greeting/greeting';

const intro = () => {
  const introView = new IntroView();
  introView.onClick = () => changeScreen(greeting());

  return introView.element;
};

export default intro();
