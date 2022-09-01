import { IApiGetWords } from '../../types/apiTypes';
import IgameWords from '../../types/audiocallTypes';

interface IObj {
  level: number,
  answer: number,
  gameStep: number,
  page: IApiGetWords[] | null,
  gameWords: IgameWords | null,
}

const audiocall: IObj = {
  level: 0,
  answer: 0,
  gameStep: 0,
  page: null,
  gameWords: null,
};
export default audiocall;
