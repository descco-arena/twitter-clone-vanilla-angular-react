module.exports = function(grunt, options){

  var projectDev  = options.projectDev;
  var projectDir  = options.projectDir;
  var projectNode = options.projectNode;

  var webpack = require("webpack");
  var webpackConfig = require("../../../webpack.config.prod.js");

  return {
    options: {
      webpack: webpackConfig
    },
    start: {
      keepAlive: true,
      progress: true,
      contentBase: '<%= projectDir %>',
      port: 8000
    }
  };
};
