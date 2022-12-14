export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    super(name);

    this.speed = speed;
  }

  run(): string {
    return `${super.run()} ${this.speed}km`;
  }
}

console.log(new Animal('mickey').run());
console.log(new Lion('shinba', 80).run());
