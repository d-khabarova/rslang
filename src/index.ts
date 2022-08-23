import App from './app';

const api = new App();

api.start();

const data: HTMLElement = document.createElement('p');
data.innerText = 'Start RSlang!';
document.querySelector('body')?.appendChild(data);
