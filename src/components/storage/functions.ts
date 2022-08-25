export function addInformation(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function isAuth(): boolean {
  const message = localStorage.getItem('message');
  return message === 'Authenticated';
}
