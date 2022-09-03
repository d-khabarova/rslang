import { btn, elem } from '../../utils/querySelectors';
import audiocall from './variables/audiocallObjs';

export default function exit() {
  elem('.header').classList.remove('none-view');
  elem('.main').classList.remove('none-view');
  elem('.footer').classList.remove('none-view');
  elem('#auth_form').classList.remove('none-view');
  elem('.audiocall').classList.add('none-view');
  elem('.gameplay-audiocall').classList.add('none-view');
  elem('.answers-audiocall').innerHTML = '';
  elem('.gameplay-audiocall').classList.remove('loaded');
  audiocall.gameStep = 0;
  if (elem('.answerImage')) {
    elem('.answerImage').remove();
    btn('.btn-audio').classList.remove('small');
    elem('.answer').innerHTML = '';
    btn('.next-btn').innerHTML = 'НЕ ЗНАЮ';
    btn('.next-btn').classList.remove('big');
  }
}
