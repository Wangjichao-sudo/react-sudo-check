const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map', // 不同选项适用于不同环境
    devServer: {
        contentBase: './dist', //将dist目录下的文件(index.html)作为可访问文件, 如果不写这个参数则默认与webpack.cofig.js的同级目录
        port: 3300 //端口号设为8080, 默认也是8080
    },
    plugins: [ //webpack 通过 plugins 实现各种功能, 比如 html-webpack-plugin 使用模版生成 html 文件
        //   new CleanWebpackPlugin(['dist']), //设置清除的目录
        new HtmlWebpackPlugin({
            filename: 'dist/index.html', //设置生成的HTML文件的名称, 支持指定子目录，如：assets/admin.html
        })
    ],
    module: {
    // 关于模块配置

        rules: [
        // 模块规则（配置 loader、解析器等选项）
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                // use: 'babel-loader',
                exclude: [
                // path.resolve(__dirname, "app/demo-files")
                ],
                // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
                // test 和 include 具有相同的作用，都是必须匹配选项
                // exclude 是必不匹配选项（优先于 test 和 include）
                // 最佳实践：
                // - 只在 test 和 文件名匹配 中使用正则表达式
                // - 在 include 和 exclude 中使用绝对路径数组
                // - 尽量避免 exclude，更倾向于使用 include

                // issuer: { test, include, exclude },
                // // issuer 条件（导入源）

                // enforce: "pre",
                // enforce: "post",
                // // 标识应用这些规则，即使规则覆盖（高级选项）

                loader: "babel-loader",
                // // 应该应用的 loader，它相对上下文解析
                // // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
                // // 查看 webpack 1 升级指南。

                options: {
                    // cpresets: ["es2015"]
                    presets: ['@babel/preset-env']
                },
                // loader 的可选项
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};