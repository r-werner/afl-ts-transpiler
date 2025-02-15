"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.greet = greet;
exports.createPerson = createPerson;
/**
 * Adds two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b.
 */
function add(a, b) {
    return a + b;
}
/**
 * Greets a person.
 * @param name - The name of the person to greet.
 * @returns A greeting string.
 */
function greet(name) {
    return `Hello, ${name}!`;
}
/**
 * Creates a Person object.
 * @param firstName - The first name.
 * @param lastName - The last name.
 * @returns A Person object.
 */
function createPerson(firstName, lastName) {
    return { firstName, lastName };
}
