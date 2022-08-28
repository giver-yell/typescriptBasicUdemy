export {};

let bmi = (height: number, weight: number): number => {
  return weight / (height * height);
};
let bmi2: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};
let bmi3: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.705, 65));
console.log(bmi2(1.705, 65));
console.log(bmi3(1.705, 65));
