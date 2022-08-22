const buttonOut = document.getElementById('logout') as HTMLButtonElement;
const authForm = document.getElementById('auth_form') as HTMLFormElement;
const errMsg = authForm.querySelector('.error') as HTMLDivElement;

export function addInformation(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function isAuth(): boolean {
  const message = localStorage.getItem('message');
  return message === 'Authenticated';
}

export function renderLogOutBnt() {
  buttonOut.classList.remove('hidden');
  authForm.classList.add('hidden');
}

export function renderAuth() {
  authForm.classList.remove('hidden');
  buttonOut.classList.add('hidden');
}

export function logOut() {
  localStorage.clear();
  renderAuth();
}

export function setErrorMessage(message: string) {
  errMsg?.classList.remove('hidden');
  errMsg.innerText = message;
}

export function validateEmail(email: string) {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
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
  if (pass.length < 8) {
    const msg = 'Пароль должен быть не меньше 8 символов';
    setErrorMessage(msg);
    return false;
  }
  errMsg?.classList.add('hidden');
  errMsg.innerText = '';
  return true;
}
