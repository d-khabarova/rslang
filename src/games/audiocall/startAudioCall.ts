import { getRandomInt } from '../../utils/random';
import getWords from '../../Api/api';
import { IApiGetWords } from '../../types/apiTypes';

const numberingDifference = 1;
const pagesPerLevel = 30;

export default async function startAudioCall(htmlButtonElement: HTMLButtonElement): Promise<IApiGetWords[]> {
  const difficultyLevel: number = Number(htmlButtonElement.innerHTML) - numberingDifference;
  const makeARandomPage: number = getRandomInt(pagesPerLevel);
  const { wordsPage } = await getWords(difficultyLevel, makeARandomPage);
  return wordsPage;
}
