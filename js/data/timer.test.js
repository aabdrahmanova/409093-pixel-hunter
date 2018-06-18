import {assert} from 'chai';
import timer from '../modules/timer';

describe(`how much time is left`, () => {
  it(`should return left time correctly`, () => {
    assert.equal(timer(12).tick(), 11);
    assert.equal(timer(2).tick(), 1);
  });

  it(`there is no time left`, () => {
    assert.equal(timer(1).tick(), -1);
    assert.equal(timer(-10).tick(), -1);
  });
});
