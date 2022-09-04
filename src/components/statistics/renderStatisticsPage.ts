import './statistics.scss';
import statBtnHandlers from './handlers';

export default function renderStatisticsPage() {
  const statisticsPage = `<section class="statistics-page none-view">
    <div class="exit"><button class="btn-exit-statistics">x</button></div>
    <h1>Статистика за день</h1>
    <h3>Спринт</h3>
    <div>Количество изученных слов: <span class="count-words">0</span></div>
    <div>Процент правильных ответов: <span class="percent-sprint">0</span>%</div>
    <div>Лучшая серия: <span class="best-chain-sprint">0</span></div>
  </section>`;
  const main = document.querySelector('body') as HTMLElement;
  main.insertAdjacentHTML('beforeend', statisticsPage);
  statBtnHandlers();
}
