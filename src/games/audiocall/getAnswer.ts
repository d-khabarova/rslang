import { IApiGetWords } from '../../types/apiTypes';
import audiocall from './audiocallObjs';

export default function getAnswer(gameWords: IApiGetWords[]) {
  return gameWords[audiocall.gameStep];
}
