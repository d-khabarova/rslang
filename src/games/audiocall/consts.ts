import { IApiGetWords } from '../../types/apiTypes';
import IgameWords from '../../types/audiocallTypes';

const objArr: IApiGetWords[] = [];
const digitsArr: number[] = [];
const limiPlug = 10;
const digitPlug = 1;

const wordPlug: IApiGetWords = {
  id: '',
  group: digitPlug,
  page: digitPlug,
  word: '',
  image: '',
  audio: '',
  audioMeaning: '',
  audioExample: '',
  textMeaning: '',
  textExample: '',
  transcription: '',
  textExampleTranslate: '',
  textMeaningTranslate: '',
  wordTranslate: '',
};

export const loopStart = 0;
export const loopStep = 1;
export const answersNumber = 5;
export const numberingDifference = 1;
export const gameSteps = 9;
export const page: IApiGetWords[] = objArr.fill(wordPlug, limiPlug);
export const gameWords: IgameWords = {
  gameWords: page,
  gameWordsPosition: digitsArr.fill(digitPlug, limiPlug),
};
