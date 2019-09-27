'use strict';
const todo = require('./index.js');
const assert = require('assert');

// todo と list のテスト
todo.todo('ノートを買う');
todo.todo('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);

// done と donelist のテスト
todo.done('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う']);
assert.deepEqual(todo.donelist(), ['鉛筆を買う']);

console.log('テストが正常に完了しました');
// 'use strict';
// import TODO from './index.js';
// const todo = new TODO()
// const assert = require('assert');
// console.log(TODO)
// // todo と list のテスト
// todo.todo('ノートを買う');
// todo.todo('鉛筆を買う');
// assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);

// // done と donelist のテスト
// todo.done('鉛筆を買う');
// assert.deepEqual(todo.list(), ['ノートを買う']);
// assert.deepEqual(todo.donelist(), ['鉛筆を買う']);

// console.log('テストが正常に完了しました');