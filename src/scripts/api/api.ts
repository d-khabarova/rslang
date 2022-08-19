import { ApiUsers, ApiSignIn } from '../types/apiTypes';
import StorageController from '../controller/storage/storage';

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
    const content = await rawResponse.json();
    this.storage.parseToLocalStroage(content);
  }
}

export default API;
