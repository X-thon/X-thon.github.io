// build time:Sat Apr 18 2020 01:17:15 GMT+0800 (中国标准时间)
var forEachEls=require("../foreach-els");module.exports=function(e,o,r,n){o=typeof o==="string"?o.split(" "):o;o.forEach(function(o){forEachEls(e,function(e){e.addEventListener(o,r,n)})})};
//rebuild by neat 