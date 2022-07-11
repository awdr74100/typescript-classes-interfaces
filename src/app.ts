interface Greetable {
  readonly name: string;
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
// user.name = 'Manu';

user.greet('Hi there - I am');
console.log(user);
