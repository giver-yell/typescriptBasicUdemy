export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1: profile = {
  name: 'Ham',
  age: 23,
};

type profile = {
  name: string;
  age: number;
};

type profile2 = typeof example1;
