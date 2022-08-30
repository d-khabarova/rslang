import { IApiGetWords } from '../../types/apiTypes';
import IgameWords from '../../types/audiocallTypes';
import { getTranslations } from '../../utils/random';
import { elem, btns, btn } from '../../utils/creatingElements';
import {
  loopStart, loopStep, answersNumber, numberingDifference,
} from './consts';
import { base } from '../../Api/apiConstants';
import incorrect from '../../assets/sounds/incorrect.mp3';
import getAnswer from './getAnswer';
import checkAnswer from './checkAnswer';

let pathRecord: string;

export default async function iteration(
  page: IApiGetWords[],
  gameWords: IgameWords,
  gameStep: number,
) {
  const answerTranslate: string = gameWords.gameWords[gameStep].wordTranslate;
  const answerPosition: number = gameWords.gameWordsPosition[gameStep];
  // console.log(answerTranslate);
  const translations = getTranslations(page, answerTranslate, answerPosition);
  const variantsBtns: NodeListOf<HTMLButtonElement> = btns('.var');
  for (let i = loopStart; i < answersNumber; i += loopStep) {
    variantsBtns[i].innerHTML = `${i + numberingDifference} ${translations[i]}`;
  }
  pathRecord = `${base}/${gameWords.gameWords[gameStep].audio}`;
  const wordPronunciation = new Audio(pathRecord);
  wordPronunciation.play();
  btn('.btn-audio').onclick = () => wordPronunciation.play();
  btns('.var').forEach((b) => {
    b.addEventListener(
      'click',
      (evt: MouseEvent) => {
        const htmlButtonElement = evt.target as HTMLButtonElement;
        const variant: string = htmlButtonElement.innerHTML.slice(2);
        checkAnswer(variant, gameWords, gameStep);
      },
      { once: true },
    );
  });
  elem('.answers-audiocall').onclick = (evt: MouseEvent) => {
    const htmlButtonElement = evt.target as HTMLButtonElement;
    const variant: string = htmlButtonElement.innerHTML.slice(2);
    if (variant !== getAnswer(gameWords.gameWords, gameStep).wordTranslate) {
      const errorSound = new Audio(incorrect);
      errorSound.play();
    }
  };
}
