import audiocall from '../audiocallObjs';
import { btns, elem } from '../../../utils/querySelectors';
import getAnswer from '../getAnswer';
import incorrect from '../../../assets/sounds/incorrect.mp3';
import { numberingDifference } from '../consts';
import checkAnswer from '../checkAnswer';

async function launchFromKeyboard() {
  const variants = btns('.var');
  const correctButton: HTMLButtonElement = variants[audiocall.answer - numberingDifference];
  const correctAnswer: string = variants[audiocall.answer - numberingDifference].innerHTML.slice(2);
  if (correctAnswer !== getAnswer(audiocall.gameWords.gameWords).wordTranslate) {
    new Audio(incorrect).play();
  } else if (!elem('.answerImage')) {
    checkAnswer(correctButton, audiocall.gameWords);
  }
}

export default function keyboardAnswer(keyboardEvt: KeyboardEvent) {
  if (!document.querySelector('.gameplay-audiocall.none-view')) {
    audiocall.answer = +keyboardEvt.key;
    if (audiocall.answer > 0 && audiocall.answer < 6) launchFromKeyboard();
  }
}
