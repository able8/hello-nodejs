var counter = function (arr) {
    return "There are " + arr.length + " elements in array"
}

var adder = function (a, b) {
    return `the sum of the 2 numbers is ${a+b}`
}

var pi = 3.14

// 只有一个时可以这样导入
// module.exports = counter

/*
module.exports.counter = counter
module.exports.adder = adder
module.exports.pi = pi
*/

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi,
}
/* 对象可以简写
module.exports = {
    counter,
    adder,
    pi,
}
*/


