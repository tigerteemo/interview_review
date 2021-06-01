//实现一个trim方法
String.prototype.trim = function() {
    return this.replace(/^\s+/, '').replace(/\s+$/, '');
}

//deepclone
function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
};
//考虑数组
function clone2(target) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
};

// currying实现add(1)(2)(3)
const curry = (fn, ...args) => 
    // 函数的参数个数可以直接通过函数数的.length属性来访问
    args.length >= fn.length // 这个判断很关键！！！
    // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
    ? fn(...args)
    /**
     * 传入的参数小于原始函数fn的参数个数时
     * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
    */
    : (..._args) => curry(fn, ...args, ..._args);

function add1(x,y,z){
    return x+y+z;
}
const add = curry(add1);
console.log(add(1)(2)(3));
console.log(add(1,2)(2));

//拍平数组
function flat(arr){
    let result = [];
    for(let element of arr){
        if(Array.isArray(element)){
            result = result.concat(flat(element));
        }else{
            result.push(element);
        }
    }
    return result;
}

console.log(flat([1,[1,[1,2,3]]]));

/*
防抖函数
防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 
n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完
事件 n 秒内不再触发事件，我才执行，真是任性呐!
*/
// 第一版
function debounce1(func, wait) {
    var timeout;
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(func, wait);
    }
}

// 第三版
function debounce3(func, wait) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}

//节流函数
function throttle(func, wait) {
    var timeout;
    var previous = 0;

    return function() {
        context = this;
        args = arguments;
        if (!timeout) {
            timeout = setTimeout(function(){
                timeout = null;
                func.apply(context, args)
            }, wait)
        }

    }
}

//数组去重
//indexOf
function unique(array) {
    var res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var current = array[i];
        if (res.indexOf(current) === -1) {
            res.push(current)
        }
    }
    return res;
}
//indexof加上filter
function unique(array) {
    var res = array.filter(function(item, index, array){
        return array.indexOf(item) === index;
    })
    return res;
}
//键值对
function unique(array) {
    var obj = {};
    return array.filter(function(item, index, array){
        return obj.hasOwnProperty(item) ? false : (obj[item] = true)
    })
}
//ES6
function unique(array) {
    return Array.from(new Set(array));
}

/*
千分位分割符
*/
//自己造轮子
function numFormat(num){
    num = num.toString().split(".");
    let integer = num[0];
    let float = num[1];
    let result = [];
    for(let index = integer.length-1, count = 1; index>=0; index--, count++){
        result.unshift(integer[index]);
        if(count%3===0 && index!==0){
            result.unshift(',');
        }
    }
    result.push('.');
    for(let index=0, count=1; index<float.length; index++, count++){
        result.push(float[index]);
        if(count%3===0){
            result.push(',');
        }
    }
    let string = new String();
    for(let s of result){
        string = string.concat(s);
    }
    return string;
}

//自带函数toLocalString
var a = 1234567904596;
console.log(a.toLocaleString());

//用正则
function numFormat(num){
    var res=num.toString().replace(/\d+/, function(n){ // 先提取整数部分
         return n.replace(/(\d)(?=(\d{3})+$)/g,function($1){
            return $1+",";
          });
    })
    return res;
}

/*
判断素数
*/
//  O(sqrt(n))
function isPrime(num){
    let temp = Math.sqrt(num);
    for(let i=2; i<=temp; i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
// 埃氏筛
var countPrimes = function(n) {
    const isPrime = new Array(n).fill(1);
    let ans = 0;
    for (let i = 2; i < n; ++i) {
        if (isPrime[i]) {
            ans += 1;
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }
    return ans;
};

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
    console.log(i);
    }, 5);
}