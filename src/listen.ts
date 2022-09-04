import { renderTextbookPage } from './textbook/textbook';

export default async function listenPage() {
  const textBook = document.querySelector('.nav_textbook') as HTMLElement;
  textBook.addEventListener('click', (): Promise<void> => renderTextbookPage());
}
