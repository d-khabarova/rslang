import './index.scss';
import { renderMainPage } from './main/main';
import App from './app';
import listenPage from './listen';

renderMainPage();

const api = new App();
api.start();
listenPage();
