import getAnswer from './getAnswer';
import IgameWords from '../../types/audiocallTypes';
import fanfar from '../../assets/sounds/fanfar.mp3';
import { elem, btn } from '../../utils/querySelectors';
import { base } from '../../Api/apiConstants';

export default function checkAnswer(
  htmlButtonElement: HTMLButtonElement,
  gameWords: IgameWords,
  gameStep: number,
) {
  const variant: string = htmlButtonElement.innerHTML.slice(2);
  if (variant === getAnswer(gameWords.gameWords, gameStep).wordTranslate) {
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
    elem('.answer').innerHTML = getAnswer(gameWords.gameWords, gameStep).word;
    btn('.next-btn').innerHTML = '⟶';
    btn('.next-btn').classList.add('big');
    htmlButtonElement.classList.add('correctAnswerBtn');
  }
}
