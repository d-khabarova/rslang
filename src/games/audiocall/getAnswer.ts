import { IApiGetWords } from '../../types/apiTypes';
import audiocall from './variables/audiocallObjs';

export default function getAnswer(gameWords: IApiGetWords[]) {
  return gameWords[audiocall.gameStep];
}
