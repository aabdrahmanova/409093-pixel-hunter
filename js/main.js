import {changeScreen} from './modules/render';
import intro from './modules/intro/intro';
import {GameModel} from './modules/models/model';
import {GameScreen} from './modules/models/presenter';

const gameModel = new GameModel();
export const gameScreen = new GameScreen(gameModel);

changeScreen(intro);
