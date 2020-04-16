// build time:Thu Apr 16 2020 23:12:37 GMT+0800 (中国标准时间)
var tape=require("tape");var noop=require("../../../lib/util/noop");tape("test noop function",function(n){n.equal(typeof noop,"function","noop is a function");n.equal(noop(),undefined,"noop() returns nothing");n.end()});
//rebuild by neat 