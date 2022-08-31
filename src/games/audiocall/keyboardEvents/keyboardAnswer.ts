import audiocall from '../audiocallObjs';

async function launchFromKeyboard(level: number) {
  if (level > 0 && level < 6) {
    console.log(audiocall.answer);
  }
}

export default function keyboardAnswer(keyboardEvt: KeyboardEvent) {
  if (!document.querySelector('.gameplay-audiocall.none-view')) {
    audiocall.answer = +keyboardEvt.key;
    launchFromKeyboard(audiocall.answer);
  }
}
