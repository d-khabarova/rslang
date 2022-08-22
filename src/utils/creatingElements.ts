export function btn(className: string) {
  return document.querySelector(className) as HTMLButtonElement;
}

export function div(className: string) {
  return document.querySelector(className) as HTMLDivElement;
}

export function elem(className: string) {
  return document.querySelector(className) as HTMLElement;
}
