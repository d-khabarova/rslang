import Auth from './component/authorization/authorization';

class App {
  auth: Auth;

  constructor() {
    this.auth = new Auth();
  }

  start() {
    this.auth.identification();
    this.auth.logout();
  }
}

export default App;
