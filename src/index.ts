import './index.scss';
import { renderMainPage } from './main/main';
import Auth from './components/authorization/authorization';
import audioCall from './games/audiocall/audiocall';
import renderSprint from './games/sprint/renderSprint';

renderMainPage();
const auth = new Auth();
auth.identification();

audioCall();
renderSprint();
