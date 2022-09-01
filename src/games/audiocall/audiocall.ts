import renderAudiocall from './renderAudiocall';
import { btn, elem, btns } from '../../utils/querySelectors';
import startAudioCall from './startAudioCall';
import callGenerator from './callGenerator';
import keyboardLevel from './keyboardEvents/keyboardLevel';
import keyboardAnswer from './keyboardEvents/keyboardAnswer';
import keyboardEnter from './keyboardEvents/keyboardEnter';
import openMenu from './audiocallMenuOpen';
import exit from './audiocallExit';
import audiocall from './audiocallObjs';

export default function audioCall(): void {
  renderAudiocall();
  document.addEventListener('keydown', keyboardLevel);
  document.addEventListener('keydown', keyboardAnswer);
  document.addEventListener('keydown', keyboardEnter);
  btn('.nav_audiocall').addEventListener('click', openMenu);
  btn('.card_audiocall').addEventListener('click', openMenu);
  btn('.btn-exit').addEventListener('click', exit);
  btns('.start-audiocall').forEach((b) => {
    b.addEventListener('click', async (evt: MouseEvent) => {
      const htmlButtonElement = evt.target as HTMLButtonElement;
      const level: number = +htmlButtonElement.innerHTML;
      audiocall.page = await startAudioCall(level);
      await callGenerator();
      elem('.game-menu').classList.add('none-view');
      elem('.gameplay-audiocall').classList.remove('none-view');
    });
  });
}
