# typescriptBasicUdemy

## Settings

- install typescript  
  `$ npm install --save-dev typescript@4.7.4`
- Install ts-node  
  `$ npm info ts-node`  
  `$ npm install --save-dev ts-node@10.9.1`
- Install ts-node-dev  
  `$ npm info ts-node-dev`  
  `$ npm install --save-dev ts-node-dev@2.0.0`
- Install eslint  
  `$ npm install eslint --save-dev`  
  `$ npx eslint --init`
  - 参考 URL  
    https://maku.blog/p/xz9iry9/  
    https://zenn.dev/ken505/articles/817024d544c5ea
- Install Prettier  
  `$ npm install prettier --save-dev --save-exact`  
  `$ npm install eslint-config-prettier --save-dev`  
  - 参考 URL  
  https://maku.blog/p/au8iu6u/
- Install axios  
  `$ npm info axios`  

## Setting VSCode

- Add `settings.json`

```
"editor.formatOnSave": true,
"prettier.semi": true,
"prettier.singleQuote": true,
```

## npx command

- ts-node-dev コンパイルと自動実行  
  `$ npx ts-node-dev --respawn src/install-typescript.ts`
  - ショートカット  
    `$ npm run dev src/install-typescript.ts`
- ts-node コンパイルと実行  
  `$ npx ts-node src/install-typescript.ts`
- Create tsconfig.json  
  `$ npx tsc --init`

## npm command

- Create package.json  
  `$ npm init -y`

## Git command

- Create branch  
  `$ git checkout -b [ブランチ名]`
- Push  
  `git push -u origin HEAD`
- checkout  
  `$ git checkout [ブランチ名]`
- merge  
  `$ git merge [取り込みたいブランチ名]`

- Pull  
  `$ git pull origin master`
- Fetch  
  `$ git fetch origin`

## Reference

Udemy - ハンズオンで学ぶ TypeScript - JavaScript エンジニアのための TypeScript 徹底入門
https://www.udemy.com/course/ts-for-js-developers/
