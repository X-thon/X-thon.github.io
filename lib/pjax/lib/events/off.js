// build time:Thu Apr 16 2020 03:29:03 GMT+0800 (中国标准时间)
var forEachEls=require("../foreach-els");module.exports=function(e,o,r,n){o=typeof o==="string"?o.split(" "):o;o.forEach(function(o){forEachEls(e,function(e){e.removeEventListener(o,r,n)})})};
//rebuild by neat 