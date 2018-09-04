var events = require('events')
var util = require('util')

// 事件 对象
var myEmitter = new events.EventEmitter()

// 绑定 事件名称 和 回调函数
myEmitter.on('someEvent', function (message) {
    console.log(message)
})

// 触发实践，使用事件名称
myEmitter.emit('someEvent', 'The event was emitted')

var Person = function (name) {
    this.name = name
}

// 继承，让Person类具有事件对象的特性，绑定和触发事件
util.inherits(Person, events.EventEmitter)
// 新建对象
var xiaoming = new Person('xiaoming')
var lili = new Person('lili')

var person = [xiaoming, lili]

// 循环person数组，绑定事件
person.forEach(function (person) {
    person.on('speak', function (message) {
        console.log(person.name + ' said: ' + message)
    })
})

// 触发事件
xiaoming.emit('speak', 'hi')
lili.emit('speak', 'I want a curry')