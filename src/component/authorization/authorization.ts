import API from '../../api/api';
import {
  renderAuth, renderLogOutBnt, logOut, validateEmail, validatePassword,
} from './functions';
import { isAuth } from '../storage/functions';
import { ApiUsers } from '../../types/apiTypes';

class Auth {
  api: API;

  constructor() {
    this.api = new API();
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
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const mail: string = (authForm.querySelector('input[type=email]') as HTMLInputElement).value;
        const pass: string = (authForm.querySelector('input[type=password]') as HTMLInputElement).value;
        if (validateEmail(mail) && validatePassword(pass)) {
          const user: ApiUsers = { email: mail, password: pass };
          if (button.id === 'login') {
            this.api.loginUser(user);
          } else {
            this.api.createUser(user);
          }
        }
      });
    });
  }
}

export default Auth;
