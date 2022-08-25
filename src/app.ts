import Auth from './components/authorization/authorization';

class App {
  auth: Auth;

  constructor() {
    this.auth = new Auth();
  }

  start() {
    this.auth.identification();
  }
}

export default App;
