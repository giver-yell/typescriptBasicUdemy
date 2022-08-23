# typescriptBasicUdemy

## Settings
- install typescript  
`$ npm install --save-dev  typescript@4.7.4`
- Install ts-node  
`$ npm info ts-node`  
`$ npm install --save-dev ts-node@10.9.1`
- Install ts-node-dev  
`$ npm info ts-node-dev`  
`$ npm install --save-dev ts-node-dev@2.0.0`

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
Udemy - ハンズオンで学ぶTypeScript - JavaScript エンジニアのためのTypeScript徹底入門
https://www.udemy.com/course/ts-for-js-developers/
