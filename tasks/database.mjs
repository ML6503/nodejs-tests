export default class Database {
  constructor() {
    this.database = [];
  }
  async add(data) {
    this.database.push(data);
  }

  async read() {
    return [...this.database];
  }
}
