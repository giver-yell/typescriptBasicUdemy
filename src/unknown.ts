export {};

const fn = (): number => 43;

let numberAny: any = fn();
let numberUnkonwn: unknown = fn();

let sumAny = numberAny + 10;
console.log(typeof numberUnkonwn);

if (typeof numberUnkonwn === 'number') {
  let sumUnknown = numberUnkonwn + 10;
}
