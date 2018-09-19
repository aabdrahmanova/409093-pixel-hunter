import {changeScreen} from '../render';
import rules from '../rules/rules';
import GreetingView from './greeting-view';

const greeting = () => {
  const greetingView = new GreetingView();
  greetingView.onClick = () => changeScreen(rules());

  return greetingView.element;
};

export default greeting;
