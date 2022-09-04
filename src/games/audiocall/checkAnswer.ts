import fanfar from '../../assets/sounds/fanfar.mp3';
import incorrect from '../../assets/sounds/incorrect.mp3';
import { elem, btn } from '../../utils/querySelectors';
import { base } from '../../Api/apiConstants';
import audiocall from './variables/audiocallObjs';
import changeBtns from './changeBtns';

export default function checkAnswer(htmlButtonElement?: HTMLButtonElement): boolean {
  changeBtns();
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
  elem('.answer').innerHTML = audiocall.gameWords.words[audiocall.gameStep].word;
  btn('.next-btn').innerHTML = '⟶';
  btn('.next-btn').classList.add('big');
  if (htmlButtonElement) {
    const variant: string = htmlButtonElement.innerHTML.slice(2);
    if (variant === audiocall.gameWords.words[audiocall.gameStep].wordTranslate) {
      const correctSound = new Audio(fanfar);
      correctSound.play();
      htmlButtonElement.classList.add('correct');
      audiocall.goodIds.push(audiocall.gameWords.words[audiocall.gameStep].id);
      audiocall.knownNum += 1;
      return true;
    }
    htmlButtonElement.classList.add('incorrect');
    new Audio(incorrect).play();
    audiocall.badIds.push(audiocall.gameWords.words[audiocall.gameStep].id);
    audiocall.mistakesNum += 1;
    return false;
  }
  new Audio(incorrect).play();
  audiocall.badIds.push(audiocall.gameWords.words[audiocall.gameStep].id);
  audiocall.mistakesNum += 1;
  return false;
}
