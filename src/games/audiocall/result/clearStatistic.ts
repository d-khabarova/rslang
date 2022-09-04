import audiocall from '../variables/audiocallObjs';
import { elem } from '../../../utils/querySelectors';

export default function clearStat() {
  audiocall.gameStep = 0;
  audiocall.knownNum = 0;
  audiocall.badIds = [];
  audiocall.goodIds = [];
  audiocall.mistakesNum = 0;
  elem('.good-stat').innerHTML = '';
  elem('.bad-stat').innerHTML = '';
  elem('.audiocall-result').classList.add('none-view');
  elem('.exit').classList.remove('none-view');
}
