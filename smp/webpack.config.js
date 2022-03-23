const path = require("path");
const webpack = require('webpack');
const childProcess = require("child_process");
const HtmlwebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
      new webpack.BannerPlugin({
          banner: `
            Build Data = ${new Date().toLocaleString()}
            Author = ${childProcess.execSync("git config user.name")}
          `
      }),
      new webpack.DefinePlugin({}), 
      new HtmlwebpackPlugin({
          templet: './src/index.html',
          templateParameters: {
              env: process.env.NODE_ENV = 'development' ? '(개발용)' : ''
          },
          minify: process.env.NODE_ENV === 'production' ? {
            collapseWhitespace: true, // 빈칸 제거
            removeComments: true, // 주석 제거
          } : false,
          
      }),
      new CleanWebpackPlugin(),
      ...(process.env.NODE_ENV === "production"
        ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
        : []),
  ],
}