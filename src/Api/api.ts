import { ApiUsers, ApiSignIn, IApiGetWords, IResponseWordsBody } from '../types/apiTypes';
import { setErrorMessage } from '../components/authorization/functions';
import { words } from './apiConstants';

class API {
  base: string;
  users: string;

  constructor() {
    this.base = 'https://react-rslang-be-d-khabarova.herokuapp.com';
    this.users = `${this.base}/users`;
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

  async getWords(group: number, page: number): Promise<IResponseWordsBody> {
    const response: Response = await fetch(`${words}?group=${group}&page=${page}`);
    const result: Array<IApiGetWords> = await response.json();
    return {
      wordsPage: result,
    };
  }
}
export default API;
