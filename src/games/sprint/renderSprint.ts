import './sprint.scss';
import sprintBtnHandlers from './handlers';

export default function renderSprint() {
  const sprintSection = `
<section class="sprint none-view">
  <div class="exit"><button class="btn-exit-sprint">x</button></div>
  <div class="welcome none-view">
    <h2>Спринт</h2>
    <p class="text">В игре необходимо определить соответсвует ли перевод предложенному слову</p>
    <div class="level">
      <p>Выберите уровень:</p>
      <button id="level0" data-level="0">1</button>
      <button id="level1" data-level="1">2</button>
      <button id="level2" data-level="2">3</button>
      <button id="level3" data-level="3">4</button>
      <button id="level4" data-level="4">5</button>
      <button id="level5" data-level="5">6</button>
    </div>    
  </div>
  <div class="sprint-play none-view">
    <div class="timer">
        <div class="timer__seconds">60</div>
    </div>
  <div class="card">
    <div class="score_block">
      <p class="score">0</p>
    </div>
    <div class="indicators">
      <div class="indicator"></div>
      <div class="indicator"></div>
      <div class="indicator"></div>
    </div>
    <div class="counter_score">
      <p>+ <span class="score_plus">10</span> очков за слово</p>
    </div>
    <h3 class="word"></h3>
    <h4 class="translate"></h4>
    <div class="answer-check">🗸</div>
    <div class="buttons-check">
    <button id="false"><span class="arrow">⟵</span> Неверно</button>
    <button id="true">Верно <span class="arrow">⟶</span></button></div>
    </div>    
  </div>
  <div class="stat none-view">
    <h2>Ваш результат: <span class="score_total">0</span> очков</h2>
    <div class="good_title">Верно: <span class="good_count"></span></div>
    <div class="good_stat"></div>
    <div class="bad_title">Неверно: <span class="bad_count"></span></div>
    <div class="bad_stat"></div>
  </div>
</section>
`;
  const main = document.querySelector('body') as HTMLElement;
  main.insertAdjacentHTML('beforeend', sprintSection);
  sprintBtnHandlers();
}
