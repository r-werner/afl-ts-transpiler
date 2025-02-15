"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aflModule_1 = require("../src/aflModule");
describe('aflModule', () => {
    it('should add two numbers correctly', () => {
        expect((0, aflModule_1.add)(2, 3)).toBe(5);
        expect((0, aflModule_1.add)(-1, 1)).toBe(0);
    });
    it('should greet a person correctly', () => {
        expect((0, aflModule_1.greet)('World')).toBe('Hello, World!');
        expect((0, aflModule_1.greet)('TypeScript')).toBe('Hello, TypeScript!');
    });
    it('should create a person object correctly', () => {
        const person = (0, aflModule_1.createPerson)('John', 'Doe');
        expect(person.firstName).toBe('John');
        expect(person.lastName).toBe('Doe');
    });
});
