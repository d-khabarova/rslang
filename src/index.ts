import './index.scss';
import { renderMainPage } from './main/main';
import App from './app';
import audioCall from './games/audiocall/audiocall';

renderMainPage();

const app = new App();
app.start();

audioCall();
