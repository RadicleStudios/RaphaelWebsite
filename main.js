---
layout: ""
---
"use strict";

function modifyHeaderRule() {
  var factor = 0.786;
  var windowWidth = window.innerWidth;
  var width = Math.floor(windowWidth * factor);
  var margin = (windowWidth - width) / 2;
  TweenLite.set(CSSRulePlugin.getRule('body > header'),
    {cssRule: {width:width, marginTop:margin, marginBottom:margin}});
}

function modifyCardRule() {
  var factor = 0.786;
  var quantum = 36;
  var windowWidth = window.innerWidth;
  var width = Math.floor(windowWidth * factor);
  var padding = 18;
  if (width >= 480) { width = 480; padding = 36; }
  if (windowWidth <= 480) { width = windowWidth - 8; }
  TweenLite.set(CSSRulePlugin.getRule('.card'),
    {cssRule: {width:width+"px", padding:padding+"px"}});
  TweenLite.set(CSSRulePlugin.getRule('.area'),
    {cssRule: {width:width+"px", padding:padding+"px"}});
}

function modifyAttributesRule() {
  var factor = 0.786;
  var quantum = 36;
  var windowWidth = window.innerWidth;
  var width = Math.floor(windowWidth * factor);
  if (width >= 480) width = 480;
  var marginWidth = Math.floor( (windowWidth - width) / 2 );
  var rule = CSSRulePlugin.getRule('attributes');
  if (marginWidth >= 120) {
    TweenLite.set(rule, {cssRule: {width:"120px", marginRight:-120-36+"px",
      textAlign:"left"}});
    document.querySelectorAll('.card > attributes')
    .forEach( function(card) {
      TweenLite.set(card, {color:"#fffaec"});
    });
  } else {
    TweenLite.set(rule, {cssRule: {width:"auto", marginRight:"0px",
      textAlign:"right"}});
    document.querySelectorAll('.card > attributes')
    .forEach( function(card) {
      TweenLite.set(card, {color:"#262b2f"});
    });
  }
}

window.onresize = function() {
  modifyHeaderRule();
  modifyCardRule();
  modifyAttributesRule();
};

window.onload = function() {
  modifyHeaderRule();
  modifyCardRule();
  modifyAttributesRule();
};
