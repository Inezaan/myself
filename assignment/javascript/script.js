$(function(){
    $('img').hide(); 
    $('img').show(10000);  
  
$('#im1').click(function(){
    $(this).hide();
    $(this).fadeIn(4000,'swing');
  });   

 

});

$('.choix').hover(function(){
    $(this).css('opacity','1')},

    function(){
        $(this).css('opacity','0.5')
    
});
function echange(){
    var tampon=document.getElementById("im1").getAttribute("src");

    var im1=document.getElementById("im1")
    im1.src=document.getElementById("im2").getAttribute("src");

    var im2=document.getElementById("im2")
    im2.src=document.getElementById("im3").getAttribute("src");

    var im3=document.getElementById("im3")
    im3.src=document.getElementById("im4").getAttribute("src");
   
    var im4=document.getElementById("im4")
    //im4.src=document.getElementById("im3").getAttribute("src");
    im4.src=tampon;

};
$('#im2').click(function(){
  $('#im1').hide();
//   ("slow", function(){
//      alert("The paragraph is now hidden");

var tampon=document.getElementById("im1").getAttribute("src");

var im1=document.getElementById("im1")
im1.src=document.getElementById("im2").getAttribute("src");

var im2=document.getElementById("im2")
im2.src=tampon;

$('#im1').fadeIn(10000)
})
     

    
// });
// $('#im2').click(function(){
   
// });

$('#im3').hover(function()
{
   $('#im1').animate({with:150,height:150})
   
}
// ,
// function(){
//     $('#im1').animate({with:600,height:400})
//     }

);

$('#im3').click(function()
{
    var tampon=document.getElementById("im1").getAttribute("src");

    var im1=document.getElementById("im1")
    im1.src=document.getElementById("im3").getAttribute("src");

    var im3=document.getElementById("im3")
    im3.src=tampon;
 
    $('#im1').fadeIn(400).animate({with:600,height:400});
});

$('#bouton').click(function(){
    echange();
});
$('#im4').click(function(){
   
    $(".choix").animate({left: '197px'})
    $('#im1').hide(1000);
    var tampon=document.getElementById("im1").getAttribute("src");
    var im1=document.getElementById("im1")
    im1.src=document.getElementById("im4").getAttribute("src");
    
    var im4=document.getElementById("im4")
    im4.src=tampon,

   function(){
       $('#im1').show(1000, function(){
        $(".choix").animate({right: '197px'});
        });
};

});

