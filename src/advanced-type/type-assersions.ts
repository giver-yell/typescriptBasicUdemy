export {};

let name: any = 'Ham';

// let length = name.length as number;
let length = (name as string).length;
// 非推奨 JSXの記法と似るため
// let length = (<string>name).length;
