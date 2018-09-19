import {changeScreen} from '../render';
import greeting from '../greeting/greeting';
import {gameState} from '../../data/data';
import StatsView from './stats-view';

export const resultWithoutBonus = () => {
  if (!gameState.isFailed) {
    return gameState.total - (gameState.lives * 50);
  }
  return gameState.total;
};

const stats = () => {
  const statsView = new StatsView();

  statsView.onClick = () => changeScreen(greeting());


  return statsView.element;
};

export default stats;
