// build time:Wed Oct 28 2020 01:16:24 GMT+0800 (中国标准时间)
var tape=require("tape");var uniqueid=require("../../lib/uniqueid.js");tape("test uniqueid",function(e){var u=uniqueid();var i=uniqueid();e.notEqual(u,i,"Two calls to uniqueid produce different values");e.end()});
//rebuild by neat 