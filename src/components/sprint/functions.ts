import { elementCreator, buttonCreator } from '../../utils/elementsCreator';
import API from '../../Api/api';
import { ApiGetWords } from '../../types/apiTypes';

const main = document.querySelector('.main') as HTMLElement;
const welcomeText = elementCreator('div', 'welcome');
const cardBlock = elementCreator('div', 'card');
const wordBlock = elementCreator('h3');
const translateBlock = elementCreator('h4');
const trueBtn = buttonCreator('true', 'Верно');
const falseBtn = buttonCreator('false', 'Неверно');
const levelCount = 5;
const api = new API();

export function renderWelcomeText() {
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

function renderBlockCard() {
  main.innerHTML = '';
  cardBlock.appendChild(wordBlock);
  cardBlock.appendChild(translateBlock);
  cardBlock.appendChild(falseBtn);
  cardBlock.appendChild(trueBtn);
  main.appendChild(cardBlock);
}

export function getRandomId(arr: Array<string>) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function renderCard(id: string, randomId: string) {
  renderBlockCard();
  const word: ApiGetWords = await api.getWord(id);
  const randomFromTwoId = getRandomId([id, randomId]);
  const randomWord: ApiGetWords = await api.getWord(randomFromTwoId);
  const trueTranslate = word.wordTranslate;
  const randomTranslate = randomWord.wordTranslate;
  const buttons = document.querySelectorAll('.card button');
  wordBlock.textContent = word.word;
  translateBlock.textContent = randomTranslate;
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
}
