import './index.scss';
import { renderMainPage } from './main/main';
import App from './app';

renderMainPage();

const api = new App();
api.start();
