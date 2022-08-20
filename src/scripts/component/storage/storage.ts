import { addInformation } from '../functions';

class StorageController {
  arr: Array<Array<string>>;

  constructor() {
    this.arr = [];
  }

  parseToLocalStroage(content: object) {
    this.arr = Object.entries(content);
    this.arr.forEach(([key, value]) => {
      addInformation(key, value);
    });
  }
}

export default StorageController;
