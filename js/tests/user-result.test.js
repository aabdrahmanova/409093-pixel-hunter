import {assert} from 'chai';
import getResult from '../modules/user-result';

const check1 = {
  answers: [
    {
      passed: true,
      speed: `fast`
    },
    {
      passed: true,
      speed: `slow`
    },
    {
      passed: true,
      speed: `normal`
    },
    {
      passed: true,
      speed: `fast`
    },
    {
      passed: true,
      speed: `slow`
    },
    {
      passed: true,
      speed: `normal`
    },
    {
      passed: true,
      speed: `fast`
    },
    {
      passed: true,
      speed: `slow`
    },
    {
      passed: true,
      speed: `normal`
    },
    {
      passed: true,
      speed: `fast`
    },
    {
      passed: false,
      speed: `slow`
    }
  ]
};

const check2 = {
  answers: [
    {
      passed: false,
      speed: `slow`
    },
    {
      passed: true,
      speed: `normal`
    }
  ]
};

const check3 = {
  answers: [
    {
      passed: true,
      speed: `fast`
    },
    {
      passed: true,
      speed: `fast`
    },
    {
      passed: true,
      speed: `fast`
    },
    {
      passed: true,
      speed: `fast`
    },
    {
      passed: false,
      speed: `fast`
    }
  ]
};

describe(`check results`, () => {
  it(`type of answers is not array`, () => {
    assert.throw(() => getResult(0, 100), /type of answersArr is not array/);
    assert.throw(() => getResult({a: `b`}, 1), /type of answersArr is not array/);
    assert.throw(() => getResult(true, 3), /type of answersArr is not array/);
  });

  it(`type of lives is not number`, () => {
    assert.throw(() => getResult(check1.answers, `qwer`), /type of lives is not number/);
    assert.throw(() => getResult(1, [1]), /type of lives is not number/);
    assert.throw(() => getResult(1, {}), /type of lives is not number/);
  });

  it(`should return -1 when correct answers count is less than 10`, () => {
    assert.equal(-1, getResult(check2.answers, 2));
    assert.equal(-1, getResult(check3.answers, 1));
    assert.equal(-1, getResult([], 1));
  });

  it(`should return -1 when no more lives`, () => {
    assert.equal(-1, getResult(check3.answers, 0));
    assert.equal(-1, getResult(check1.answers, -10));
  });

  it(`should calculate points correctly`, () => {
    assert.equal(1200, getResult(check1.answers, 3));
    assert.equal(1100, getResult(check1.answers, 1));
  });
});
