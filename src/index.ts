import './index.scss';
import { renderMainPage } from './main/main';
import App from './app';

renderMainPage();

const app = new App();
app.start();
