 const path = require("path");
 const CleanWebpackPlugin = require("clean-webpack-plugin");
 const HtmlWebpackPlugin = require("html-webpack-plugin");
 const ExtractTextWebpackPlugin  = require("extract-text-webpack-plugin");
 const entry = require("./entry.js")

 module.exports = {
   context: path.resolve(__dirname,"../src"),
   entry: path.join(__dirname,entry.app),
   module:{
       rules:[
          {
            test:/\.js$/,
            use:["babel-loader"]
          },
          {
            test:/\.css$/,
            use:ExtractTextWebpackPlugin.extract({
              use: "css-loader",
              fallback:"style-loader"
            })
          },
          {
            test:/\.less$/,
            use:ExtractTextWebpackPlugin.extract({
              use: ["css-loader,less-loader"],
              fallback: "style-loader"
            })
          },
          {
            test:/\.scss$/,
            use:ExtractTextWebpackPlugin.extract({
              use: ["css-loader,sass-loader"],
              fallback: "style-loader"
            })
          },
          {
            test:/\.(jpg|gif|png|svg|jpeg|tff|)$/,
            loader: "file-loader",
            options:{
              name: "[path][name].[ext]",
              publicPath: "../"
            }
          }
       ]
   },
   plugins: [
     new ExtractTextWebpackPlugin("./css/[name].css"),
     new CleanWebpackPlugin(["dist"],{
       root:process.cwd()
     }),
     new HtmlWebpackPlugin({
       title: "Production",
       template:"../src/base.html",
       filename:"index.html"
     })
   ],
   output: {
     filename: "[name].js",
     path: path.resolve(process.cwd(), "dist"),
   }
 };