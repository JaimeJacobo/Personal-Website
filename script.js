


document.onload = setTimeout(() =>{
  $('.introductionText').addClass('fadeOut');
},3000)


// NAVBAR PRUEBAS

$(window).scroll(function() {
  // 100 = The point you would like to fade the nav in.
    
    if ($(window).scrollTop() > 100 ){
      
       $('.bg').addClass('showNav');
      
    } else {
      
      $('.bg').removeClass('showNav');
      
     };   	
  });
  
  $('.scroll').on('click', function(e){		
      e.preventDefault()
      
    $('html, body').animate({
        scrollTop : $(this.hash).offset().top
      }, 3000);
  });
  