/*global $, alert, console*/

$(function () {
   
    'use strict';
    
    // Adjust Header Height
    
    var myHeader = $('.header'),
        
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
       
        myHeader.height($(window).height());
        
        // Adjust Bxslider List Item Center
        
        mySlider.each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

        });
        
    });
    
    // Links Add Active Class
    
    $('.links li a').click(function () {
       
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    
    // Adjust Bxslider List Item Center
    
    mySlider.each(function () {
       
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    });
    
    // Trigger The Bx Slider
    
    mySlider.bxSlider({
        
        pager: false
        
    });
    
    // Smooth Scroll To Div 
    
    $('.links li a').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
        console.log('#' + $(this).data('value'));
        
    });
    
    //our auto slider
    (function autoslider(){
       $('.slide .active').each(function(){
          if(!$(this).is(':last-child')){
              $(this).delay(3000).fadeOut(1000,function(){
                 $(this).removeClass().next().addClass('active').fadeIn(); 
                  autoslider();
              });
          } else
              {
                  $(this).delay(3000).fadeOut(1000,function(){
                     $(this).removeClass('active') ;
                      $('.slide div').eq(0).addClass('active').fadeIn();
                      autoslider();
                  });
              }
       });
    }());
    $("#container").mixItUp();
    //Adjust shuffle
    $(".shuffle").click(function(){
       $(this).addClass("selected").siblings().removeClass("selected"); 
    });
    $("body").niceScroll({
        cursorcolor:'#2ECC71',
        cursorwidth:'10px',
        cursorborder:'1px solid #2ECC71',
    });
  
    
});