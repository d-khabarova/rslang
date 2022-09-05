import getRandomInt from './random/integers';
import API from '../../Api/api';
import { IApiGetWords } from '../../types/apiTypes';

const numberingDifference = 1;
const pagesPerLevel = 30;
const api = new API();

export default async function setLevel(
  btnNumber: number,
): Promise<IApiGetWords[]> {
  document.body.classList.remove('loaded');
  const difficultyLevel: number = btnNumber - numberingDifference;
  const makeARandomPage: number = getRandomInt(pagesPerLevel);
  const { wordsPage } = await api.getWords(difficultyLevel, makeARandomPage);
  return wordsPage;
}
