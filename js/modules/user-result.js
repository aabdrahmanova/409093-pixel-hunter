const points = {
  FAST: 150,
  NORMAL: 100,
  SLOW: 50
};

const speed = {
  FAST: `fast`,
  NORMAL: `normal`,
  SLOW: `slow`
};

const getResult = (answersArr, lives) => {
  let result = 0;

  if (lives <= 0 || answersArr.length < 10) {
    return -1;
  }
  if (typeof lives !== `number`) {
    throw new Error(`type of lives is not number`);
  }
  if (!Array.isArray(answersArr)) {
    throw new Error(`type of answersArr is not array`);
  }

  for (let i = 0; i < answersArr.length; i++) {
    if (answersArr[i].passed) {
      switch (answersArr[i].speed) {
        case speed.FAST:
          result += points.FAST;
          break;
        case speed.NORMAL:
          result += points.NORMAL;
          break;
        case speed.SLOW:
          result += points.SLOW;
          break;
        default:
          throw new Error(`type of speed is not correct`);
      }
    }
  }
  result += lives * 50;
  return result;

};

export default getResult;
