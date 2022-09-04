import renderStatisticsPage from './components/statistics/renderStatisticsPage';
import audioCall from './games/audiocall/audiocall';
import renderSprint from './games/sprint/renderSprint';
import { renderMainPage } from './main/main';
import { renderTextbookPage } from './textbook/textbook';
import Auth from './components/authorization/authorization';

export default async function listenPage() {
  const textBook = document.querySelector('.nav_textbook') as HTMLElement;
  const mainPage = document.querySelector('.nav_main') as HTMLElement;
  textBook.addEventListener('click', () => {
    renderTextbookPage();
    textBook.classList.add('active');
    mainPage.classList.remove('active');
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
