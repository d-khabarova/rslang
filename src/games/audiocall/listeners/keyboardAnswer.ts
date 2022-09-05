import audiocall from '../variables/audiocallObjs';
import { elem, btns } from '../../../utils/querySelectors';
import { numberingDifference } from '../variables/consts';
import checkAnswer from '../checkAnswer';

async function launchFromKeyboard() {
  const variants = btns('.var');
  const correctButton: HTMLButtonElement = variants[audiocall.answer - numberingDifference];
  if (!elem('.answerImage')) {
    if (checkAnswer(correctButton)) {
      const firstSign = new RegExp(`${correctButton.innerHTML[0]}`);
      correctButton.innerHTML = correctButton.innerHTML.replace(firstSign, '✔');
    }
  }
}

export default function keyboardAnswer(keyboardEvt: KeyboardEvent) {
  if (!document.querySelector('.gameplay-audiocall.none-view')) {
    audiocall.answer = +keyboardEvt.key;
    if (audiocall.answer > 0 && audiocall.answer < 6) launchFromKeyboard();
  }
}
