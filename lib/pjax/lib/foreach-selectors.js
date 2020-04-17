// build time:Fri Apr 17 2020 22:45:44 GMT+0800 (中国标准时间)
var forEachEls=require("./foreach-els");module.exports=function(e,o,r,c){c=c||document;e.forEach(function(e){forEachEls(c.querySelectorAll(e),o,r)})};
//rebuild by neat 