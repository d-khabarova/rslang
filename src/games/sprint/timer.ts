import { elem } from '../../utils/querySelectors';
import { finish } from './functions';

let session: ReturnType<typeof setTimeout>;

export function timer() {
  let seconds = 60;
  function tick() {
    seconds -= 1;
    elem('.timer__seconds').innerHTML = `${(seconds < 10 ? '0' : '')}${String(seconds)}`;
    if (seconds > 0) {
      session = setTimeout(tick, 1000);
    } else {
      finish();
    }
  }
  tick();
}

export function stopTimer() {
  clearTimeout(session);
}
