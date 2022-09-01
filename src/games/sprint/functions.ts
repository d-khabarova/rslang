import getStatistic from './statistics';
import { elem } from '../../utils/querySelectors';

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
  const dataGoodStat = await getStatistic(goodIds);
  const dataBadStat = await getStatistic(badIds);
  elem('.good_count').innerHTML = `${goodIds.length}`;
  elem('.good_stat').innerHTML = dataGoodStat;
  elem('.bad_count').innerHTML = `${badIds.length}`;
  elem('.bad_stat').innerHTML = dataBadStat;
  elem('.stat').classList.remove('none-view');
  elem('.sprint-play').classList.add('none-view');
}
