module.exports = {
  entry: "./apps/react-base-app/src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|ts)x$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".ts", ".tsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist",
    port: 3000
  }
};
