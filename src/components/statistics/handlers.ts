import { elem, btn } from '../../utils/querySelectors';
import setStatisticsData from './setStatisticsData';

function showStatisticsPage() {
  elem('.header').classList.add('none-view');
  elem('.main').classList.add('none-view');
  elem('#auth_form')?.classList.add('none-view');
  elem('.footer').classList.add('none-view');
  elem('.sprint').classList.add('none-view');
  elem('.statistics-page').classList.remove('none-view');
  setStatisticsData();
}

function hideStatisticsPage() {
  elem('.header').classList.remove('none-view');
  elem('.main').classList.remove('none-view');
  elem('#auth_form')?.classList.remove('none-view');
  elem('.footer').classList.remove('none-view');
  elem('.sprint').classList.remove('none-view');
  elem('.statistics-page').classList.add('none-view');
}

export default function statBtnHandlers() {
  elem('.nav_stat').addEventListener('click', showStatisticsPage);
  btn('.btn-exit-statistics').addEventListener('click', hideStatisticsPage);
}
