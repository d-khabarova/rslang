import genRandomGameWords from './random/gameWords';
import { elem, btn } from '../../utils/querySelectors';
import iteration from './iteration';
import { gameSteps } from './variables/consts';
import audiocall from './variables/audiocallObjs';
import checkAnswer from './checkAnswer';
import showResult from './result/showResult';

export default async function callGenerator() {
  genRandomGameWords();
  await iteration();
  btn('.next-btn').onclick = async () => {
    if (btn('.next-btn').innerHTML === 'НЕ ЗНАЮ') {
      checkAnswer();
    } else if (audiocall.gameStep === gameSteps) {
      await showResult();
      elem('.audiocall-result').classList.remove('none-view');
      elem('.gameplay-audiocall').classList.add('none-view');
      elem('.exit').classList.add('none-view');
      elem('.answers-audiocall').innerHTML = '';
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
      btn('.next-btn').classList.remove('big');
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
