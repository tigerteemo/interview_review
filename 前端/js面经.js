var curry = function(fn, ...args){
    if(args.length >= fn.length){
        return fn(...args);
    }else{
        return function(..._args){
            return curry(fn,...args, ..._args);
        }
    }
}

function add1(x,y,z){
    return x+y+z;
}

const add = curry(add1);

console.log(add(1,2,3));

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