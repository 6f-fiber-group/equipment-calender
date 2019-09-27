'use strict';
// key: タスクの文字列 value: 完了しているかどうかの真偽値
const tasks = new Map();

/**
* TODOを追加する
* @param {string} task
*/
function todo(task) {
    tasks.set(task, false);
}

/**
* タスクと完了したかどうかが含まれる配列を受け取り、完了したかを返す
* @param {array} taskAndIsDonePair
* @return {boolean} 完了したかどうか
*/
function isDone(taskAndIsDonePair) {
	return taskAndIsDonePair[1];
}

/**
* タスクと完了したかどうかが含まれる配列を受け取り、完了していないかを返す
* @param {array} taskAndIsDonePair
* @return {boolean} 完了していないかどうか
*/
function isNotDone(taskAndIsDonePair) {
	return !isDone(taskAndIsDonePair);
}

/**
* TODOを完了状態にする
* @param {string} task
*/
function done(task) {
	if (tasks.has(task)) {
		tasks.set(task, true);
	}
 }
 
 /**
* TODOの一覧の配列を取得する
* @return {array}
*/
function list() {
	return Array.from(tasks)
	  .filter(isNotDone)
	  .map(t => t[0]);
}

/**
* 完了済みのタスクの一覧の配列を取得する
* @return {array}
*/
function donelist() {
	return Array.from(tasks)
  	.filter(isDone)
  	.map(t => t[0]);
}

/**
* 項目を削除する
* @param {string} task
*/
function del(task) {
	tasks.delete(task);
}
 
module.exports = {
	todo,
	list,
	donelist,
	done,
	del
};

// 'use strict'; 
// export class TODO {
// 	constructor() {
// 		this.tasks = new Map()
// 	}
// 	todo(task){
// 		this.tasks.set(task, false);
// 	}
// 	isDone(taskAndIsDonePair){
// 		return taskAndIsDonePair[1]
// 	}
// 	isNotDone(taskAndIsDonePair){
// 		return !this.isDone(taskAndIsDonePair)
// 	}
// 	done(task){
// 		if (this.tasks.has(task)) {
// 			this.tasks.set(task, true)
// 		}
// 	}
//  	list(){
// 		return Array.from(this.tasks)
// 		.filter(this.isNotDone)
// 		.map(t => t[0])
// 	}
// 	donelist() {
// 		return Array.from(tasks)
// 		.filter(this.isDone)
// 		.map(t => t[0])
// 	}
// 	del(task) {
// 		this.tasks.delete(task)
// 	}
// }