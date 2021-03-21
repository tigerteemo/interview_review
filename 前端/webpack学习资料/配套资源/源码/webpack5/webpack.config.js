const {resolve, join} = require('path');
//引用插件html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const glob = require('glob');
const PATHS = { src: join(__dirname, 'src')}



module.exports = {
    /*  1、entry  入口（entry）指示webpack以哪个文件作为入口起点开始打包，分析构建内部依赖图。 */
    // 单入口， 如果只有一个入口， 使用字符串，指定一个入口文件，打包一个chunk,输出一个bundle, chunk的名称是默认
     entry: ['./src/index.js'],

    /*2、output 输出（output）指示webpack打包后的资源 bundles 输出到哪里，以及如何命名。*/
    output:{
        filename: "[name].js",
        path:resolve(__dirname, 'build')
    },

    /* 3、loader 让webpack能够去处理那些非JavaScript资源css、img等，将它们处理成webpack能够识别的资源，可以理解成一个翻译过程（webpack自身只能理解js和json）。*/
    module: {
        rules: [
          /*  { test:/\.css$/, use:[ 'style-loader', 'css-loader'] },  //从右到左*/
            { test:/\.css$/, use:[ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] },  //从右到左
            { test:/\.less$/, use:[ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'] },  //从右到左
            { test:/\.scss$/, use:[ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'] },  //从右到左
           /* { test:/\.(png|jpg|jpeg|gif)$/, use:['url-loader', {loader:'file-loader', options:{} }]}*/
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader',
                options: {
                    publicPath: './images/',
                    outputPath: 'images/',
                    limit: 1024 * 8,
                    name:'[name][hash:10].[ext]'
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                exclude: /\.(js|json|html|css|less|scss|png|gif|jpg|jpeg)$/,

                loader: 'file-loader',
                options: {
                    outputPath: 'font/',
                    publicPath: './font',
                    name:'[name][hash:8].[ext]'
                }

            },
          /*  {
                //eslint只检查js语法
                test:/\.js$/,
                // 只检查自己写的代码， 不检查第三方库的代码
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix:true
                }
            }*/
        ]
    },

    /* 4、plugins 插件（plugins）可用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。*/
    plugins: [
        // 默认会创建一个空的， 目的就是自动引入打包的资源（js/css）
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),

        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),

        new OptimizeCssAssetsWebpackPlugin(),

        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
        }),


    ],
    // 在webpack5 需要加上这个配置项才可以自动刷新
    target: "web",


    /*
    5、mode
    模式（mode）指示webpack使用相应模式的配置。
    开发模式（development）：配置比较简单，能让代码本地调试运行的环境。
    生产模式（production）：代码需要不断优化达到性能最好。能让代码优化上线运行的环境。
    */
    // mode:'development',

    devServer: {
        port:3001,
        compress:true,
        open:true,
        hot:true
    }
}