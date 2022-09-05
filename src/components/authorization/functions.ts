import { elementCreator, inputCreator, buttonCreator } from '../../utils/elementsCreator';

const modalAuth = elementCreator('div', 'modal,auth_modal');
const shading = elementCreator('div', 'shading');
const authForm = document.createElement('form');
const inputMail = inputCreator('email', 'E-mail');
const inputPass = inputCreator('password', 'Пароль');
const btnLogin = buttonCreator('login', 'Войти');
const btnRegistration = buttonCreator('registration', 'Регистрация');
const errMsg = elementCreator('div', 'error,hidden');
const requiredLength = 8;
authForm.setAttribute('id', 'auth_form');
authForm.appendChild(inputMail);
authForm.appendChild(inputPass);
authForm.appendChild(btnLogin);
authForm.appendChild(btnRegistration);
authForm.appendChild(errMsg);

export function showHiddenSections() {
  const sections = document.querySelectorAll('.for_auth_user');
  sections.forEach((section) => {
    section.classList.remove('hidden');
  });
}

export function hideSections() {
  const sections = document.querySelectorAll('.for_auth_user');
  sections.forEach((section) => {
    section.classList.add('hidden');
  });
}

export function renderAuth() {
  document.querySelector('body')?.appendChild(shading);
  document.querySelector('body')?.appendChild(modalAuth);
  modalAuth.appendChild(authForm);
  modalAuth.classList.add('hidden');
  hideSections();
}

export function logOut() {
  const buttonOut = document.querySelector('.logout') as HTMLElement;
  const buttonAuth = document.querySelector('.auth_btn') as HTMLElement;
  buttonOut.addEventListener('click', () => {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('message');
    renderAuth();
    inputMail.value = '';
    inputPass.value = '';
    buttonAuth.classList.remove('hidden');
  });
}

export function renderLogOutBnt() {
  const buttonOut = document.querySelector('.logout') as HTMLElement;
  const buttonAuth = document.querySelector('.auth_btn') as HTMLElement;
  buttonOut.classList.remove('hidden');
  modalAuth.classList.add('hidden');
  shading.classList.remove('visible');
  buttonAuth.classList.add('hidden');
  showHiddenSections();
  logOut();
}

export function setErrorMessage(message: string) {
  errMsg?.classList.remove('hidden');
  errMsg.innerText = message;
}

export function validateEmail(email: string) {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;//  regexp from https://denis-creative.com/validatsiya-email-s-pomoshhyu-javascript/
  if (reg.test(email) === false) {
    const msg = 'Введите корректный e-mail';
    setErrorMessage(msg);
    return false;
  }
  errMsg?.classList.add('hidden');
  errMsg.innerText = '';
  return true;
}

export function validatePassword(pass: string) {
  if (pass.length < requiredLength) {
    const msg = `Пароль должен быть не меньше ${requiredLength} символов`;
    setErrorMessage(msg);
    return false;
  }
  errMsg?.classList.add('hidden');
  errMsg.innerText = '';
  return true;
}

export function authBtnHandler() {
  document.querySelector('.auth_btn')?.addEventListener('click', () => {
    shading.classList.add('visible');
    modalAuth.classList.remove('hidden');
  });
}

export function hideModal() {
  document.querySelector('.shading')?.addEventListener('click', (e) => {
    const target = e.target as Element;
    modalAuth.classList.add('hidden');
    target.classList.remove('visible');
  });
}
