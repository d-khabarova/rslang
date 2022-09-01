import { IApiGetWords } from '../../types/apiTypes';
import { getTranslations } from '../../utils/random';
import { elem, btns, btn } from '../../utils/querySelectors';
import {
  loopStart, loopStep, answersNumber, numberingDifference,
} from './consts';
import { base } from '../../Api/apiConstants';
import incorrect from '../../assets/sounds/incorrect.mp3';
import getAnswer from './getAnswer';
import checkAnswer from './checkAnswer';
import { elementCreator } from '../../utils/elementsCreator';
import audiocall from './audiocallObjs';

let pathRecord: string;

export default async function iteration(page: IApiGetWords[]) {
  const answerTranslate: string = audiocall.gameWords.gameWords[audiocall.gameStep].wordTranslate;
  const answerPosition: number = audiocall.gameWords.gameWordsPosition[audiocall.gameStep];
  // console.log(answerTranslate);
  const translations = getTranslations(page, answerTranslate, answerPosition);
  const answersField = elem('.answers-audiocall');
  for (let i = loopStart; i < answersNumber; i += loopStep) {
    const btnAnswer = elementCreator('button', 'var');
    answersField.appendChild(btnAnswer);
    btnAnswer.innerHTML = `${i + numberingDifference} ${translations[i]}`;
  }
  pathRecord = `${base}/${audiocall.gameWords.gameWords[audiocall.gameStep].audio}`;
  const wordPronunciation = new Audio(pathRecord);
  await wordPronunciation.play();
  btn('.btn-audio').onclick = () => wordPronunciation.play();
  btns('.var').forEach((b) => {
    b.addEventListener(
      'click',
      (evt: MouseEvent) => {
        const htmlButtonElement = evt.target as HTMLButtonElement;
        checkAnswer(htmlButtonElement, audiocall.gameWords);
      },
      { once: true },
    );
  });
  btns('.var').forEach((b) => {
    b.addEventListener(
      'click',
      (evt: MouseEvent) => {
        const htmlButtonElement = evt.target as HTMLButtonElement;
        const variant: string = htmlButtonElement.innerHTML.slice(2);
        if (variant !== getAnswer(audiocall.gameWords.gameWords).wordTranslate) {
          const errorSound = new Audio(incorrect);
          errorSound.play();
        }
      },
    );
  });
}
