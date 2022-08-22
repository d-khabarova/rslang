import API from '../../api/api';
import {
  isAuth, renderAuth, renderLogOutBnt, logOut, validateEmail, validatePassword,
} from '../functions';
import { ApiUsers } from '../../types/apiTypes';

class Auth {
  api: API;

  buttonOut: HTMLButtonElement;

  authForm: HTMLFormElement;

  mail: string;

  pass: string;

  constructor() {
    this.api = new API();
    this.buttonOut = document.getElementById('logout') as HTMLButtonElement;
    this.authForm = document.getElementById('auth_form') as HTMLFormElement;
    this.mail = '';
    this.pass = '';
  }

  identification() {
    if (isAuth()) {
      renderLogOutBnt();
      this.logout();
    } else {
      this.authorization();
      renderAuth();
    }
  }

  authorization() {
    const buttons = this.authForm.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const mail: string = (this.authForm.querySelector('input[type=email]') as HTMLInputElement).value;
        const pass: string = (this.authForm.querySelector('input[type=password]') as HTMLInputElement).value;
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

  logout() {
    this.buttonOut.addEventListener('click', (e) => {
      e.preventDefault();
      logOut();
    });
  }
}

export default Auth;
