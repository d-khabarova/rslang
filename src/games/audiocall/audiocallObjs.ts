import { IApiGetWords } from '../../types/apiTypes';
import IgameWords from '../../types/audiocallTypes';
import { page, gameWords } from './consts';

interface IObj {
  level: number,
  answer: number,
  gameStep: number,
  page: IApiGetWords[],
  gameWords: IgameWords,
}

const audiocall: IObj = {
  level: 0,
  answer: 0,
  gameStep: 0,
  page,
  gameWords,
};
export default audiocall;
