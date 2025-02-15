import { add, greet, createPerson, Person } from '../src/aflModule';

describe('aflModule', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  it('should greet a person correctly', () => {
    expect(greet('World')).toBe('Hello, World!');
    expect(greet('TypeScript')).toBe('Hello, TypeScript!');
  });

  it('should create a person object correctly', () => {
    const person: Person = createPerson('John', 'Doe');
    expect(person.firstName).toBe('John');
    expect(person.lastName).toBe('Doe');
  });
});
