import { elem } from '../../../utils/querySelectors';
import checkAnswer from '../checkAnswer';

export default function clickAnswer(mouseEvt: MouseEvent) {
  const htmlButtonElement = mouseEvt.target as HTMLButtonElement;
  if (!elem('.answerImage')) {
    if (checkAnswer(htmlButtonElement)) {
      const firstSign = new RegExp(`${htmlButtonElement.innerHTML[0]}`);
      htmlButtonElement.innerHTML = htmlButtonElement.innerHTML.replace(firstSign, '✔');
    }
  }
}
