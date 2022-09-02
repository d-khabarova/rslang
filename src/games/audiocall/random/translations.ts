import getRandomInt from './integers';
import audiocall from '../variables/audiocallObjs';
import {
  loopStart, loopStep, answersNumber, wordsPerPage,
} from '../variables/consts';

function getIncorrectNumbers(max: number): number[] {
  const numbers: number[] = [];
  for (let i = loopStart; i < answersNumber; i += loopStep) {
    const number = getRandomInt(max);
    if (numbers.includes(number)) {
      i -= loopStep;
    } else numbers.push(number);
  }
  return numbers;
}

export default function getTranslations(
  answer: string,
  answerPos: number,
): string[] {
  const translations: string[] = [];
  const answerPosAmongOthers = getRandomInt(answersNumber);
  const numbers = getIncorrectNumbers(wordsPerPage);
  for (let i = loopStart; i < answersNumber; i += loopStep) {
    if (i === answerPosAmongOthers && !numbers.includes(answerPos)) {
      translations.push(answer);
    } else translations.push(audiocall.page[numbers[i]].wordTranslate);
  }
  return translations;
}
