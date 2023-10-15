export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      [1, 'Ошибка инициализации пользователя'],
      [2, 'Проблемы на сервере'],
    ]);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
