import getRandomNumbers from './numbers';
import audiocall from '../variables/audiocallObjs';
import {
  loopStart, loopStep, wordsPerPage, gameWordsNumber,
} from '../variables/consts';

export default function genRandomGameWords() {
  audiocall.gameWords.positions = getRandomNumbers(wordsPerPage);
  audiocall.gameWords.words = [];
  for (let i = loopStart; i < gameWordsNumber; i += loopStep) {
    audiocall.gameWords.words.push(audiocall.page[audiocall.gameWords.positions[i]]);
  }
}
