import { IApiGetWords } from '../../types/apiTypes';
import { getRandomGameWords } from '../../utils/random';
import { elem, btn } from '../../utils/creatingElements';
import IgameWords from '../../types/audiocallTypes';
import iteration from './iteration';
import { gameSteps } from './consts';

let gameStep = 0;
const nextBtn = btn('.next-btn');

export default async function callGenerator(page: IApiGetWords[]) {
  const gameWords: IgameWords = getRandomGameWords(page);
  await iteration(page, gameWords, gameStep);
  nextBtn.onclick = async () => {
    if (gameStep === gameSteps && nextBtn.innerHTML === 'НЕ ЗНАЮ') {
      alert('the game is over');
      elem('.header').classList.remove('none-view');
      elem('.main').classList.remove('none-view');
      elem('.game-menu').classList.remove('none-view');
      elem('.gameplay-audiocall').classList.add('none-view');
      elem('.audiocall').classList.add('none-view');
      gameStep = 0;
      return;
    }
    if (gameStep === gameSteps && nextBtn.innerHTML === '⟶') {
      alert('the game is over');
      elem('.header').classList.remove('none-view');
      elem('.main').classList.remove('none-view');
      elem('.game-menu').classList.remove('none-view');
      elem('.gameplay-audiocall').classList.add('none-view');
      elem('.audiocall').classList.add('none-view');
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      nextBtn.innerHTML = 'НЕ ЗНАЮ';
      nextBtn.classList.remove('big');
      gameStep = 0;
      return;
    }
    if (nextBtn.innerHTML === 'НЕ ЗНАЮ' && gameStep < 9) {
      gameStep += 1;
      await iteration(page, gameWords, gameStep);
    } else {
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      nextBtn.innerHTML = 'НЕ ЗНАЮ';
      nextBtn.classList.remove('big');
      gameStep += 1;
      await iteration(page, gameWords, gameStep);
    }
  };
}
