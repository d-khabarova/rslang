// import audiocall from '../audiocallObjs';

export default function keyboardEnter(keyboardEvt: KeyboardEvent) {
  if (keyboardEvt.key === 'Enter') {
    console.log(keyboardEvt.key);
  }
}
