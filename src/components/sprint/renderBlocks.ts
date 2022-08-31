import { elementCreator, buttonCreator } from '../../utils/elementsCreator';

const welcomeText = elementCreator('div', 'welcome');
const cardBlock = elementCreator('div', 'card');
const scoreBlock = elementCreator('div', 'score_block');
const counterScore = elementCreator('div', 'counter_score');
export const wordBlock = elementCreator('h3');
export const translateBlock = elementCreator('h4');
export const trueBtn = buttonCreator('true', 'Верно');
export const falseBtn = buttonCreator('false', 'Неверно');
const levelCount = 5;
const score = 0;
const scoreStart = 10;

export function renderWelcomeText() {
  const main = document.querySelector('.main') as HTMLElement;
  const title = elementCreator('h1') as HTMLHeadingElement;
  const text = elementCreator('div', 'text') as HTMLDivElement;
  const level = elementCreator('div', 'level') as HTMLDivElement;
  title.textContent = 'Спринт';
  text.textContent = 'В игре необходимо определить соответсвует ли перевод предложенному слову';
  level.textContent = 'Выберите уровень:';
  for (let i = 0; i <= levelCount; i += 1) {
    const buttonLevel = buttonCreator(`level${i}`, '');
    buttonLevel.dataset.level = `${i}`;
    const levelNum = elementCreator('span') as HTMLSpanElement;
    levelNum.textContent = `${i + 1}`;
    buttonLevel.appendChild(levelNum);
    level.appendChild(buttonLevel);
  }
  main.innerHTML = '';
  welcomeText.appendChild(title);
  welcomeText.appendChild(text);
  welcomeText.appendChild(level);
  main.appendChild(welcomeText);
}

export function renderBlockCard() {
  const main = document.querySelector('.main') as HTMLElement;
  main.innerHTML = '';
  const scoreTotaLine = `<p class='score'>${score}</p>`;
  const scoreTextLine = `<p><span class='counter'>${scoreStart}</span> очков за слово</p>`;
  scoreBlock.innerHTML = scoreTotaLine;
  counterScore.innerHTML = scoreTextLine;
  cardBlock.appendChild(scoreBlock);
  cardBlock.appendChild(counterScore);
  cardBlock.appendChild(wordBlock);
  cardBlock.appendChild(translateBlock);
  cardBlock.appendChild(falseBtn);
  cardBlock.appendChild(trueBtn);
  main.appendChild(cardBlock);
}
