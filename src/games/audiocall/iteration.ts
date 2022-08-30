import { IApiGetWords } from '../../types/apiTypes';
import IgameWords from '../../types/audiocallTypes';
import { getTranslations } from '../../utils/random';
import { elem, btns, btn } from '../../utils/creatingElements';
import {
  loopStart, loopStep, answersNumber, numberingDifference,
} from './consts';
import { base } from '../../Api/apiConstants';
import fanfar from '../../assets/sounds/fanfar.mp3';
import incorrect from '../../assets/sounds/incorrect.mp3';

let pathRecord: string;

function answer(gameWords: IApiGetWords[], step: number) {
  return gameWords[step];
}

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
        if (variant === answer(gameWords.gameWords, gameStep).wordTranslate) {
          const correctSound = new Audio(fanfar);
          correctSound.play();
          elem('.solution-field').insertAdjacentHTML(
            'afterbegin',
            `
            <img
            class="answerImage"
            src="${base}/${gameWords.gameWords[gameStep].image}"
            alt="answerImage">
            `,
          );
          btn('.btn-audio').classList.add('small');
          elem('.answer').innerHTML = answer(gameWords.gameWords, gameStep).word;
          btn('.next-btn').innerHTML = '⟶';
          btn('.next-btn').classList.add('big');
        }
      },
      { once: true },
    );
  });
  elem('.answers-audiocall').onclick = (evt: MouseEvent) => {
    const htmlButtonElement = evt.target as HTMLButtonElement;
    const variant: string = htmlButtonElement.innerHTML.slice(2);
    if (variant !== answer(gameWords.gameWords, gameStep).wordTranslate) {
      const errorSound = new Audio(incorrect);
      errorSound.play();
    }
  };
}
