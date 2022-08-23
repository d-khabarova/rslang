const authForm = document.createElement('form');
authForm.setAttribute('id', 'auth_form');
const inputMail = document.createElement('input');
inputMail.setAttribute('type', 'email');
inputMail.setAttribute('placeholder', 'E-mail');
authForm.appendChild(inputMail);
const inputPass = document.createElement('input');
inputPass.setAttribute('type', 'password');
inputPass.setAttribute('placeholder', 'Пароль');
authForm.appendChild(inputPass);
const btnLogin = document.createElement('button');
btnLogin.setAttribute('id', 'login');
btnLogin.textContent = 'Войти';
authForm.appendChild(btnLogin);
const btnRegistration = document.createElement('button');
btnRegistration.setAttribute('id', 'registration');
btnRegistration.textContent = 'Регистрация';
authForm.appendChild(btnRegistration);
const errMsg = document.createElement('div');
errMsg.classList.add('error', 'hidden');
authForm.appendChild(errMsg);
const buttonOut = document.createElement('button');
buttonOut.setAttribute('id', 'logout');
buttonOut.textContent = 'Выйти';
buttonOut.classList.add('hidden');
const requiredLength = 8;

export function renderLogOutBnt() {
  document.querySelector('body')?.appendChild(buttonOut);
  buttonOut.classList.remove('hidden');
  authForm.classList.add('hidden');
}

export function renderAuth() {
  document.querySelector('body')?.appendChild(authForm);
  authForm.classList.remove('hidden');
  buttonOut.classList.add('hidden');
}

export function logOut() {
  buttonOut.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    renderAuth();
  });
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
