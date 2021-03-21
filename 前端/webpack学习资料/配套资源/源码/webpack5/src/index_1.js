require('./style.css');
require('./iconfont.css');
require('./lessstyle.less');
require('./stylesass.scss');

const { demo } = require('./print');

demo();
demo();

function add(x, y) {
  const a = 10;
  return a + x + y;
}

const sum = add(5, 6);index.js

// 下行eslint所有规则无效
// eslint-disable-next-line
console.log(sum);

// 下行eslint所有规则无效
// eslint-disable-next-line
console.log('这是入口文件');
// eslint-disable-next-line
console.log('1111111111111');
// eslint-disable-next-line
console.log('222222222222');

// eslint-disable-next-line
console.log('222222222222');

// eslint-disable-next-line
console.log('222222222222');


if(module.hot){
  module.hot.accept('./print.js', function(){
      console.log("print.js这个文件内容有改变");
      demo();

  })
}