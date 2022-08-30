export function btn(className: string) {
  return document.querySelector(className) as HTMLButtonElement;
}

export function btns(className: string): NodeListOf<HTMLButtonElement> {
  return document.querySelectorAll(className);
}

export function div(className: string) {
  return document.querySelector(className) as HTMLDivElement;
}

export function elem(className: string) {
  return document.querySelector(className) as HTMLElement;
}
