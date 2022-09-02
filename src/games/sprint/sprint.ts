import API from '../../Api/api';
import { ApiGetWords } from '../../types/apiTypes';
import {
  getRandomId, goodAnswer, badAnswer, finish, clearStat,
} from './functions';
import { elem } from '../../utils/querySelectors';

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

  async start(e: Event) {
    const target = e.target as Element;
    e.preventDefault();
    this.group = target.getAttribute('data-level') as string;
    this.page = this.getRandomPage();
    this.words = await this.api.getWordsSprint(this.group, this.page);
    this.startPlay(this.words);
  }

  getRandomPage() {
    const page = Math.floor(Math.random() * 30).toString();
    if (this.pages.includes(page)) {
      this.getRandomPage();
    }
    return page;
  }

  startPlay(words: Array<ApiGetWords>) {
    words.forEach((word) => {
      this.ids.push(word.id);
    });
    this.randomId = getRandomId(this.ids);
    this.renderCard(this.ids[this.i], this.randomId);
  }

  stopPlay() {
    this.ids = [];
    this.i = 0;
    clearStat();
  }

  answerHandler(e: Event) {
    let answerType = '';
    if (e instanceof KeyboardEvent) {
      switch (e.code) {
        case 'ArrowRight':
          answerType = 'true';
          break;
        case 'ArrowLeft':
          answerType = 'false';
          break;
        default:
          return;
      }
    } else {
      const target = e.target as Element;
      answerType = target.id;
    }
    this.checkAnswer(answerType);
  }

  async renderCard(id: string, randomId: string) {
    const word: ApiGetWords = await this.api.getWord(id);
    const randomFromTwoId = getRandomId([id, randomId]);
    const randomWord: ApiGetWords = await this.api.getWord(randomFromTwoId);
    this.trueTranslate = word.wordTranslate;
    this.randomTranslate = randomWord.wordTranslate;
    elem('.sprint-play .card').classList.remove('bad_answer', 'good_answer');
    elem('.word').textContent = word.word;
    elem('.translate').textContent = this.randomTranslate;
  }

  async checkAnswer(button_id: string) {
    if ((this.trueTranslate === this.randomTranslate && button_id === 'true') || (this.trueTranslate !== this.randomTranslate && button_id === 'false')) {
      goodAnswer(this.ids[this.i]);
    } else {
      badAnswer(this.ids[this.i]);
    }
    //  if (this.i <= this.ids.length - 2) {
    if (this.i <= 10) {
      this.i += 1;
    } else {
      finish();
      this.i = 0;
      return;
      this.pages.push(this.page);
      this.page = this.getRandomPage();
      this.words = await this.api.getWordsSprint(this.group, this.page);
      this.words.forEach((word) => {
        this.ids.push(word.id);
      });
    }
    this.randomId = getRandomId(this.ids);
    await this.renderCard(this.ids[this.i], this.randomId);
  }
}

export default Sprint;
