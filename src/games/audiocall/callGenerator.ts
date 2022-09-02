import genRandomGameWords from './random/gameWords';
import { elem, btn } from '../../utils/querySelectors';
import iteration from './iteration';
import { gameSteps } from './variables/consts';
import audiocall from './variables/audiocallObjs';

export default async function callGenerator() {
  genRandomGameWords();
  await iteration();
  btn('.next-btn').onclick = async () => {
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
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
      btn('.next-btn').classList.remove('big');
      elem('.answers-audiocall').innerHTML = '';
      audiocall.gameStep = 0;
      return;
    }
    if (btn('.next-btn').innerHTML === 'НЕ ЗНАЮ' && audiocall.gameStep < gameSteps) {
      audiocall.gameStep += 1;
      elem('.answers-audiocall').innerHTML = '';
      await iteration();
    } else {
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
      btn('.next-btn').classList.remove('big');
      elem('.answers-audiocall').innerHTML = '';
      audiocall.gameStep += 1;
      await iteration();
    }
  };
}
