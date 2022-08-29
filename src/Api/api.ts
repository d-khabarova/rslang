import { words } from './apiConstants';
import { IApiGetWords, IResponseWordsBody } from '../types/apiTypes';

const getWords = async (group: number, page: number): Promise<IResponseWordsBody> => {
  const response: Response = await fetch(`${words}?group=${group}&page=${page}`);
  const result: Array<IApiGetWords> = await response.json();
  return {
    wordsPage: result,
  };
};
export default getWords;
