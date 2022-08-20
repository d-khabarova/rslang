const buttonOut = document.getElementById('logout') as HTMLButtonElement;
const authForm = document.getElementById('auth_form') as HTMLFormElement;

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
