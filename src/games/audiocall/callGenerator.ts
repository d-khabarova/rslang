import { IApiGetWords } from '../../types/apiTypes';
import { getRandomGameWords } from '../../utils/random';
import { elem, btn } from '../../utils/querySelectors';
import IgameWords from '../../types/audiocallTypes';
import iteration from './iteration';
import { gameSteps } from './consts';

let gameStep = 0;

export default async function callGenerator(page: IApiGetWords[]) {
  const gameWords: IgameWords = getRandomGameWords(page);
  await iteration(page, gameWords, gameStep);
  btn('.next-btn').onclick = async () => {
    if (gameStep === gameSteps && btn('.next-btn').innerHTML === 'НЕ ЗНАЮ') {
      alert('the game is over');
      elem('.game-menu').classList.remove('none-view');
      elem('.gameplay-audiocall').classList.add('none-view');
      elem('.answers-audiocall').innerHTML = '';
      gameStep = 0;
      return;
    }
    if (gameStep === gameSteps && btn('.next-btn').innerHTML === '⟶') {
      alert('the game is over');
      elem('.game-menu').classList.remove('none-view');
      elem('.gameplay-audiocall').classList.add('none-view');
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
      btn('.next-btn').classList.remove('big');
      elem('.answers-audiocall').innerHTML = '';
      gameStep = 0;
      return;
    }
    if (btn('.next-btn').innerHTML === 'НЕ ЗНАЮ' && gameStep < 9) {
      gameStep += 1;
      elem('.answers-audiocall').innerHTML = '';
      await iteration(page, gameWords, gameStep);
    } else {
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
      btn('.next-btn').classList.remove('big');
      elem('.answers-audiocall').innerHTML = '';
      gameStep += 1;
      await iteration(page, gameWords, gameStep);
    }
  };
}
