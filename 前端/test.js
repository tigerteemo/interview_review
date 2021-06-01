function sub_curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        return fn.apply(this, args.concat([].slice.call(arguments)));
    };
}

function curry(fn, length) {

    length = length || fn.length;

    var slice = Array.prototype.slice;

    return function() {
        if (arguments.length < length) {
            var combined = [fn].concat(slice.call(arguments));
            return curry(sub_curry.apply(this, combined), length - arguments.length);
        } else {
            return fn.apply(this, arguments);
        }
    };
}

var fn = curry(function(a, b, c) {
    return [a, b, c];
});


var curry2 = function(fn, ...args){
    if(args.length >= fn.length){
        return fn(...args);
    }else{
        return function(..._args){
            return curry2(fn,...args, ..._args);
        }
    }
}

var fn2 = curry2(function(a,b,c){
    return [a,b,c];
})



let a = fn2("a", "b", "c") // ["a", "b", "c"]
console.log(a);
// fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]

function fibonacci(n) {
    let j = 1, m = 1;
    if(n < 2) return m;
    for(let i=2; i<n; i++){
        let temp = m;
        m = j+m;
        j = temp;
    }
    return m;
};

var maxSubArray = function(nums) {
    let dp = [nums.length];
    dp.fill(0);
    dp[0] = nums[0];
    let max = Number.MIN_VALUE;
    for(let i=1; i<nums.length; i++){
        dp[i] = Math.max(nums[i],dp[i-1]+nums[i]);
        max = Math.max(max, dp[i]);
    }
    console.log(dp);
    return max;
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

function cssStyle2DomStyle(sName) {
    let list = sName.split("-");
    console.log(list);
    if(list.length==1) return list[0];
    let result = list[0];
    for(let i=1; i<list.length; i++){
        let temp = list[i][0].toLocaleUpperCase().concat(list[i].slice(1));
        console.log(temp);
        result = result.concat(temp);
        
    }
    return result;
}
console.log(cssStyle2DomStyle("a-bc"));

// var a = 1;
// function b(){
//     a = 10;
//     return;
//     function a(){};
// }
// b();
// console.log(a);

var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();

function getJson(){
    return new Promise((resolve,rej)=>{
        setTimeout(function(){
            console.log(2)
            resolve(2)
          },2000)
    })
 }
function testAsync() {
    return Promise.resolve().then(()=>{
        return getJson()
    }).then(()=>{
        console.log(3)
    })
}

testAsync()

a = function () { this.b =3; }
c = new a();
a.prototype.b = 9;
var b = 7;
a();
console.log(b);
console.log(c.b);

function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
    // const getName = function(){
    //     console.log(this.name);
    // }
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

// 关键的三步
var F = function () {};

F.prototype = Parent.prototype;

Child.prototype = new F();


var child1 = new Child('kevin', '18');

child1.getName();
console.log(child1);
