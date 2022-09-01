import { IApiGetWords } from '../../types/apiTypes';
import { getRandomGameWords } from '../../utils/random';
import { elem, btn } from '../../utils/querySelectors';
import IgameWords from '../../types/audiocallTypes';
import iteration from './iteration';
import { gameSteps } from './consts';
import audiocall from './audiocallObjs';

export default async function callGenerator(page: IApiGetWords[]) {
  const gameWords: IgameWords = getRandomGameWords(page);
  await iteration(page, gameWords);
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
    if (btn('.next-btn').innerHTML === 'НЕ ЗНАЮ' && audiocall.gameStep < 9) {
      audiocall.gameStep += 1;
      elem('.answers-audiocall').innerHTML = '';
      await iteration(page, gameWords);
    } else {
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
      btn('.next-btn').classList.remove('big');
      elem('.answers-audiocall').innerHTML = '';
      audiocall.gameStep += 1;
      await iteration(page, gameWords);
    }
  };
  document.addEventListener('keydown', async (keyboardEvt: KeyboardEvent) => {
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
        elem('.answerImage').remove();
        btn('.btn-audio').classList.remove('small');
        elem('.answer').innerHTML = '';
        btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
        btn('.next-btn').classList.remove('big');
        elem('.answers-audiocall').innerHTML = '';
        audiocall.gameStep = 0;
        return;
      }
      if (btn('.next-btn').innerHTML === 'НЕ ЗНАЮ' && audiocall.gameStep < 9) {
        audiocall.gameStep += 1;
        elem('.answers-audiocall').innerHTML = '';
        await iteration(page, gameWords);
      } else {
        elem('.answerImage').remove();
        btn('.btn-audio').classList.remove('small');
        elem('.answer').innerHTML = '';
        btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
        btn('.next-btn').classList.remove('big');
        elem('.answers-audiocall').innerHTML = '';
        audiocall.gameStep += 1;
        await iteration(page, gameWords);
      }
    }
  });
}
