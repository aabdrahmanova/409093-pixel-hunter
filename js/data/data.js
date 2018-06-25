export const initialState = Object.freeze({
  lives: 3,
  time: 30,
  isFailed: false,
  currentGame: null,
  userAnswers: [],
  total: 0
});

export const gameState = Object.assign({}, initialState);

export const typesOfGame = {
  oneCard: 1,
  twoCards: 2,
  threeCards: 3
};

export const gameScreens = [];

export const fullGameArr = () => {
  for (let i = 0; i < 10; i++) {
    let type = getRandomInt(typesOfGame.oneCard, typesOfGame.threeCards);
    let game = {
      type,
      question: ``,
      answers: []
    };

    if (type === typesOfGame.oneCard) {
      game.question = `Угадай, фото или рисунок?`;
      game.answers.push(getRandomAnswer());
    } else if (type === typesOfGame.twoCards) {
      game.question = `Угадайте для каждого изображения фото или рисунок?`;
      game.answers.push(getRandomAnswer());
      game.answers.push(getRandomAnswer());
    } else if (type === typesOfGame.threeCards) {
      game.question = `Найдите рисунок среди изображений`;
      game.answers.push(getRandomAnswer());
      game.answers.push(getRandomAnswer());
      game.answers.push(getRandomAnswer());
    }

    gameScreens.push(game);
  }
};

// export default gameState;

const getRandomInt = (min, max) => {
  max = max + 1;
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomAnswer = () => {
  let isPhotosType = !!getRandomInt(0, 1);

  if (isPhotosType) {
    return {
      src: fakePictures.photos[getRandomInt(0, fakePictures.photos.length - 1)],
      correctAnswer: `photo`
    };
  } else {
    return {
      src: fakePictures.paintings[getRandomInt(0, fakePictures.paintings.length - 1)],
      correctAnswer: `paint`
    };
  }
};

const fakePictures = {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,

    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,

    // Nature
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    // People
    `http://i.imgur.com/1KegWPz.jpg`,

    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,

    // Nature
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};
