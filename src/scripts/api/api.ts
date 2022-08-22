import { ApiUsers, ApiSignIn } from '../types/apiTypes';
import StorageController from '../component/storage/storage';
import { setErrorMessage, renderLogOutBnt } from '../component/functions';

class API {
  location: string;

  storage: StorageController;

  constructor() {
    this.location = 'https://react-rslang-be-d-khabarova.herokuapp.com/';
    this.storage = new StorageController();
  }

  async createUser(user: ApiUsers) {
    const rawResponse = await fetch(`${this.location}users`, {
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
    this.storage.parseToLocalStroage(content);
    this.loginUser(user);
  }

  async loginUser(user: ApiSignIn) {
    const rawResponse = await fetch(`${this.location}signin`, {
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
    this.storage.parseToLocalStroage(content);
    renderLogOutBnt();
  }
}
export default API;
