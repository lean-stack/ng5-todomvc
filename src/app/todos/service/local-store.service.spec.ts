import { TestBed, inject } from '@angular/core/testing';

import { LocalStoreService } from './local-store.service';
import { exec } from 'child_process';

describe('LocalStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStoreService]
    });
  });

  it('should be created', inject([LocalStoreService], (service: LocalStoreService) => {
    expect(service).toBeTruthy();
  }));

  describe('API', () => {

    let service: LocalStoreService;

    beforeEach(inject([LocalStoreService], (instance: LocalStoreService) => {
      service = instance;
    }));

    it('method getAll should initially return an empty list', async (done) => {
      localStorage.clear();
      const todos = await service.getAll();
      expect(todos.length).toBe(0);
      done();
    });

    it('method getAll should return an todo list', async (done) => {
      mockData();
      const todos = await service.getAll();
      expect(todos.length).toBe(2);
      done();
    });

    it('method create should create a first todo', async (done) => {
      localStorage.clear();
      const todo = await service.create('Unit Testing');
      expect(todo.id).toBe(1);
      expect(todo.title).toBe('Unit Testing');
      expect(todo.completed).toBe(false);
      const todos = await service.getAll();
      expect(todos.length).toBe(1);
      done();
    });

    it('method create can add a new todo', async (done) => {
      mockData();
      const todo = await service.create('Deployment');
      expect(todo.id).toBe(3);
      expect(todo.title).toBe('Deployment');
      expect(todo.completed).toBe(false);
      const todos = await service.getAll();
      expect(todos.length).toBe(3);
      expect(localStorage['lastId']).toBe('3');
      done();
    });

    it('method update updates a todo', async (done) => {
      mockData();
      const todo = await service.update({ id: 1, title: 'Unit Testing', completed: false });
      expect(todo.id).toBe(1);
      expect(todo.title).toBe('Unit Testing');
      expect(todo.completed).toBe(false);
      const todos = await service.getAll();
      expect(todos[0].completed).toBe(false);
      done();
    });

    it('method delete deletes a todo', async (done) => {
      mockData();
      const todo = await service.remove(2);
      expect(todo.id).toBe(2);
      const todos = await service.getAll();
      expect(todos.length).toBe(1);
      done();
    });

    it('method clearCompleted deletes all completed todos', async (done) => {
      mockData();
      await service.create('Deployment');
      await service.update({ id: 3, title: 'Deployment', completed: true});
      const todosBefore = await service.getAll();
      expect(todosBefore.length).toBe(3);
      const deletedTodos = await service.clearCompleted();
      expect(deletedTodos.length).toBe(2);
      const todosAfter = await service.getAll();
      expect(todosAfter.length).toBe(1);
      done();
    });
  });
});

function mockData() {
  localStorage['todos'] = JSON.stringify([
    { id: 1, title: 'Unit Testing', completed: true },
    { id: 2, title: 'E2E Testing', completed: false }
  ]);
  localStorage['lastId'] = 2;
}
