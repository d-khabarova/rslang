import getAnswer from './getAnswer';
import fanfar from '../../assets/sounds/fanfar.mp3';
import { elem, btn } from '../../utils/querySelectors';
import { base } from '../../Api/apiConstants';
import audiocall from './variables/audiocallObjs';

export default function checkAnswer(htmlButtonElement: HTMLButtonElement) {
  const variant: string = htmlButtonElement.innerHTML.slice(2);
  if (variant === getAnswer(audiocall.gameWords.words).wordTranslate) {
    const correctSound = new Audio(fanfar);
    correctSound.play();
    elem('.solution-field').insertAdjacentHTML(
      'afterbegin',
      `
      <img
      class="answerImage"
      src="${base}/${audiocall.gameWords.words[audiocall.gameStep].image}"
      alt="answerImage">
      `,
    );
    btn('.btn-audio').classList.add('small');
    elem('.answer').innerHTML = getAnswer(audiocall.gameWords.words).word;
    btn('.next-btn').innerHTML = '⟶';
    btn('.next-btn').classList.add('big');
    htmlButtonElement.classList.add('correctAnswerBtn');
  }
}
