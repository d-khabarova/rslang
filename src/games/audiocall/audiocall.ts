import renderAudiocall from './renderAudiocall';
import { btn, elem, btns } from '../../utils/querySelectors';
import startAudioCall from './startAudioCall';
import { IApiGetWords } from '../../types/apiTypes';
import callGenerator from './callGenerator';
import keyboardLevel from './keyboardEvents/keyboardLevel';

export default function audioCall(): void {
  renderAudiocall();
  document.addEventListener('keydown', keyboardLevel);
  btn('.nav_audiocall').addEventListener('click', () => {
    elem('.header').classList.add('none-view');
    elem('.main').classList.add('none-view');
    elem('#auth_form').classList.add('none-view');
    elem('.footer').classList.add('none-view');
    elem('.gameplay-audiocall').classList.add('none-view');
    elem('.game-menu').classList.remove('none-view');
    elem('.audiocall').classList.remove('none-view');
  });
  btn('.btn-exit').addEventListener('click', () => {
    elem('.header').classList.remove('none-view');
    elem('.main').classList.remove('none-view');
    elem('#auth_form').classList.remove('none-view');
    elem('.footer').classList.remove('none-view');
    elem('.audiocall').classList.add('none-view');
    elem('.answers-audiocall').innerHTML = '';
    if (elem('.answerImage')) {
      elem('.answerImage').remove();
      btn('.btn-audio').classList.remove('small');
      elem('.answer').innerHTML = '';
    }
  });
  btns('.start-audiocall').forEach((b) => {
    b.addEventListener('click', () => {
      elem('.game-menu').classList.add('none-view');
      elem('.gameplay-audiocall').classList.remove('none-view');
    });
  });
  elem('.difficultyLevel').addEventListener('click', async (evt: MouseEvent) => {
    const htmlButtonElement = evt.target as HTMLButtonElement;
    const level: number = +htmlButtonElement.innerHTML;
    const wordsPage: IApiGetWords[] = await startAudioCall(level);
    await callGenerator(wordsPage);
  });
}
