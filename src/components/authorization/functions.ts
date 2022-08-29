import { elementCreator, inputCreator, buttonCreator } from '../../utils/elementsCreator';

const modalAuth = elementCreator('div', 'modal,auth_modal');
const authForm = document.createElement('form');
authForm.setAttribute('id', 'auth_form');
const inputMail = inputCreator('email', 'E-mail');
const inputPass = inputCreator('password', 'Пароль');
const btnLogin = buttonCreator('login', 'Войти');
const btnRegistration = buttonCreator('registration', 'Регистрация');
const errMsg = elementCreator('div', 'error,hidden');
authForm.appendChild(inputMail);
authForm.appendChild(inputPass);
authForm.appendChild(btnLogin);
authForm.appendChild(btnRegistration);
authForm.appendChild(errMsg);
const buttonOut = buttonCreator('logout', 'Выйти');
const requiredLength = 8;

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
  document.querySelector('body')?.appendChild(modalAuth);
  modalAuth.appendChild(authForm);
  modalAuth.classList.add('hidden');
  authForm.classList.remove('hidden');
  buttonOut.classList.add('hidden');
  hideSections();
  (document.querySelector('.auth_btn a') as HTMLElement).innerHTML = 'Авторизация';
}

export function logOut() {
  buttonOut.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    renderAuth();
    inputMail.value = '';
    inputPass.value = '';
  });
}

export function renderLogOutBnt() {
  document.querySelector('body')?.appendChild(modalAuth);
  modalAuth.classList.remove('hidden');
  modalAuth.appendChild(buttonOut);
  buttonOut.classList.remove('hidden');
  authForm.classList.add('hidden');
  showHiddenSections();
  (document.querySelector('.auth_btn a') as HTMLElement).innerHTML = 'Выйти';
  logOut();
  modalAuth.classList.add('hidden');
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
  document.querySelector('.auth_btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    modalAuth.classList.remove('hidden');
  });
}
