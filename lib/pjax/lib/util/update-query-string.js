// build time:Fri Apr 24 2020 22:36:22 GMT+0800 (中国标准时间)
module.exports=function(e,r,n){var t=new RegExp("([?&])"+r+"=.*?(&|$)","i");var a=e.indexOf("?")!==-1?"&":"?";if(e.match(t)){return e.replace(t,"$1"+r+"="+n+"$2")}else{return e+a+r+"="+n}};
//rebuild by neat 