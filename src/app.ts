// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a, b) => a + b;

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, public age = 30) {}

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user: Greetable;

user = new Person('Max');
// user.name = 'Leo';

user.greet('Hi there - I am');
console.log(user);
