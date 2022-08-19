import API from '../../api/api';
import { isAuth } from '../storage/functions';
import { ApiUsers } from '../../types/apiTypes';

class Auth {
  api: API;

  buttonOut: HTMLButtonElement;

  authForm: HTMLFormElement;

  mail: string;

  pass: string;

  constructor() {
    this.api = new API();
    this.buttonOut = document.createElement('button');
    this.authForm = document.getElementById('auth_form') as HTMLFormElement;
    this.mail = '';
    this.pass = '';
  }

  identification() {
    if (isAuth()) {
      this.buttonOut.innerText = 'Выйти';
      document.querySelector('body')?.appendChild(this.buttonOut);
      this.authForm?.classList.add('hidden');
    } else {
      this.authForm?.classList.remove('hidden');
      this.authorization();
    }
  }

  authorization() {
    (this.authForm.querySelector('button') as HTMLButtonElement).addEventListener('click', () => {
      const mail: string = (this.authForm.querySelector('input[type=email]') as HTMLInputElement).value;
      const pass: string = (this.authForm.querySelector('input[type=password]') as HTMLInputElement).value;
      const user: ApiUsers = { email: mail, password: pass };
      console.log(user);
      this.api.createUser(user);
    });
  }
}

export default Auth;
