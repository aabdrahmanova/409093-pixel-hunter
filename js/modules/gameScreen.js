import {gameState, typesOfGame} from "../data/data";
import {changeScreen, render} from "../render";
import {headerTemplate} from "./header";
import footerTemplate from "./footer";
import {showNextGameScreen} from "./gameController";
import greeting from "./greeting/greeting";

export const showScreen = (screen) => {
  gameState.currentGame = screen;

  if (screen.type === typesOfGame.oneCard) {
    const gameOne = () => {
      const template = `
        ${headerTemplate(true)}
          <div class="game">
          <p class="game__task">${gameState.currentGame.question}</p>
          <form class="game__content  game__content--wide">
            <div class="game__option">
              <img src="${gameState.currentGame.answers[0].src}" alt="Option 1" width="705" height="455">
              <label class="game__answer  game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--wide  game__answer--paint">
                <input name="question1" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
          </form>
          <div class="stats">
            <ul class="stats">
              ${gameState.userAnswers.map((index) =>
    `<li class="stats__result stats__result--${index.speed}"></li>`).join(``)}
            </ul>
          </div>
        </div>
        ${footerTemplate()}`;


      const renderGameOne = render(template);
      const form = renderGameOne.querySelector(`form.game__content`);

      form.onchange = (e) => {
        let target = e.target;
        if (target.value === gameState.currentGame.answers[0].correctAnswer) {
          gameState.userAnswers.push({speed: `correct`, passed: true});
        } else {
          gameState.userAnswers.push({speed: `wrong`, passed: false});
          gameState.lives--;
        }
        showNextGameScreen();

      };

      return renderGameOne;
    };
    changeScreen(gameOne());

  } else if (screen.type === typesOfGame.twoCards) {
    const gameTwo = () => {
      const template = `
      ${headerTemplate(true)}
      <div class="game">
        <p class="game__task">${gameState.currentGame.question}</p>
        <form class="game__content">
          <div class="game__option">
            <img src="${gameState.currentGame.answers[0].src}" alt="Option 1" width="468" height="458">
            <label class="game__answer game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
          <div class="game__option">
            <img src="${gameState.currentGame.answers[1].src}" alt="Option 2" width="468" height="458">
            <label class="game__answer  game__answer--photo">
              <input name="question2" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint">
              <input name="question2" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
        <div class="stats">
          <ul class="stats">
          ${gameState.userAnswers.map((index) =>
    `<li class="stats__result stats__result--${index.speed}"></li>`).join(``)}
          </ul>
        </div>
      </div>
      ${footerTemplate()}`;

      const renderGameTwo = render(template);
      const form = renderGameTwo.querySelector(`form.game__content`);

      form.onchange = () => {
        const checkedRadio = form.querySelectorAll(`input[type="radio"]:checked`);

        if (checkedRadio.length === 2) {
          let correctedAnswerCount = 0;

          checkedRadio.forEach((element) => {
            if ((element.name === `question1` && element.value === gameState.currentGame.answers[0].correctAnswer) ||
                (element.name === `question2` && element.value === gameState.currentGame.answers[1].correctAnswer)) {
              correctedAnswerCount++;
            }
          });

          if (correctedAnswerCount === 2) {
            gameState.userAnswers.push({speed: `correct`, passed: true});
          } else {
            gameState.userAnswers.push({speed: `wrong`, passed: false});
            gameState.lives--;
          }

          showNextGameScreen();
        }
      };
      return renderGameTwo;
    };
    changeScreen(gameTwo());
  } else {
    const gameThree = () => {
      const template = `
      ${headerTemplate(true)}
        <div class="game">
        <p class="game__task">${gameState.currentGame.question}</p>
        <form class="game__content  game__content--triple">
          <div class="game__option" data-id="0">
            <img src="${gameState.currentGame.answers[0].src}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option  game__option--selected" data-id="1">
            <img src="${gameState.currentGame.answers[1].src}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option" data-id="2">
            <img src="${gameState.currentGame.answers[2].src}" alt="Option 1" width="304" height="455">
          </div>
        </form>
        <div class="stats">
          <ul class="stats">
          ${gameState.userAnswers.map((index) =>
    `<li class="stats__result stats__result--${index.speed}"></li>`).join(``)}
          </ul>
        </div>
      </div>
      ${footerTemplate()}`;

      const renderGameThree = render(template);
      const options = renderGameThree.querySelectorAll(`.game__option`);

      options.forEach((element) => {
        element.onclick = (e) => {
          let target = e.target;
          let index = parseInt(target.getAttribute(`data-id`), 10);
          if (gameState.currentGame.answers[index].correctAnswer === `paint`) {
            gameState.userAnswers.push({speed: `correct`, passed: true});
          } else {
            gameState.userAnswers.push({speed: `wrong`, passed: false});
            gameState.lives--;
          }
          showNextGameScreen();
        };
      });

      return renderGameThree;
    };
    changeScreen(gameThree());
  }

  const back = document.querySelector(`.back`);
  back.onclick = () => changeScreen(greeting());
};

