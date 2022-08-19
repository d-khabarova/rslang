import API from './scripts/api/api';

const api = new API();
const user = { email: 'user4@user.com', password: 'pass4_123' };
api.createUser(user);
//  api.loginUser(user);

const data: HTMLElement = document.createElement('p');
data.innerText = 'Start RSlang!';
document.querySelector('body')?.appendChild(data);
