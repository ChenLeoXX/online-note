 const path = require('path');
 const webpack = require('webpack');
 module.exports= {
   entry: path.join(__dirname,'js/app/index.js'),
   output: {
    path: path.resolve('./public/js/'),
    filename: '[name].js'
    },
    module:{
      rules:[
        { test:/\.less$/,
          use:['style-loader','css-loader','less-loader']
        },
      ]
    },
    plugins:[
      new webpack.ProvidePlugin({
        $:'jquery'
      }),
    ],
    resolve:{
      alias:  {
        jquery: path.join(__dirname,'js/lib/jquery-3.2.1.min'),
        less: path.join(__dirname,'less/')
      }
    }   
    }