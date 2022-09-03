import { elem } from '../../../utils/querySelectors';
import audiocall from '../variables/audiocallObjs';

export default function showResult() {
  elem('.audiocall-mistakes').innerHTML = `${audiocall.mistakesNum}`;
  elem('.audiocall-known').innerHTML = `${audiocall.knownNum}`;
}
