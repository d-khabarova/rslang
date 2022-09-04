import { elem } from '../../utils/querySelectors';

export default function openMenu() {
  elem('.header').classList.add('none-view');
  elem('.main').classList.add('none-view');
  elem('.footer').classList.add('none-view');
  elem('#auth_form').classList.add('none-view');
  elem('.audiocall').classList.remove('none-view');
  elem('.game-menu').classList.remove('none-view');
}
