// build time:Thu Apr 16 2020 22:01:43 GMT+0800 (中国标准时间)
var tape=require("tape");var isSupported=require("../../lib/is-supported.js");tape("test isSupported method",function(e){e.true(isSupported(),"well, we run test on supported browser, so it should be ok here");e.end()});
//rebuild by neat 