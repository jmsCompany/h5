/*!
 * app.js
 */
'use strict';
var winResize=function(){
  var width=$(window).width();
  var height=$(window).height();
  $('.full-height').height(height);
  var r=width/360;
  $('html').css('font-size', 10*r+'px');
  $('.bd-1.full').height(function(){
    var $less=$($(this).data('less'));
    return height-($('header').height()+$('footer').height()+16*r)-$less.outerHeight();
  });
}

$(function(){
  $(window).resize(function(){
    winResize();
  });
  setTimeout(function(){
    winResize();
  }, 100);
});