import API from '../../Api/api';
import audiocall from './variables/audiocallObjs';
import { elem, btn } from '../../utils/querySelectors';
import callGenerator from './callGenerator';

const api = new API();

export default async function startAudiocall() {
  document.body.classList.remove('loaded');
  const state = localStorage.getItem('textbook');
  if (state !== null) {
    const textbookState = JSON.parse(state);
    const { group } = textbookState;
    const { page } = textbookState;
    const { wordsPage } = await api.getWords(group, page);
    audiocall.page = wordsPage;
  }
  elem('.header').classList.add('none-view');
  elem('.main').classList.add('none-view');
  elem('.footer').classList.add('none-view');
  elem('#auth_form')?.classList.add('none-view');
  elem('.audiocall').classList.remove('none-view');
  elem('.gameplay-audiocall').classList.remove('none-view');
  btn('.to-textbook').classList.remove('none-view');
  btn('.to-main').classList.add('none-view');
  await callGenerator();
}
