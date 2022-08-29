import { IApiGetWords } from '../types/apiTypes';

const loopStart = 0;
const loopStep = 1;
const wordsPerPage = 20;
const gameWordsNumber = 10;
const answersNumber = 5;

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function getRandomNumbers(max: number): number[] {
  const numbers: number[] = [];
  for (let i = loopStart; i < gameWordsNumber; i += loopStep) {
    const number = getRandomInt(max);
    if (numbers.includes(number)) {
      i -= loopStep;
    } else numbers.push(number);
  }
  return numbers;
}

export function getRandomGameWords(page: IApiGetWords[]) {
  const words: IApiGetWords[] = [];
  const numbers: number[] = getRandomNumbers(wordsPerPage);
  for (let i = loopStart; i < gameWordsNumber; i += loopStep) {
    words.push(page[numbers[i]]);
  }
  const gameWords: { gameWords: IApiGetWords[]; gameWordsPosition: number[] } = {
    gameWords: words,
    gameWordsPosition: numbers,
  };
  return gameWords;
}

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

export function getTranslations(page: IApiGetWords[], answer: string, answerPos: number): string[] {
  const translations: string[] = [];
  const answerPosAmongOthers = getRandomInt(answersNumber);
  const numbers = getIncorrectNumbers(wordsPerPage);
  for (let i = loopStart; i < answersNumber; i += loopStep) {
    if (i === answerPosAmongOthers && !numbers.includes(answerPos)) {
      translations.push(answer);
    } else translations.push(page[numbers[i]].wordTranslate);
  }
  return translations;
}
