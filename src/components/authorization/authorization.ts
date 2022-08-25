import API from '../../Api/api';
import {
  renderAuth, renderLogOutBnt, logOut, validateEmail, validatePassword,
} from './functions';
import { isAuth } from '../storage/functions';
import { ApiUsers } from '../../types/apiTypes';
import StorageController from '../storage/storage';

class Auth {
  api: API;
  storage: StorageController;

  constructor() {
    this.api = new API();
    this.storage = new StorageController();
  }

  identification() {
    if (isAuth()) {
      renderLogOutBnt();
      logOut();
    } else {
      renderAuth();
      this.authorization();
    }
  }

  authorization() {
    const authForm = document.getElementById('auth_form') as HTMLFormElement;
    const buttons = authForm.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', async (e) => {
        e.preventDefault();
        const mail: string = (authForm.querySelector('input[type=email]') as HTMLInputElement).value;
        const pass: string = (authForm.querySelector('input[type=password]') as HTMLInputElement).value;
        if (validateEmail(mail) && validatePassword(pass)) {
          const user: ApiUsers = { email: mail, password: pass };
          if (button.id === 'registration') {
            await this.api.createUser(user);
          }
          const content = await this.api.loginUser(user);
          this.storage.parseToLocalStorage(content);
          renderLogOutBnt();
        }
      });
    });
  }
}

export default Auth;
