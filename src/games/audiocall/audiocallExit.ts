import { btn, elem } from '../../utils/querySelectors';

export default function exit() {
  elem('.header').classList.remove('none-view');
  elem('.main').classList.remove('none-view');
  elem('.footer').classList.remove('none-view');
  elem('#auth_form').classList.remove('none-view');
  elem('.audiocall').classList.add('none-view');
  elem('.gameplay-audiocall').classList.add('none-view');
  elem('.answers-audiocall').innerHTML = '';
  if (elem('.answerImage')) {
    elem('.answerImage').remove();
    btn('.btn-audio').classList.remove('small');
    elem('.answer').innerHTML = '';
  }
}
