import './main.scss';

export function renderMainPage() {
  const mainPage = `
  <header class="header" id="header">
    <nav class="menu">
      <ul class="nav_list">
        <li class="nav_item"><a href="#" class="nav_link active">Главная</a></li>
        <li class="nav_item"><a href="#" class="nav_link nav_textbook">Учебник</a></li>
        <li class="nav_item"><a href="#" class="nav_link">Аудиовызов</a></li>
        <li class="nav_item"><a href="#" class="nav_link">Спринт</a></li>
        <li class="nav_item"><a href="#" class="nav_link">Статистика</a></li>
        <li class="nav_item"><a href="#" class="nav_link">Авторизация</a></li>
      </ul>
    </nav>
    <div class="burger" id="burger">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
  </header>
  <main class="main">
    <section class="greeting">
      <h1>Учи английский легко!</h1>
      <img src="./assets/e-learning.png" alt="e-learning">
    </section>
    <section class="benefits">
      <h2 class="title">Возможности и преимущества</h2>
      <div class="benefits__cards">
        <div class="benefit__card">
          <img src="./assets/child9.png" alt="child1">
          <p class="benefit__card-title">Учебник</p>
          <button class="button">Попробовать</button>
        </div>
        <div class="benefit__card">
          <img src="./assets/child7.png" alt="child2">
          <p class="benefit__card-title">Мини-игры</p>
          <button class="button">Попробовать</button>
        </div>
        <div class="benefit__card">
          <img src="./assets/child6.png" alt="child3">
          <p class="benefit__card-title">Статистика</p>
          <button class="button">Попробовать</button>
        </div>
      </div>
    </section>
    <section class="about-us">
      <h2 class="title">О команде разработчиков</h2>
      <div class="developer-container">
        <div class="developer__card">
          <img class="developer__img" src="https://avatars.githubusercontent.com/u/11944139?v=4" alt="Dasha">
          <div class="developer__disc">
            <h3 class="developer__name">Даша <a href="https://github.com/d-khabarova"><i class="fab fa-github"></i></a></h3>
            <p>Описание выполненной работы</p>
          </div>
        </div>
        <div class="developer__card">
          <img class="developer__img" src="https://avatars.githubusercontent.com/u/83439578?v=4" alt="Yura">
          <div class="developer__disc">
            <h3 class="developer__name">Юра <a href="https://github.com/Manofsky"><i class="fab fa-github"></i></a></h3>
            <p>Описание выполненной работы</p>
          </div>
        </div>
        <div class="developer__card">
          <img class="developer__img" src="https://avatars.githubusercontent.com/u/89844910?v=4" alt="Lena">
          <div class="developer__disc">
            <h3 class="developer__name">Лена <a href="https://github.com/ElenaSchem"><i class="fab fa-github"></i></a></h3>
            <p>Описание выполненной работы</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div>&#169;2022</div>
    <a href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-2/rs-lang/rslang.md" target="_blank">RS Lang</a>
    <ul>
      <li><a href="https://github.com/d-khabarova" target="_blank">d-khabarova</a></li>
      <li><a href="https://github.com/Manofsky" target="_blank">Manofsky</a></li>
      <li><a href="https://github.com/ElenaSchem" target="_blank">ElenaSchem</a></li>
    </ul>
    <a href="https://rs.school/js/" target="_blank">
      <img src="./assets/rs_school_js.svg" alt="rsSchool" width="60">
    </a>
  </footer>
  `;

  const body = document.querySelector('body') as HTMLElement;
  body.innerHTML = mainPage;

  const burger = document.querySelector('.burger') as HTMLElement;
  const menu = document.querySelector('.menu') as HTMLElement;

  function toggleMenu() {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  }
  burger.addEventListener('click', toggleMenu);
  menu.addEventListener('click', toggleMenu);

  function closeMenu(event: Event) {
    const target = event.target as HTMLTemplateElement;
    if (target.classList.contains('nav_link')) {
      burger.classList.remove('open');
      menu.classList.remove('open');
    }
  }
  menu.addEventListener('click', closeMenu);
}

export default renderMainPage;
