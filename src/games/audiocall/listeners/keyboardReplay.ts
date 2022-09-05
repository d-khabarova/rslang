import audiocall from '../variables/audiocallObjs';
import { base } from '../../../Api/apiConstants';

export default async function keyboardReplay(keyboardEvt: KeyboardEvent) {
  if (!document.querySelector('.gameplay-audiocall.none-view') && keyboardEvt.code === 'Space') {
    keyboardEvt.preventDefault();
    const wordPron = new Audio(`${base}/${audiocall.gameWords.words[audiocall.gameStep].audio}`);
    await wordPron.play();
  }
}
