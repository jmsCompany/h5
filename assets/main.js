/*!
 * main.js
 */
'use strict';
/*!
* 应用配置
*/
window.WUI={
  deps: [
    'extra/js/jquery.min'
  ],
  files: {
    frame: [
      'css!frame/css/bootstrap.min.css',
      'frame/js/bootstrap.min'
    ],
    plat: [
      'css!plat/css/normalize.css',
      'css!plat/css/rewrite.css',
      'css!plat/css/csstool.css',
      'css!plat/css/base.css',
      'css!plat/agent/agent.css',,
      'plat/js/base',
      'plat/agent/agent'
    ],
    plugin: [
      'plugin/js/jquery.event.move'
    ],
    app: [
      'css!app/css/basic.css',
      'css!app/css/model.css',
      'css!app/css/module.css',
      'css!app/css/plugin.css',
      'css!app/css/media.css',
      'css!app/css/custom.css',
      'app/js/app',
      'app/js/custom'
    ]
  }
};

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
  paths: {
    'deps': 'plat/js/deps',
    'files': 'plat/js/files'
  },
  shim: {
    'deps': {
      deps: WUI.deps
    },
    'files': {
      deps: WUI.files.frame.concat(WUI.files.plat, WUI.files.plugin, WUI.files.app)
    }
  },
  waitSeconds: 3000
});
define([
  'deps'
], function(require, factory) {
  
});