// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a, b) => a + b;

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet?(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name?: string, public age = 30) {
    if (name) this.name = name;
  }

  greet(phrase: string) {
    this.name ? console.log(`${phrase} ${this.name}`) : console.log('Hi!');
  }
}

let user: Greetable;

user = new Person();
// user.name = 'Leo';

user.greet?.('Hi there - I am');
console.log(user);
