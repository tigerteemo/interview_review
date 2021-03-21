const {resolve} = require('path');
//引用插件
const htmlwebpack = require('html-webpack-plugin'); 
const MiniCssExtract= require('mini-css-extract-plugin');
const { userInfo } = require('os');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    //单入口，如果只有一个入口，使用字符串，制定一个入口文件，打包一个chunk，输出一个bundle，chunk的名称是默认的
    entry: './src/index.js',

    //Array, 多入口，多个入口文件，所有的入口文件形成一个chunk， 名称是默认的，输出也是只有一个
    //entry:["./src/index.js","./src/two.js"],

    //Object,多入口，有几个文件就会生成几个chunk，并输出几个bundle，chunk的名字是key
    // entry:{
    //     one: './src/index.js',
    //     two: './src/two.js'
    // },

    //特殊用法
    // entry:{
    //     vender: ['./src/js/commons.js','./src/js/share.js'],
    //     home: './src/js/index.js',
    //     cart: './src/js/cart.js'
    // },

    output:{
        filename: "[name].js",
        path: resolve(__dirname, 'build')
    },
    // loader,
    module:{
        rules: [
            {test:/\.css$/,
            // se:["style-loader","css-loader"] //从右到左
            use:[MiniCssExtract.loader,"css-loader",'postcss-loader']}
        ]
    },
    plugins: [
        //默认会创建一个空的，目的是自动引入打包的资源
        new htmlwebpack({
            template: "./src/index.html",
            filename: 'home.html',
            minify: {
                //移除空格
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtract({
            filename: "[name].css"
        }),

        new OptimizeCssAssetsPlugin({
            filename:'[name].css'
        })
    ],
    mode: 'development'
}