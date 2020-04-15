// build time:Thu Apr 16 2020 03:33:24 GMT+0800 (中国标准时间)
var attrState="data-pjax-state";module.exports=function(t){switch(t.tagName.toLowerCase()){case"a":if(!t.hasAttribute(attrState)){this.attachLink(t)}break;case"form":if(!t.hasAttribute(attrState)){this.attachForm(t)}break;default:throw"Pjax can only be applied on <a> or <form> submit"}};
//rebuild by neat 