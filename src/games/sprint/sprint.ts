import API from '../../Api/api';
import { IApiGetWords } from '../../types/apiTypes';
import { pages, getRandomId, getRandomPage } from './randoms';
import { goodAnswer, badAnswer, clearStat } from './functions';
import { elem } from '../../utils/querySelectors';
import { timer, stopTimer } from './timer';

class Sprint {
  api: API;
  ids: Array<string>;
  randomId: string;
  i: number;
  trueTranslate: string;
  randomTranslate: string;
  group: string;
  page: string;
  words!: Array<IApiGetWords>;

  constructor() {
    this.api = new API();
    this.ids = [];
    this.randomId = '';
    this.i = 0;
    this.trueTranslate = '';
    this.randomTranslate = '';
    this.group = '';
    this.page = '';
  }

  async start(e: Event) {
    const target = e.target as Element;
    e.preventDefault();
    document.body.classList.remove('loaded');
    this.group = target.getAttribute('data-level') as string;
    this.page = getRandomPage();
    this.words = await this.api.getWordsSprint(this.group, this.page);
    this.startPlay(this.words);
  }

  async startPlay(words: Array<IApiGetWords>) {
    words.forEach((word) => {
      this.ids.push(word.id);
    });
    this.randomId = getRandomId(this.ids);
    await this.renderCard(this.ids[this.i], this.randomId);
    timer();
  }

  stopPlay() {
    this.ids = [];
    this.i = 0;
    clearStat();
    stopTimer();
  }

  answerHandler(e: Event) {
    let answerType = '';
    if (e instanceof KeyboardEvent) {
      switch (e.code) {
        case 'ArrowRight':
          answerType = 'true';
          elem('#true').classList.add('hover');
          break;
        case 'ArrowLeft':
          answerType = 'false';
          elem('#false').classList.add('hover');
          break;
        default:
          return;
      }
    } else {
      const target = e.target as Element;
      answerType = target.id;
    }
    if (!document.querySelector('.sprint-play.none-view')) {
      this.checkAnswer(answerType);
    }
  }

  async renderCard(id: string, randomId: string) {
    const word: IApiGetWords = await this.api.getWord(id);
    const randomFromTwoId = getRandomId([id, randomId]);
    const randomWord: IApiGetWords = await this.api.getWord(randomFromTwoId);
    this.trueTranslate = word.wordTranslate;
    this.randomTranslate = randomWord.wordTranslate;
    elem('.sprint-play .card').classList.remove('bad_answer', 'good_answer');
    elem('.answer-check').classList.remove('active');
    elem('#true').classList.remove('hover');
    elem('#false').classList.remove('hover');
    elem('.word').textContent = word.word;
    elem('.translate').textContent = this.randomTranslate;
    document.body.classList.add('loaded');
  }

  async checkAnswer(button_id: string) {
    if ((this.trueTranslate === this.randomTranslate && button_id === 'true') || (this.trueTranslate !== this.randomTranslate && button_id === 'false')) {
      goodAnswer(this.ids[this.i]);
    } else {
      badAnswer(this.ids[this.i]);
    }
    if (this.i < this.ids.length - 1) {
      this.i += 1;
    } else {
      pages.push(this.page);
      this.page = getRandomPage();
      this.words = await this.api.getWordsSprint(this.group, this.page);
      this.words.forEach((word) => {
        this.ids.push(word.id);
      });
      this.i += 1;
    }
    this.randomId = getRandomId(this.ids);
    await this.renderCard(this.ids[this.i], this.randomId);
  }
}

export default Sprint;
