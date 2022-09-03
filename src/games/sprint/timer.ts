import { elem } from '../../utils/querySelectors';
import { finish } from './functions';

export default function timer() {
  let seconds = 60;
  function tick() {
    seconds -= 1;
    elem('.timer__seconds').innerHTML = `${(seconds < 10 ? '0' : '')}${String(seconds)}`;
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      finish();
    }
  }
  tick();
}
