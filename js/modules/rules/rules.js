import RulesView from './rules-view';
import {gameScreen} from '../../main';

const rules = () => {

  const rulesView = new RulesView();
  rulesView.onClick = () => gameScreen.start();

  return rulesView.element;
};

export default rules;
