import renderStatisticsPage from './components/statistics/renderStatisticsPage';
import audioCall from './games/audiocall/audiocall';
import renderSprint from './games/sprint/renderSprint';
import { renderMainPage } from './main/main';
import { renderTextbookPage } from './textbook/textbook';
import Auth from './components/authorization/authorization';

export default async function listenPage() {
  const textBook1 = document.querySelector('.nav_textbook') as HTMLElement;
  const textBook2 = document.querySelector('.card_textbook') as HTMLElement;
  const mainPage = document.querySelector('.nav_main') as HTMLElement;
  [textBook1, textBook2].forEach((item) => {
    item.addEventListener('click', () => {
      renderTextbookPage();
      textBook1.classList.add('active');
      mainPage.classList.remove('active');
    });
  });
  mainPage.addEventListener('click', () => {
    renderMainPage();
    const auth = new Auth();
    auth.identification();
    audioCall();
    renderSprint();
    listenPage();
    renderStatisticsPage();
  });
}
