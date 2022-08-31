import API from '../../Api/api';
import { ApiGetWords } from '../../types/apiTypes';
import {
  wordBlock, translateBlock, renderWelcomeText, renderBlockCard,
} from './renderBlocks';
import {
  getRandomId, goodAnswer, badAnswer, finish,
} from './functions';

class Sprint {
  api: API;
  ids: Array<string>;
  randomId: string;
  i: number;
  trueTranslate: string;
  randomTranslate: string;
  group: string;
  page: string;
  words!: Array<ApiGetWords>;
  pages: Array<string>;

  constructor() {
    this.api = new API();
    this.ids = [];
    this.randomId = '';
    this.i = 0;
    this.trueTranslate = '';
    this.randomTranslate = '';
    this.group = '';
    this.page = '';
    this.pages = [];
  }

  start() {
    renderWelcomeText();
    const buttons = document.querySelectorAll('.level button');
    buttons.forEach((button) => {
      button.addEventListener('click', async (e) => {
        e.preventDefault();
        this.group = button.getAttribute('data-level') as string;
        this.page = this.getRandomPage();
        this.words = await this.api.getWords(this.group, this.page);
        this.startPlay(this.words);
      });
    });
  }

  getRandomPage() {
    const page = Math.floor(Math.random() * 30).toString();
    if (this.pages.includes(page)) {
      this.getRandomPage();
    }
    return page;
  }

  startPlay(words: Array<ApiGetWords>) {
    renderBlockCard();
    words.forEach((word) => {
      this.ids.push(word.id);
    });
    this.randomId = getRandomId(this.ids);

    this.renderCard(this.ids[this.i], this.randomId);
    const buttons = document.querySelectorAll('.card button');
    buttons.forEach((button) => {
      button.addEventListener('click', this.clickHandler.bind(this));
    });
  }

  clickHandler(e: Event) {
    const target = e.target as Element;
    this.checkAnswer(target.id);
  }

  async renderCard(id: string, randomId: string) {
    const word: ApiGetWords = await this.api.getWord(id);
    const randomFromTwoId = getRandomId([id, randomId]);
    const randomWord: ApiGetWords = await this.api.getWord(randomFromTwoId);
    this.trueTranslate = word.wordTranslate;
    this.randomTranslate = randomWord.wordTranslate;
    wordBlock.textContent = word.word;
    translateBlock.textContent = this.randomTranslate;
  }

  async checkAnswer(button_id: string) {
    if ((this.trueTranslate === this.randomTranslate && button_id === 'true') || (this.trueTranslate !== this.randomTranslate && button_id === 'false')) {
      goodAnswer(this.ids[this.i]);
    } else {
      badAnswer(this.ids[this.i]);
    }
    //  if (this.i <= this.ids.length - 2) {
    if (this.i <= 7) {
      this.i += 1;
    } else {
      finish();
      /*  this.pages.push(this.page);
      this.page = this.getRandomPage();
      this.words = await this.api.getWords(this.group, this.page);
      this.words.forEach((word) => {
        this.ids.push(word.id);
      }); */
    }
    this.randomId = getRandomId(this.ids);
    await this.renderCard(this.ids[this.i], this.randomId);
  }
}

export default Sprint;
