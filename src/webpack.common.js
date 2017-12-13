 const path = require('path');
 const webpack = require('webpack');
 const ExtractTextPlugin=require('extract-text-webpack-plugin')
 const autoprefixer=require('autoprefixer')
 module.exports= {
   entry: path.join(__dirname,'js/app/index.js'),
   output: {
    publicPath: '/',
    path:path.resolve('./public/'),
    filename: 'js/[name].js'
    },
    module:{
      rules:[
        {
          test:/\.less$/,
          use:ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:['css-loader','less-loader','postcss-loader']
          })
        },
        { test:/\.css$/,
          use:ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:[
              {
                loader:'css-loader',
                options:{
                  minimize: true
                }
              }
            ]
          })
        },
        {
          test:/\.js$/,
          use:['babel-loader']
        },
        {
          test:/\.(jpg|gif|png|svg|jpeg|tff|ico)$/,
          loader: "file-loader",
          options:{
            name: "img/[hash].[ext]",
          }
        }
      ]
    },
    devtool: 'inline-source-map',
    plugins:[
      new webpack.ProvidePlugin({
        $:'jquery'
      }),
      new ExtractTextPlugin("css/index.css"),
      new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer(),
            ]
        }
    })
    ],
    resolve:{
      alias:  {
        jquery: path.join(__dirname,'js/lib/jquery-3.2.1.min'),
        less: path.join(__dirname,'less/')
      }
    }   
    }