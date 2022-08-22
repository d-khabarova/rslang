const base = 'https://react-rslang-be-d-khabarova.herokuapp.com';
const words = `${base}/words`;

interface IGetWords {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  textExampleTranslate: string;
  textMeaningTranslate: string;
  wordTranslate: string;
}

interface IResponseBody {
  words: Array<IGetWords>;
}

const getWords = async (
  group: number,
  page: number,
): Promise<IResponseBody> => {
  const response: Response = await fetch(
    `${words}?group=${group}&page=${page}`,
  );
  const result: Array<IGetWords> = await response.json();
  return {
    words: result,
  };
};
export default getWords;
