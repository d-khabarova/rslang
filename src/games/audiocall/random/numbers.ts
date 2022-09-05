import getRandomInt from './integers';
import {
  loopStart, loopStep, gameWordsNumber,
} from '../variables/consts';

export default function getRandomNumbers(max: number): number[] {
  const numbers: number[] = [];
  for (let i = loopStart; i < gameWordsNumber; i += loopStep) {
    const number = getRandomInt(max);
    if (numbers.includes(number)) {
      i -= loopStep;
    } else numbers.push(number);
  }
  return numbers;
}
