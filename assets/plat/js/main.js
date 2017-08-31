/*!
 * main.js
 */
'use strict';
/*!
* 引用文件
*/
require.config({
  baseUrl: '../assets/',
  map: {
    '*': {
      'css': 'css.min'
    }
  },
  waitSeconds: 5000
});
define([
  'css!../assets/css/style.css',
  'css!../assets/css/custom.css',
  'js/script',
  'js/custom',
], function(require, factory) {
  
});