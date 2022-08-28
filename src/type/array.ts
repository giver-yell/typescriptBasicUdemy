export {};

const numbers: number[] = [1, 2, 3];
console.log(numbers);

// 非推奨
const numbers2: Array<number> = [1, 2, 3];
console.log(numbers2);

const strings2: Array<string> = ['Tokyo', 'Osaka'];

const nijigenhairetsu: number[][] = [
  [50, 100],
  [100, 200],
];
console.log(nijigenhairetsu);

const hairetsu: (number | boolean | string)[] = [1, false, 'Japan'];
