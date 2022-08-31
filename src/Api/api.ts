import { ApiUsers, ApiSignIn } from '../types/apiTypes';
import { setErrorMessage } from '../components/authorization/functions';

class API {
  base: string;
  users: string;
  words: string;

  constructor() {
    this.base = 'https://react-rslang-be-d-khabarova.herokuapp.com';
    this.users = `${this.base}/users`;
    this.words = `${this.base}/words`;
  }

  async createUser(user: ApiUsers) {
    const rawResponse = await fetch(this.users, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (rawResponse.status === 417) {
      setErrorMessage('Пользователь с таким email уже существует');
    }
    const content = await rawResponse.json();
    return content;
  }

  async loginUser(user: ApiSignIn) {
    const rawResponse = await fetch(`${this.base}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (rawResponse.status === 403 || rawResponse.status === 404) {
      setErrorMessage('Неверный email или пароль!');
    }
    const content = await rawResponse.json();
    return content;
  }

  async getWords(group?: string, page?: string) {
    const rawResponse = await fetch(`${this.words}?group=${group}&page=${page}`);
    const content = await rawResponse.json();
    return content;
  }

  async getWord(id?: string) {
    const rawResponse = await fetch(`${this.words}/${id}`);
    const content = await rawResponse.json();
    return content;
  }
}
export default API;
