!function(){function e(e,n){for(var t in n)e[t]=n[t];return e}window.jasmine=jasmineRequire.core(jasmineRequire),jasmineRequire.html(jasmine);var n=jasmine.getEnv(),t=jasmineRequire.interface(jasmine,n);"undefined"==typeof window&&"object"==typeof exports?e(exports,t):e(window,t);var i=new jasmine.QueryString({getWindowLocation:function(){return window.location}}),o=i.getParam("catch");n.catchExceptions(void 0===o||o);var r=new jasmine.HtmlReporter({env:n,onRaiseExceptionsClick:function(){i.setParam("catch",!n.catchingExceptions())},getContainer:function(){return document.body},createElement:function(){return document.createElement.apply(document,arguments)},createTextNode:function(){return document.createTextNode.apply(document,arguments)},timer:new jasmine.Timer});n.addReporter(t.jsApiReporter),n.addReporter(r);var a=new jasmine.HtmlSpecFilter({filterString:function(){return i.getParam("spec")}});n.specFilter=function(e){return a.matches(e.getFullName())},window.setTimeout=window.setTimeout,window.setInterval=window.setInterval,window.clearTimeout=window.clearTimeout,window.clearInterval=window.clearInterval;var c=window.onload;window.onload=function(){c&&c(),r.initialize(),n.execute()}}();