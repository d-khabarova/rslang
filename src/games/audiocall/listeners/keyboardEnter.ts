import audiocall from '../variables/audiocallObjs';
import { gameSteps } from '../variables/consts';
import { elem, btn } from '../../../utils/querySelectors';
import iteration from '../iteration';
import checkAnswer from '../checkAnswer';
import showResult from '../result/showResult';

export default async function keyboardEnter(keyboardEvt: KeyboardEvent) {
  if (!document.querySelector('.gameplay-audiocall.none-view') && keyboardEvt.key === 'Enter') {
    keyboardEvt.preventDefault();
    if (audiocall.gameStep === gameSteps && btn('.next-btn').innerHTML === '⟶') {
      showResult();
      elem('.audiocall-result').classList.remove('none-view');
      elem('.gameplay-audiocall').classList.add('none-view');
      elem('.exit').classList.add('none-view');
      elem('.answers-audiocall').innerHTML = '';
      audiocall.gameStep = 0;
      audiocall.knownNum = 0;
      audiocall.mistakesNum = 0;
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
      btn('.next-btn').classList.remove('big');
      return;
    }
    if (btn('.next-btn').innerHTML === 'НЕ ЗНАЮ' && audiocall.gameStep <= gameSteps) {
      checkAnswer();
    } else if (btn('.next-btn').innerHTML === '⟶' && audiocall.gameStep < gameSteps) {
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
      btn('.next-btn').classList.remove('big');
      elem('.answers-audiocall').innerHTML = '';
      audiocall.gameStep += 1;
      await iteration();
    }
  }
}
