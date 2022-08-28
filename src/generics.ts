export {};

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<string>('aaa'));
console.log(echo<number>(123));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(124).echo());
console.log(new Mirror<string>('aiue').echo());
