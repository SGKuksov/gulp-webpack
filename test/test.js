const { expect } = require('chai');
const { TodoList } = require('./app.js');

it('Можно сохранять элементы на сервер', () => {
  // подготовка
  let latestArgs;
  const list = new TodoList(['item1', 'item2']);
  list.fetch = (...args) => {
    latestArgs = args;
    return Promise.resolve();
  };

  // действие
  list.save();

  // проверка
  expect(latestArgs[1].body).to.eql(['item1', 'item2']);
});

it('Можно загружать элементы с бекенда', async () => {
  // подготовка
  const list = new TodoList();
  list.fetch = () => {
    return Promise.resolve(['item1', 'item2']);
  };

  // действие
  await list.load();

  // проверка
  expect(list.items.map(i => i.name)).to.eql(['item1', 'item2']);
});

it('Можно добавлять элементы', () => {
  // подготовка
  const list = new TodoList();

  // действие
  list.addItem('test');

  // проверка
  expect(list.items.map(i => i.name)).to.include('test');
});

it('Можно чекать элементы по индексу', () => {
  // подготовка
  const list = new TodoList(['item1', 'item2']);

  // действие
  list.done(1);

  // проверка
  expect(!list.items[1].isDone).to.be.false;
});
