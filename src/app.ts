import Auth from './components/authorization/authorization';
import Sprint from './components/sprint/sprint';

class App {
  auth: Auth;
  sprint: Sprint;

  constructor() {
    this.auth = new Auth();
    this.sprint = new Sprint();
  }

  start() {
    this.auth.identification();
    //  this.sprint.start();
  }
}

export default App;
