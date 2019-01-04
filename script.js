


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

  // FINAL NAVBAR PRUEBAS


  // EFECTO HOVER PRUEBAS


  
//This makes the rest of the Navbar dissapear when you hover over 'Contact'
$('#navbarContact').hover(function(){
  $('#navbarSocialMedia').addClass('fadeOut');
  $('#navbarMyProjects').addClass('fadeOut');
  $('#navbarAboutMe').addClass('fadeOut');
  }, function(){
  $('#navbarSocialMedia').removeClass('fadeOut');
  $('#navbarSocialMedia').addClass('fadeIn');
  $('#navbarMyProjects').removeClass('fadeOut');
  $('#navbarMyProjects').addClass('fadeIn');
  $('#navbarAboutMe').removeClass('fadeOut');
  $('#navbarAboutMe').addClass('fadeIn');
});


//This makes the rest of the Navbar dissapear when you hover over 'Social Media'
$('#navbarSocialMedia').hover(function(){
  $('#navbarContact').addClass('fadeOut');
  $('#navbarMyProjects').addClass('fadeOut');
  $('#navbarAboutMe').addClass('fadeOut');
  }, function(){
  $('#navbarContact').removeClass('fadeOut');
  $('#navbarContact').addClass('fadeIn');
  $('#navbarMyProjects').removeClass('fadeOut');
  $('#navbarMyProjects').addClass('fadeIn');
  $('#navbarAboutMe').removeClass('fadeOut');
  $('#navbarAboutMe').addClass('fadeIn');
});


//This makes the rest of the Navbar dissapear when you hover over 'My Projects'
$('#navbarMyProjects').hover(function(){
  $('#navbarContact').addClass('fadeOut');
  $('#navbarSocialMedia').addClass('fadeOut');
  $('#navbarAboutMe').addClass('fadeOut');
  }, function(){
  $('#navbarContact').removeClass('fadeOut');
  $('#navbarContact').addClass('fadeIn');
  $('#navbarSocialMedia').removeClass('fadeOut');
  $('#navbarSocialMedia').addClass('fadeIn');
  $('#navbarAboutMe').removeClass('fadeOut');
  $('#navbarAboutMe').addClass('fadeIn');
});


//This makes the rest of the Navbar dissapear when you hover over 'About Me'
$('#navbarAboutMe').hover(function(){
  $('#navbarContact').addClass('fadeOut');
  $('#navbarSocialMedia').addClass('fadeOut');
  $('#navbarMyProjects').addClass('fadeOut');
  }, function(){
  $('#navbarContact').removeClass('fadeOut');
  $('#navbarContact').addClass('fadeIn');
  $('#navbarSocialMedia').removeClass('fadeOut');
  $('#navbarSocialMedia').addClass('fadeIn');
  $('#navbarMyProjects').removeClass('fadeOut');
  $('#navbarMyProjects').addClass('fadeIn');
});



  