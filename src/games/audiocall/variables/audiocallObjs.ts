import { IApiGetWords } from '../../../types/apiTypes';
import IgameWords from '../../../types/audiocallTypes';

interface IObj {
  level: number,
  answer: number,
  gameStep: number,
  mistakesNum: number,
  knownNum: number,
  page: IApiGetWords[],
  gameWords: IgameWords,
}

const audiocall: IObj = {
  level: 0,
  answer: 0,
  gameStep: 0,
  mistakesNum: 0,
  knownNum: 0,
  page: [],
  gameWords: {
    words: [],
    positions: [],
  },
};
export default audiocall;
