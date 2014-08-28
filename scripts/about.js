$('.po').scroll(function(){
var x = $('html,body').scrollTop();
$(this).css('background-position','0% '+parseInt(-x/5)+'px');
});