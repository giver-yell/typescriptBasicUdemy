export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { underTwenty: false };

profile.name = 'Ham';
profile.age = 43;
