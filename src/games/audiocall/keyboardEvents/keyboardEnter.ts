import audiocall from '../audiocallObjs';
import { gameSteps } from '../consts';
import { elem, btn } from '../../../utils/querySelectors';
import iteration from '../iteration';

export default async function keyboardEnter(keyboardEvt: KeyboardEvent) {
  if (!document.querySelector('.gameplay-audiocall.none-view') && keyboardEvt.key === 'Enter') {
    if (audiocall.gameStep === gameSteps && btn('.next-btn').innerHTML === 'НЕ ЗНАЮ') {
      alert('the game is over');
      elem('.game-menu').classList.remove('none-view');
      elem('.gameplay-audiocall').classList.add('none-view');
      elem('.answers-audiocall').innerHTML = '';
      audiocall.gameStep = 0;
      return;
    }
    if (audiocall.gameStep === gameSteps && btn('.next-btn').innerHTML === '⟶') {
      alert('the game is over');
      elem('.game-menu').classList.remove('none-view');
      elem('.gameplay-audiocall').classList.add('none-view');
      elem('.answers-audiocall').innerHTML = '';
      audiocall.gameStep = 0;
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
      btn('.next-btn').classList.remove('big');
      return;
    }
    if (btn('.next-btn').innerHTML === 'НЕ ЗНАЮ' && audiocall.gameStep < gameSteps) {
      audiocall.gameStep += 1;
      elem('.answers-audiocall').innerHTML = '';
      await iteration(audiocall.page!);
    } else if (btn('.next-btn').innerHTML === '⟶' && audiocall.gameStep < gameSteps) {
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
      btn('.next-btn').classList.remove('big');
      elem('.answers-audiocall').innerHTML = '';
      audiocall.gameStep += 1;
      await iteration(audiocall.page!);
    }
  }
}
