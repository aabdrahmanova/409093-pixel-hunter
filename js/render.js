
export const render = (template) => {
  const screen = document.createElement(`div`);
  screen.innerHTML = template.trim();
  return screen;
};

const main = document.querySelector(`main.central`);

export const changeScreen = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};
