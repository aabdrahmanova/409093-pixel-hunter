import {initialState} from "../../data/data";

export class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return Object.freeze(this._state);
  }

  restart() {
    this._state = initialState;
  }
}
