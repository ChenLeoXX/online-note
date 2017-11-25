 const merge = require("webpack-merge");
 const common = require("./webpack.common.js");
 const webpack = require("webpack");
 const path = require("path");

 module.exports = merge(common, {
   devtool: "inline-source-map",
   devServer: {
     contentBase: path.join(process.cwd(), "../dist"),
     hot: true,
     compress: true,
     port: 5000,
     stats:"errors-only",
     overlay:{ //当有编译错误或者警告的时候显示一个全屏overlay
      errors:true,
      warnings:true,
    },
   },
   plugins:[
    new webpack.NamedModulesPlugin(), // webpack内置插件 ，用于插看修改的依赖
    new webpack.HotModuleReplacementPlugin(),//webpack内置插件，热替换
   ]
 });