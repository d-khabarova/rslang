import API from '../../Api/api';
import { ApiGetWords } from '../../types/apiTypes';
import { renderWelcomeText, getRandomId, renderCard } from './functions';

class Sprint {
  api: API;
  ids: Array<string>;

  constructor() {
    this.api = new API();
    this.ids = [];
  }

  start() {
    renderWelcomeText();
    const buttons = document.querySelectorAll('.level button');
    buttons.forEach((button) => {
      button.addEventListener('click', async (e) => {
        e.preventDefault();
        const group = button.getAttribute('data-level') as string;
        const page = Math.floor(Math.random() * 30).toString();
        const words = await this.api.getWords(group, page);
        console.log(words);
        this.startPlay(words);
      });
    });
  }

  startPlay(words: Array<ApiGetWords>) {
    let randomId = '';
    words.forEach((word) => {
      this.ids.push(word.id);
    });
    randomId = getRandomId(this.ids);
    renderCard(this.ids[0], randomId);
  }
}

export default Sprint;
