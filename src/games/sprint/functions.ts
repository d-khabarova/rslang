import { getStatistic, audioHandler } from './statistics';
import { elem } from '../../utils/querySelectors';
import fanfar from '../../assets/sounds/fanfar.mp3';
import incorrect from '../../assets/sounds/incorrect.mp3';

let goodIds: Array<string> = [];
let badIds: Array<string> = [];
let counterTrueAnswer = 0;
const countForIncrease = 4;

export function goodAnswer(id: string) {
  const scorePlus = elem('.score_plus');
  const scoreSum = elem('.score');
  const correctSound = new Audio(fanfar);
  const indicators = document.querySelectorAll('.indicator');
  correctSound.play();
  elem('.sprint-play .card').classList.add('good_answer');
  elem('.answer-check').classList.add('active');
  counterTrueAnswer += 1;
  switch (counterTrueAnswer % countForIncrease) {
    case 0:
      scorePlus.innerHTML = (Number(scorePlus.innerHTML) * 2).toString();
      indicators.forEach((indicator) => {
        indicator.classList.remove('active');
      });
      break;
    case 1:
      indicators[0].classList.add('active');
      break;
    case 2:
      indicators[1].classList.add('active');
      break;
    case 3:
      indicators[2].classList.add('active');
      break;
    default:
      indicators.forEach((indicator) => {
        indicator.classList.remove('active');
      });
  }
  scoreSum.innerHTML = (Number(scorePlus.innerHTML) + Number(scoreSum.innerHTML)).toString();
  goodIds.push(id);
}

export function badAnswer(id: string) {
  const scorePlus = elem('.score_plus');
  const indicators = document.querySelectorAll('.indicator');
  const errorSound = new Audio(incorrect);
  errorSound.play();
  elem('.sprint-play .card').classList.add('bad_answer');
  indicators.forEach((indicator) => {
    indicator.classList.remove('active');
  });
  counterTrueAnswer = 0;
  scorePlus.innerHTML = '10';
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
  elem('.score_total').innerHTML = elem('.score').innerHTML;
  elem('.answer-check').classList.remove('active');
  audioHandler();
}

export function clearStat() {
  goodIds = [];
  badIds = [];
  counterTrueAnswer = 0;
}
