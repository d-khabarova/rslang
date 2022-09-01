import './index.scss';
import { renderMainPage } from './main/main';
import App from './app';
import audioCall from './games/audiocall/audiocall';
import renderSprint from './games/sprint/renderSprint';

renderMainPage();
renderSprint();
const app = new App();
app.start();

audioCall();
