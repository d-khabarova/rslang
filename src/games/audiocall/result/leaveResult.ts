import { btn, elem } from '../../../utils/querySelectors';

export default function leaveResult() {
  btn('.continue').addEventListener('click', () => {
    elem('.audiocall-result').classList.add('none-view');
    elem('.game-menu').classList.remove('none-view');
    elem('.exit').classList.remove('none-view');
  });
  btn('.to-main').addEventListener('click', () => {
    elem('.audiocall-result').classList.add('none-view');
    elem('.audiocall').classList.add('none-view');
    elem('.exit').classList.remove('none-view');
    elem('.header').classList.remove('none-view');
    elem('.main').classList.remove('none-view');
    elem('.footer').classList.remove('none-view');
    elem('#auth_form').classList.remove('none-view');
  });
}
