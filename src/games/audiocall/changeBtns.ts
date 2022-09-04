import { btns } from '../../utils/querySelectors';
import audiocall from './variables/audiocallObjs';
import {
  loopStart, loopStep, answersNumber,
} from './variables/consts';

export default function changeBtns() {
  const variants = btns('.var');
  const answer = audiocall.gameWords.words[audiocall.gameStep].wordTranslate;
  for (let i = loopStart; i < answersNumber; i += loopStep) {
    if (variants[i].innerHTML.slice(2) !== answer) {
      variants[i].classList.add('transparent');
    }
  }
}
