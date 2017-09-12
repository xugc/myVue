//引入webpack插件
var webpack = require("webpack");
// 生成HTML插件
var html = require("html-webpack-plugin");
// 删除文件插件（后面用到删除www文件夹）
var clean = require("clean-webpack-plugin");
//用到的模块
module.exports = {
    //入口文件
    entry:"./app/app.js",
    //输出
    output:{
        //输出地址，会自动创建文件夹www
        path:__dirname+"/www",
        //输出命名
        filename:"index.js"
    },
    //用到的模块，基本上常用的就是这几个
    module:{
        loaders:[
            {
                //css打包，使用正则表达式识别样式文件，常用用到了style-loader、css-loader、less-loader模块
                test:/\.css$/,
                loader:"style-loader!css-loader!less-loader"
            },
            {
                //图片打包，limit限制打包的图片大小和图片放到imges文件下使用原名字，使用4位的hash值防止命名相同而冲突，使用原来的扩展名
                test:/\.(png|jpe?g|gif)$/,
                loader:"url-loader?limit=1000&name=images/[name].[hash:4].[ext]"
            },
            {
                //vue文件打包
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
//字体打包
                test:/\.(woff|svg|eot|ttf)\??.*$/,
                loader:"url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]"
            }
        ]
    },
    //使用插件
    plugins:[
//生成html，标题，用到的模板
        new html({
            title:"myVue",
            template:__dirname+"/index.html",
            filename:"index.html",
        }),
//删除www目录，这里为了后面看效果，先不删除
        // new clean(["www"]),
    ],
    //sudo npm install webpack-dev-server -g 设置自动刷新和端口
    devServer: {
        contentBase:"./www",
        inline: true,
        port: 8088
    },
    resolve:{
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}