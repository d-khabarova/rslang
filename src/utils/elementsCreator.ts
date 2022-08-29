export function elementCreator(tag: string, classes?: string, id?: string, text?: string) {
  const elem = document.createElement(tag);
  if (typeof id === 'string') {
    elem.setAttribute('id', id);
  }
  if (typeof classes === 'string') {
    const classesList = classes.split(',');
    classesList.forEach((item) => {
      elem.classList.add(item);
    });
  }
  elem.innerHTML = text || '';
  return elem;
}

export function inputCreator(type: string, placeholder?: string) {
  const input = document.createElement('input');
  input.setAttribute('type', type);
  if (typeof placeholder === 'string') {
    input.setAttribute('placeholder', placeholder);
  }
  return input;
}

export function buttonCreator(id: string, text: string) {
  const button = document.createElement('button');
  button.setAttribute('id', id);
  button.innerHTML = text || '';
  return button;
}
