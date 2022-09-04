import getTranslations from './random/translations';
import { elem, btns, btn } from '../../utils/querySelectors';
import {
  loopStart, loopStep, answersNumber, numberingDifference,
} from './variables/consts';
import { base } from '../../Api/apiConstants';
import { elementCreator } from '../../utils/elementsCreator';
import audiocall from './variables/audiocallObjs';
import clickAnswer from './listeners/clickAnswer';

let pathRecord: string;

export default async function iteration() {
  const answerTranslate: string = audiocall.gameWords.words[audiocall.gameStep].wordTranslate;
  const answerPosition: number = audiocall.gameWords.positions[audiocall.gameStep];
  const translations = getTranslations(answerTranslate, answerPosition);
  const answersField = elem('.answers-audiocall');
  for (let i = loopStart; i < answersNumber; i += loopStep) {
    const btnAnswer = elementCreator('button', 'var');
    answersField.appendChild(btnAnswer);
    btnAnswer.innerHTML = `${i + numberingDifference} ${translations[i]}`;
  }
  pathRecord = `${base}/${audiocall.gameWords.words[audiocall.gameStep].audio}`;
  const wordPronunciation = new Audio(pathRecord);
  await wordPronunciation.play();
  btn('.btn-audio').onclick = () => wordPronunciation.play();
  btns('.var').forEach((b) => {
    b.addEventListener('click', clickAnswer, { once: true });
  });
  document.body.classList.add('loaded');
}
