const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
 entry: "./src/index.tsx",
 output: {
  filename: "bundle.js",
  // asyncChunks: true,
  path: path.resolve(__dirname, "dist"),
  clean: true,
 },
 resolve: {
  extensions: [".ts", ".tsx", ".js"],
 },
 module: {
  rules: [
   {
    test: /\.(tsx|js|jsx|ts|json)$/,
    use: "babel-loader",
    exclude: /node_modules/,
   },
   {
    test: /\.css$/,
    use: ["style-loader", "css-loader", "postcss-loader"],
   },
   {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
   },
   {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
   },
  ],
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: "./src/index.html",
  }),
 ],
 devServer: {
  // compress: true,
  historyApiFallback: true,
  port: 3000,
  open: true,
 },
 // optimization: {
 //  usedExports: true,
 //  splitChunks: {
 //   chunks: "all",
 //  },
 // },
};
