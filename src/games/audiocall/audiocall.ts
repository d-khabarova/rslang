import renderAudiocall from './renderAudiocall';
import { btn, elem, btns } from '../../utils/querySelectors';
import setLevel from './setLevel';
import callGenerator from './callGenerator';
import keyboardLevel from './listeners/keyboardLevel';
import keyboardAnswer from './listeners/keyboardAnswer';
import keyboardEnter from './listeners/keyboardEnter';
import keyboardReplay from './listeners/keyboardReplay';
import openMenu from './audiocallMenuOpen';
import exit from './audiocallExit';
import audiocall from './variables/audiocallObjs';
import leaveResult from './result/leaveResult';

export default function audioCall(): void {
  renderAudiocall();
  document.addEventListener('keydown', keyboardLevel);
  document.addEventListener('keydown', keyboardAnswer);
  document.addEventListener('keydown', keyboardEnter);
  document.addEventListener('keydown', keyboardReplay);
  leaveResult();
  btn('.nav_audiocall').addEventListener('click', openMenu);
  elem('.card_audiocall').addEventListener('click', openMenu);
  btn('.btn-exit').addEventListener('click', exit);
  btns('.start-audiocall').forEach((b) => {
    b.addEventListener('click', async (evt: MouseEvent) => {
      const htmlButtonElement = evt.target as HTMLButtonElement;
      const level: number = +htmlButtonElement.innerHTML;
      audiocall.page = await setLevel(level);
      elem('.game-menu').classList.add('none-view');
      elem('.gameplay-audiocall').classList.remove('none-view');
      await callGenerator();
    });
  });
}
