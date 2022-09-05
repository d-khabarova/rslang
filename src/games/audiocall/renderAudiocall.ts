import './styles/audiocall.scss';
import { elem } from '../../utils/querySelectors';

export default function renderAudiocall() {
  const audiocallSection = `
<section class="audiocall none-view">
  <div class="exit"><button class="btn-exit">x</button></div>
  <div class="game-menu none-view">
    <h2>АУДИОВЫЗОВ</h2>
    <p class="game-usefulness">Тренировка улучшает восприятие речи на слух.</p>
    <p>Уровень cложности:</p>
    <div class="difficultyLevel">
      <button class="start-audiocall">1</button>
      <button class="start-audiocall">2</button>
      <button class="start-audiocall">3</button>
      <button class="start-audiocall">4</button>
      <button class="start-audiocall">5</button>
      <button class="start-audiocall">6</button>
    </div>
  </div>
  <div class="gameplay-audiocall none-view">
    <div class="solution-field">
      <div>
        <button class="btn-audio"></button>
        <p class="answer"></p>
      </div>
    </div>
    <div class="answers-audiocall"></div>
    <button class="next-btn">НЕ ЗНАЮ</button>
  </div>
  <div class="audiocall-result none-view">
    <h2>Ваш результат</h2>
    <div class="good-title">Верно: <span class="audiocall-known">0</span></div>
    <div class="good-stat"></div>
    <div class="bad-title">Неверно: <span class="audiocall-mistakes">0</span></div>
    <div class="bad-stat"></div>
    <div class="exit-btns">
      <button class="continue">Продолжить тренировку</button>
      <button class="to-main">На главную страницу</button>
      <button class="to-textbook none-view">На страницу учебника</button>
    </div>
  </div>
</section>
`;
  const main = elem('body') as HTMLElement;
  main.insertAdjacentHTML('beforeend', audiocallSection);
}
