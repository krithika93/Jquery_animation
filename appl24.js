$(document).ready(function() 
{
var open=false;
var active;
var previous;
var temp;
var active1;
var previous1;
var activeimg;
var activeimg1;
var close=false;
var zoom=false;
var tar;
var k;
var k1;
var move=false;
var h;

$("#dream").find('.door').addClass('close');
$('.door').click(function () 
                   {

if(zoom == true )
{
return false;


}
if(open !=true)
{
 active=$(this).attr('data-target');
active=parseInt(active);
if(active % 2 == 0)
{
active1=active + 1;
}
else
{
temp=active;
active = active-1;
active1= temp;
}
open=true;
  }
else
{  
 

previous=active;
 previous1=active1;
 active=$(this).attr('data-target');
active=parseInt(active);

if(active % 2 == 0)
{
active1=active + 1;
}
else
{
temp=active;
active = active-1;
active1= temp;
}



if( previous != active && move==false)  
{


if( previous==activeimg && !($("#dream").find('.door').eq(activeimg).hasClass('close')) && $("#dream").find('.door').eq(activeimg).hasClass('imag')  )
{
$("#dream").find('.door').eq(previous).addClass('close').toggleClass('rotated'); 
$("#dream").find('.door').eq(previous1).addClass('close').toggleClass('rotated1');
//activeimg=9;
} 


if( !($("#dream").find('.door').eq(previous).hasClass('imag')) && !($("#dream").find('.door').eq(previous).hasClass('imag1')) ) 
{ 

$("#dream").find('.door').eq(previous).addClass('close').toggleClass('rotated');
$("#dream").find('.door').eq(previous1).addClass('close').toggleClass('rotated1');
}
if($("#dream").find('.door').eq(previous).hasClass('imag1') && !($("#dream").find('.door').eq(previous).hasClass('close')) )
{
$("#dream").find('.door').eq(previous).addClass('close').toggleClass('rotated'); //add class or remove class
$("#dream").find('.door').eq(previous1).addClass('close').toggleClass('rotated1');
}
}
}

if( previous != active) 
{

if($("#dream").find('.door').eq(active).hasClass('imag'))
{
$("#dream").find('.door').eq(active).removeClass('imag').removeClass('close');
$("#dream").find('.door').eq(active1).removeClass('imag').removeClass('close');

}

if($("#dream").find('.door').eq(active).hasClass('imag1'))
{

$("#dream").find('.door').eq(active).removeClass('imag1').removeClass('close');
$("#dream").find('.door').eq(active1).removeClass('imag1').removeClass('close');
}
$("#dream").find('.door').eq(active).removeClass('close').toggleClass('rotated');
$("#dream").find('.door').eq(active1).removeClass('close').toggleClass('rotated1');
}

if(previous == active && previous1 == active1 )
{
//if(activeimg == active)
//{
//activeimg=9;
//}
$("#dream").find('.door').eq(previous).toggleClass('close').addClass('imag1').toggleClass('rotated');
$("#dream").find('.door').eq(previous1).toggleClass('close').addClass('imag1').toggleClass('rotated1');
}
}  
);
$(window).bind('scroll', function() {
/* Display the Top Menu */

});

$('.img1').click(function()
{
//$('HTML,body').scroll(false);
//window.scrollTo(0,0);
//$(this).offset().top;
//event.preventDefault();


	
tar=$(this).attr('data-target');
tar=parseInt(tar);
//make activeimg false after k assign //some image click
if( zoom == true || move==true || ($("#dream").find('.door').eq(tar).hasClass('close'))||(activeimg == tar && ($("#dream").find('.door').eq(tar).hasClass('close'))) || open == false) 
{
return false;
}
 activeimg=tar;
 
activeimg1=activeimg+1;

	zoom=true; 
	$("#dream").find('.door').eq(activeimg).hide();
	$("#dream").find('.door').eq(activeimg1).hide();
	$(this).closest("li").css('z-index',1000);
	$(this).closest("li").animate({
		
	scale:'2.2',
},{queue: false, duration: 'fast',
specialEasing: {
scale: "linear",
},

});

setTimeout(function() {
$("#dream").find('.close1').filter("[data-target="+activeimg+"]").css('display','inline-block');
},1000);

}
);
$('.close1').click(function()
{
	$(this).closest("li").animate({
	scale:'1'
},{queue: false, duration: 'fast',
specialEasing: {
scale: "linear",
},

} );
$(this).closest("li").css('z-index',1);
$(this).hide();
zoom=false;
move=true;
k=activeimg;
k1=activeimg1;
h=setTimeout(function(){hello();},1500);

}
);
function hello()
{



//modify the code to see if it works


//$("#dream").find('.door').eq(k1).removeClass('close');
//$("#dream").find('.door').eq(k).removeClass('close');

if(previous == activeimg && move==true && active!=previous  )
{

$("#dream").find('.door').eq(k).show('fast').toggleClass('rotated').addClass('imag').addClass('close'); // how many times to toggle
$("#dream").find('.door').eq(k1).show('fast').toggleClass('rotated1').addClass('imag').addClass('close');
}
else
{
$("#dream").find('.door').eq(k).show('fast').addClass('imag');
$("#dream").find('.door').eq(k1).show('fast').addClass('imag');
}




clearTimeout(h);
move=false;
}
}
);