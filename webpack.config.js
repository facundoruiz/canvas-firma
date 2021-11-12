const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //extrae css

module.exports = {
    entry: { 
        app: './src/index.js',
           
    },
     output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [

            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        })
         ,
         new HtmlWebpackPlugin({
         	title: 'Firma app',
         	filename: 'index.html',
         	template: 'src/template.html'
         }),
    ],
    resolve:{
        extensions:['.js']
    }
}    