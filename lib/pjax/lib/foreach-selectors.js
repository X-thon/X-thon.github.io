// build time:Thu Apr 16 2020 16:34:29 GMT+0800 (中国标准时间)
var forEachEls=require("./foreach-els");module.exports=function(e,o,r,c){c=c||document;e.forEach(function(e){forEachEls(c.querySelectorAll(e),o,r)})};
//rebuild by neat 