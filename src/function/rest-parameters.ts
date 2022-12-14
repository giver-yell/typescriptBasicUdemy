export {};

const reducer = (previousValue: number, currentValue: number): number => {
  console.log({ previousValue, currentValue });
  return previousValue + currentValue;
};

const sum = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
