import { IApiGetWords } from '../../types/apiTypes';

export default function getAnswer(gameWords: IApiGetWords[], step: number) {
  return gameWords[step];
}
