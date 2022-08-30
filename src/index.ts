import './index.scss';
import { renderMainPage } from './main/main';
import App from './app';
import audioCall from './games/audiocall/audiocall';

renderMainPage();

const api = new App();
api.start();

audioCall();
