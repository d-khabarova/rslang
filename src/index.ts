import './index.scss';
import { renderMainPage } from './main/main';
import Auth from './components/authorization/authorization';
import audioCall from './games/audiocall/audiocall';
import renderSprint from './games/sprint/renderSprint';
import renderStatisticsPage from './components/statistics/renderStatisticsPage';

renderMainPage();
const auth = new Auth();
auth.identification();

audioCall();
renderSprint();
renderStatisticsPage();

window.onload = () => {
  document.body.classList.add('loaded');
};
