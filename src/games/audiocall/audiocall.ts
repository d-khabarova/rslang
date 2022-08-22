import { btn, elem } from '../../utils/creatingElements';
import getWords from '../../Api/api';

export default function audioCall(): void {
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
  btn('.start-audiocall').addEventListener('click', () => {
    elem('.game-menu').classList.add('none-view');
    elem('.gameplay-audiocall').classList.remove('none-view');
  });
  btn('.test-btn').addEventListener('click', async () => {
    console.log(await getWords(5, 29));
  });
}
