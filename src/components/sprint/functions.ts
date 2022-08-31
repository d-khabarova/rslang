import getStatistic from './statistics';
import { elementCreator } from '../../utils/elementsCreator';

export const goodIds: Array<string> = [];
export const badIds: Array<string> = [];
let counterTrueAnswer = 0;

export function getRandomId(arr: Array<string>) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function goodAnswer(id: string) {
  const score = document.querySelector('.counter') as HTMLElement;
  const scoreTotal = document.querySelector('.score') as HTMLElement;
  counterTrueAnswer += 1;
  scoreTotal.innerHTML = (Number(score.innerHTML) + Number(scoreTotal.innerHTML)).toString();
  goodIds.push(id);
}

export function badAnswer(id: string) {
  const score = document.querySelector('.counter') as HTMLElement;
  counterTrueAnswer = 0;
  score.innerHTML = '10';
  badIds.push(id);
}

export async function finish() {
  const main = document.querySelector('.main') as HTMLElement;
  const stat = elementCreator('div', 'stat');
  const goodTitle = elementCreator('div', 'good_title');
  const goodStat = elementCreator('div', 'good_stat');
  const dataGoodStat = await getStatistic(goodIds);
  const badTitle = elementCreator('div', 'bad_title');
  const badStat = elementCreator('div', 'bad_stat');
  const dataBadStat = await getStatistic(badIds);
  main.innerHTML = '';
  goodTitle.innerText = `Верно: ${goodIds.length}`;
  goodStat.innerHTML = dataGoodStat;
  stat.appendChild(goodTitle);
  stat.appendChild(goodStat);
  badTitle.innerText = `Неверно: ${badIds.length}`;
  badStat.innerHTML = dataBadStat;
  stat.appendChild(badTitle);
  stat.appendChild(badStat);
  main.appendChild(stat);
}
