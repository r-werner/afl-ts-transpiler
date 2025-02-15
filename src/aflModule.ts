/**
 * Adds two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b.
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Greets a person.
 * @param name - The name of the person to greet.
 * @returns A greeting string.
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Example of an interface
export interface Person {
  firstName: string;
  lastName: string;
}

/**
 * Creates a Person object.
 * @param firstName - The first name.
 * @param lastName - The last name.
 * @returns A Person object.
 */
export function createPerson(firstName: string, lastName: string): Person {
  return { firstName, lastName };
}
