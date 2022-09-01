/* eslint-disable @typescript-eslint/no-use-before-define */
import { WordContent } from '../types/apiTypes';
import API from '../Api/api';
import './textbook.scss';

const base = 'https://react-rslang-be-d-khabarova.herokuapp.com';
const api = new API();
const maxPage = 29;

type TextbookState = {
  group: number;
  page: number;
};

let textbookState: TextbookState = {
  group: 0,
  page: 0,
};
if (localStorage.getItem('textbook')) {
  const writeState: string = localStorage.getItem('textbook') || '';
  textbookState = JSON.parse(writeState);
}

function createWordItem(words: WordContent[]) {
  let wordCard = '';
  words.forEach((word: WordContent) => {
    wordCard += `
    <div class="wordItem" data-id="${word.id}">
      <div class="wordItem__image" style="background-image: url('${base}/${word.image}');"></div>
      <div class="wordItem__header">
        <span class="wordItem__word">${word.word}</span>
        -
        <span class="wordItem__word-transcription">${word.transcription}</span>
        -
        <span class="wordItem__word-translate">${word.wordTranslate}</span>
        <img class="wordItem__sound-image" src="./assets/volumeUp.svg" alt="volumeUp">
      </div>
      <div class="wordItem__explanation">${word.textMeaning}</div>
      <div class="wordItem__explanation-translate">${word.textMeaningTranslate}</div>
      <div class="wordItem__example">${word.textExample}</div>
      <div class="wordItem__example-translate">${word.textExampleTranslate}</div>
    </div>
    `;
  });
  return wordCard;
}

function createTextbookPage() {
  const main = document.querySelector('.main') as HTMLElement;
  main.innerHTML = '';
  const content = `
  <div class="textbook__pages"></div>
  <div class="wrapper">
    <div class="textbook__controls">
      <select class="textbook__select" name="group">
        <option value="0">Раздел 1</option>
        <option value="1">Раздел 2</option>
        <option value="2">Раздел 3</option>
        <option value="3">Раздел 4</option>
        <option value="4">Раздел 5</option>
        <option value="5">Раздел 6</option>
      </select>
      <div class="page-nav">
        <div class="prev-page"></div>
        <div class="page-num">${textbookState.page + 1}</div>
        <div class="next-page"></div>
      </div>
    </div>
    <div class="textbook__controls">
      <button class="sprint-btn">Спринт</button>
      <button class="audioCall-btn">Аудиовызов</button>
    </div>
  </div>
  <div class="textbook__page"></div>
  <a class="top-btn" href="#">TOP</a>
  </div>
  `;
  main.innerHTML = content;
}

function playAudioWord(words: WordContent[], card: HTMLElement) {
  const id: string = card.dataset.id as string;
  const word: WordContent = words.find((wordId: WordContent) => wordId.id === id) as WordContent;
  const wordAudio = document.createElement('audio');
  wordAudio.src = `${base}/${word.audio}`;
  const wordMeaning = document.createElement('audio');
  wordMeaning.src = `${base}/${word.audioMeaning}`;
  const wordExample = document.createElement('audio');
  wordExample.src = `${base}/${word.audioExample}`;

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
}

async function renderWordItem(): Promise<void> {
  const textbookPage = document.querySelector('.textbook__page') as HTMLElement;
  textbookPage.innerHTML = '';
  let words: WordContent[] = [];
  words = await api.getWords(textbookState.group, textbookState.page);
  textbookPage.innerHTML = createWordItem(words);

  const wordItem = document.querySelectorAll('.wordItem') as NodeListOf<HTMLElement>;
  wordItem.forEach((card: HTMLElement) => {
    const sound = card.querySelector('.wordItem__sound-image') as HTMLElement;
    sound.addEventListener(('click'), () => {
      playAudioWord(words as WordContent[], card);
    });
  });

  if (textbookState.group === 6) {
    const nav = document.querySelector('.page-nav') as HTMLElement;
    nav.style.opacity = '0';
  }
  localStorage.setItem('textbook', JSON.stringify(textbookState));
}

function toPrevPage() {
  textbookState.page -= 1;
  renderWordItem();
}

function toNextPage() {
  textbookState.page += 1;
  renderWordItem();
}

function toGroup(groupInput: HTMLSelectElement) {
  textbookState.group = +groupInput.value;
  renderWordItem();
}

export async function renderTextbookPage() {
  createTextbookPage();
  renderWordItem();

  const groupInput = document.querySelector('.textbook__select[name="group"]') as HTMLSelectElement;
  groupInput.addEventListener('input', () => {
    textbookState.page = 0;
    toGroup(groupInput);
  });

  const prevBtn = document.querySelector('.prev-page') as HTMLElement;
  const nextBtn = document.querySelector('.next-page') as HTMLElement;
  if (textbookState.page === 0) prevBtn.classList.add('disable');
  if (textbookState.page === maxPage) nextBtn.classList.add('disable');
  if (!prevBtn.classList.contains('disable')) prevBtn.addEventListener('click', toPrevPage);
  if (!nextBtn.classList.contains('disable')) nextBtn.addEventListener('click', toNextPage);

  // const sprintBtn = document.querySelector('.sprint-btn') as HTMLElement;
  // sprintBtn.addEventListener('click', startGame);
  // const audioCall = document.querySelector('.audioCall-btn') as HTMLElement;
  // audioCall.addEventListener('click', startGame);
}

export default renderTextbookPage;
