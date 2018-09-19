import {startGame} from '../gameController';
import RulesView from './rules-view';

const rules = () => {
  const rulesView = new RulesView();
  rulesView.onClick = () => startGame();

  return rulesView.element;
};

export default rules;
