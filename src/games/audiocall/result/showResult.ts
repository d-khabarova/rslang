import { getStatistic, audioHandler } from './getStatistic';
import { elem } from '../../../utils/querySelectors';
import audiocall from '../variables/audiocallObjs';

export default async function showResult() {
  const dataGoodStat = await getStatistic(audiocall.goodIds);
  const dataBadStat = await getStatistic(audiocall.badIds);
  elem('.audiocall-mistakes').innerHTML = `${audiocall.mistakesNum}`;
  elem('.audiocall-known').innerHTML = `${audiocall.knownNum}`;
  elem('.good-stat').innerHTML = dataGoodStat;
  elem('.bad-stat').innerHTML = dataBadStat;
  audioHandler();
}
