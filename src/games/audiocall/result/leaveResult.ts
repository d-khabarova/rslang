import { btn, elem } from '../../../utils/querySelectors';
import clearStat from './clearStatistic';
import startAudiocall from '../startGame';

export default function leaveResult() {
  btn('.continue').addEventListener('click', () => {
    clearStat();
    if (elem('.textbook__pages')) {
      startAudiocall();
    } else elem('.game-menu').classList.remove('none-view');
  });
  btn('.to-main').addEventListener('click', () => {
    clearStat();
    elem('.audiocall').classList.add('none-view');
    elem('.header').classList.remove('none-view');
    elem('.main').classList.remove('none-view');
    elem('.footer').classList.remove('none-view');
    elem('#auth_form')?.classList.remove('none-view');
  });
  btn('.to-textbook').addEventListener('click', () => {
    clearStat();
    elem('.header').classList.remove('none-view');
    elem('.main').classList.remove('none-view');
    elem('.footer').classList.remove('none-view');
    elem('.audiocall').classList.add('none-view');
    elem('.game-menu').classList.add('none-view');
    elem('.gameplay-audiocall').classList.add('none-view');
    btn('.to-textbook').classList.add('none-view');
    btn('.to-main').classList.remove('none-view');
    elem('.answers-audiocall').innerHTML = '';
    if (elem('.answerImage')) {
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
      btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
      btn('.next-btn').classList.remove('big');
    }
  });
}
