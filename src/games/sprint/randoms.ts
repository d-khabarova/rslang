export const pages: Array<string> = [];

export function getRandomId(arr: Array<string>) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomPage() {
  const page = Math.floor(Math.random() * 30).toString();
  if (pages.includes(page)) {
    getRandomPage();
  }
  return page;
}
