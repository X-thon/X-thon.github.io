// build time:Sat Apr 18 2020 01:05:07 GMT+0800 (中国标准时间)
var tape=require("tape");var isSupported=require("../../lib/is-supported.js");tape("test isSupported method",function(e){e.true(isSupported(),"well, we run test on supported browser, so it should be ok here");e.end()});
//rebuild by neat 