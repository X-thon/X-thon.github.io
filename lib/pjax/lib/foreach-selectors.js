// build time:Wed Oct 28 2020 01:16:24 GMT+0800 (中国标准时间)
var forEachEls=require("./foreach-els");module.exports=function(e,o,r,c){c=c||document;e.forEach(function(e){forEachEls(c.querySelectorAll(e),o,r)})};
//rebuild by neat 