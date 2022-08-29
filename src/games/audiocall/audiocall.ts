import { btn, elem, btns } from '../../utils/creatingElements';
import startAudioCall from './startAudioCall';
import { IApiGetWords } from '../../types/apiTypes';
import callGenerator from './callGenerator';

export default function audioCall(): void {
  let wordsPage: IApiGetWords[];
  btn('.audiocall-card').addEventListener('click', () => {
    elem('.header').classList.add('none-view');
    elem('.main').classList.add('none-view');
    elem('.audiocall').classList.remove('none-view');
  });
  btn('.btn-exit').addEventListener('click', () => {
    elem('.header').classList.remove('none-view');
    elem('.main').classList.remove('none-view');
    elem('.audiocall').classList.add('none-view');
  });
  btns('.start-audiocall').forEach((b) => {
    b.addEventListener('click', () => {
      elem('.game-menu').classList.add('none-view');
      elem('.gameplay-audiocall').classList.remove('none-view');
    });
  });
  elem('.difficultyLevel').addEventListener('click', async (evt: MouseEvent) => {
    const htmlButtonElement = evt.target as HTMLButtonElement;
    wordsPage = await startAudioCall(htmlButtonElement);
    await callGenerator(wordsPage);
  });
}
