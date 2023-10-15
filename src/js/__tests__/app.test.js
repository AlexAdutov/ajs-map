import ErrorRepository from '../app';

test('Существующая ошибка', () => {
  const newError = new ErrorRepository();
  const received = newError.translate(1);
  expect(received).toEqual('Ошибка инициализации пользователя');
});

test('ошибка не существует', () => {
  const newError = new ErrorRepository();
  const received = newError.translate(100);
  expect(received).toEqual('Unknown error');
});
