import {assert} from 'chai';

let score = 0;

const getResult = (correctAnswers, lives) => {
  if (lives <= 0 || correctAnswers < 10) {
    return -1;
  }
  score = correctAnswers * 100 + lives * 50;
  return score;
};

describe(`check calculation of results`, () => {
  it(`should return -1 when correct answers count is less than 10`, () => {
    assert.equal(-1, getResult(9, 3));
  });
  it(`Правильный ответ: 100 очков`, () => {
    assert.equal(2050, getResult(20, 1));
  });
  it(`За каждую оставшуюся к концу игры жизнь: дополнительные 50 очков`, () => {
    assert.equal(1600, getResult(15, 2));
  });
  it(`-1, если жизней не осталось`, () => {
    assert.equal(-1, getResult(25, 0));
  });
});
