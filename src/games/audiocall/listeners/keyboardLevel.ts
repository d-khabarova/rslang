import audiocall from '../variables/audiocallObjs';
import setLevel from '../setLevel';
import callGenerator from '../callGenerator';
import { elem } from '../../../utils/querySelectors';

async function launchFromKeyboard(level: number) {
  if (level > 0 && level < 7) {
    audiocall.page = await setLevel(level);
    await callGenerator();
    elem('.game-menu').classList.add('none-view');
    elem('.gameplay-audiocall').classList.remove('none-view');
  }
}

export default function keyboardLevel(keyboardEvt: KeyboardEvent) {
  if (!document.querySelector('.game-menu.none-view')) {
    audiocall.level = +keyboardEvt.key;
    launchFromKeyboard(audiocall.level);
  }
}
