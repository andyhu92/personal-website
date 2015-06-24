var change = {
image:function(className,src1,src2){
$(className).on('mouseenter',function(){$(this).attr("src",src1);}).
on('mouseleave',function(){$(this).attr("src",src2);});
}};

$(document).ready(function(){
change.image('.homepage','img/base.jpg','img/base1.jpg');


$(".background").on('click',function(){
var x = Math.floor((Math.random() * 10) + 1);
var src_random = "img/background"+x+".jpg";
$(".background").attr("src",src_random);
});

$("#toolMap").on('click',function(){
$(".googlemap").fadeToggle();
$(".weather").slideUp();});
$("#toolWea").on('click',function(){
$(".weather").fadeToggle();
$(".googlemap").slideUp();});

change.image('.button','img/button2.png','img/button.png');
$(".button").on('mouseenter',function(){
$(".tool").fadeIn();})
.on('click',function(){$(".weather,.googlemap").fadeOut();});
$(".tool").on("click",function(){$(".tool").fadeOut();})
.on("mouseenter",function(){$(".tool").fadeIn();});
$(".TK").on('mouseleave',function(){
$(".tool").fadeOut();})

$(".photos").on('click',function(){
alert("Hello");
});


});


