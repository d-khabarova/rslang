import { elem, btn, btns } from '../../utils/querySelectors';
import Sprint from './sprint';

const sprint = new Sprint();

function showSprintPlay(e: Event) {
  elem('.welcome').classList.add('none-view');
  elem('.sprint-play').classList.remove('none-view');
  sprint.start(e);
}

function showSprint() {
  elem('.header').classList.add('none-view');
  elem('.main').classList.add('none-view');
  elem('#auth_form').classList.add('none-view');
  elem('.footer').classList.add('none-view');
  elem('.sprint-play').classList.add('none-view');
  elem('.stat').classList.add('none-view');
  elem('.sprint').classList.remove('none-view');
  elem('.welcome').classList.remove('none-view');
  btns('.level button').forEach((button) => {
    button.addEventListener('click', showSprintPlay);
  });
}

function hideSprint() {
  elem('.header').classList.remove('none-view');
  elem('.main').classList.remove('none-view');
  elem('#auth_form').classList.remove('none-view');
  elem('.footer').classList.remove('none-view');
  elem('.sprint').classList.add('none-view');
  elem('.word').innerHTML = '';
  elem('.translate').innerHTML = '';
  elem('.score').innerHTML = '0';
  elem('.counter').innerHTML = '10';
  elem('.good_count').innerHTML = '';
  elem('.bad_count').innerHTML = '';
  elem('.good_stat').innerHTML = '';
  elem('.bad_stat').innerHTML = '';
}

export default function sprintBtnHandlers() {
  btn('.nav_sprint').addEventListener('click', showSprint);
  elem('.card-sprint').addEventListener('click', showSprint);
  btn('#true').addEventListener('click', sprint.answerHandler.bind(sprint));
  btn('#false').addEventListener('click', sprint.answerHandler.bind(sprint));
  btn('.btn-exit-sprint').addEventListener('click', hideSprint);
}
