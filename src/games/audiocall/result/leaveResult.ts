import { btn, elem } from '../../../utils/querySelectors';
import clearStat from './clearStatistic';

export default function leaveResult() {
  btn('.continue').addEventListener('click', () => {
    clearStat();
    elem('.game-menu').classList.remove('none-view');
  });
  btn('.to-main').addEventListener('click', () => {
    clearStat();
    elem('.audiocall').classList.add('none-view');
    elem('.header').classList.remove('none-view');
    elem('.main').classList.remove('none-view');
    elem('.footer').classList.remove('none-view');
    elem('#auth_form').classList.remove('none-view');
  });
}
