import { renderTextbookPage } from './textbook/textbook';

export default async function listenPage() {
  const textBook1 = document.querySelector('.nav_textbook') as HTMLElement;
  const textBook2 = document.querySelector('.card_textbook') as HTMLElement;
  [textBook1, textBook2].forEach((item) => {
    item.addEventListener('click', (): Promise<void> => renderTextbookPage());
  });
}
