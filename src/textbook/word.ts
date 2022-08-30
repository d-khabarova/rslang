import { WordContent } from '../types/apiTypes';

const base = 'https://react-rslang-be-d-khabarova.herokuapp.com';

export default class WordItem {
  innerWordItem = `
  <div class="wordItem__image"></div>
    <div class="wordItem__header">
      <span class="wordItem__word"></span>
      -
      <span class="wordItem__word-transcription"></span>
      -
      <span class="wordItem__word-translate"></span>
      <img class="wordItem__sound-image" src="./assets/volumeUp.svg" alt="volumeUp">
    </div>
    <div class="wordItem__explanation"></div>
    <div class="wordItem__explanation-translate"></div>
    <div class="wordItem__example"></div>
    <div class="wordItem__example-translate"></div>
  </div>
  `;

  getNewWordItem() {
    const wordItemElement = document.createElement('div');
    wordItemElement.innerHTML = this.innerWordItem;
    wordItemElement.classList.add('wordItem');
    return wordItemElement;
  }

  static createWordItem(wordItemElement: HTMLElement, wordContent: WordContent) {
    const image = wordItemElement.querySelector('.wordItem__image') as HTMLElement;
    const sound = wordItemElement.querySelector('.wordItem__sound-image') as HTMLElement;
    const word = wordItemElement.querySelector('.wordItem__word') as HTMLElement;
    const transcription = wordItemElement.querySelector('.wordItem__word-transcription') as HTMLElement;
    const translate = wordItemElement.querySelector('.wordItem__word-translate') as HTMLElement;
    const explanation = wordItemElement.querySelector('.wordItem__explanation') as HTMLElement;
    const explanationTranslate = wordItemElement.querySelector('.wordItem__explanation-translate') as HTMLElement;
    const example = wordItemElement.querySelector('.wordItem__example') as HTMLElement;
    const exampleTranslate = wordItemElement.querySelector('.wordItem__example-translate') as HTMLElement;

    image.style.backgroundImage = `url("${base}/${wordContent.image}")`;
    sound.addEventListener('click', () => {
      const audio = document.querySelector('.textbook__audio') as HTMLDivElement;
      audio.innerHTML = '';
      const wordAudio = document.createElement('audio');
      wordAudio.src = `${base}/${wordContent.audio}`;
      const wordMeaning = document.createElement('audio');
      wordMeaning.src = `${base}/${wordContent.audioMeaning}`;
      const wordExample = document.createElement('audio');
      wordExample.src = `${base}/${wordContent.audioExample}`;
      audio.append(wordAudio, wordMeaning, wordExample);

      let isPlay = false;
      function playAudio(audioWord: HTMLAudioElement) {
        if (!isPlay) {
          audioWord.play();
          isPlay = true;
        } else {
          audioWord.pause();
          isPlay = false;
        }
      }

      playAudio(wordAudio);
      wordAudio.onended = () => {
        playAudio(wordMeaning);
        wordMeaning.onended = () => {
          playAudio(wordExample);
        };
      };
    });

    word.textContent = wordContent.word;
    transcription.textContent = wordContent.transcription;
    translate.textContent = wordContent.wordTranslate;
    explanation.innerHTML = wordContent.textMeaning;
    explanationTranslate.textContent = wordContent.textMeaningTranslate;

    example.innerHTML = wordContent.textExample;
    exampleTranslate.textContent = wordContent.textExampleTranslate;
  }
}
