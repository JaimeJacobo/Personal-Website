


  $('#top').hide();

  document.onload = setTimeout(() =>{
    $('#top').show();
  },500)

document.onload = setTimeout(() =>{
  $('.introductionText').addClass('fadeOut');
},3000)

document.onload = setTimeout(() =>{
  $('.introductionText').removeClass('fadeOut');
  $('.introductionText').html('Jaime Jacobo');
  $('.introductionText').addClass('biggerFont');
  $('.introductionText').addClass('fadeIn');
},4000)


// NAVBAR PRUEBAS

$(window).scroll(function() {
  // 100 = The point you would like to fade the nav in.
    
  if ($(window).scrollTop() == 100 ){
      
      // $('.bg').addClass('showNav');
      console.log('bubucela')
      
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


// This makes the blackjack image to change from black and white to the colored version
$('#blackjackImage').hover(function(){
  $('#blackjackImage').attr('src', 'blackjack.png');
  }, function(){
  $('#blackjackImage').attr('src', 'blackjackBW.png');
});


// This makes the mylyquotes image to change from black and white to the colored version
$('#myLyQuotesImage').hover(function(){
  $('#myLyQuotesImage').attr('src', 'mylyquotes.png');
  }, function(){
  $('#myLyQuotesImage').attr('src', 'mylyquotesBW.png');
});


// This makes the letsgoflorida image to change from black and white to the colored version
$('#letsGoFloridaImage').hover(function(){
  $('#letsGoFloridaImage').attr('src', 'letsgoflo.png');
  }, function(){
  $('#letsGoFloridaImage').attr('src', 'letsgofloBW.png');
});


// This makes the javascript image to change from black and white to the colored version
$('#javascriptLogo').hover(function(){
  $('#javascriptLogo').attr('src', 'javascriptLogo.jpg');
  $('#javascriptLogoText').removeClass('blackFont');
  $('#javascriptLogoText').addClass('whiteFont');
  }, function(){
  $('#javascriptLogo').attr('src', 'javascriptLogoBW.jpg');
  $('#javascriptLogoText').removeClass('whiteFont');
  $('#javascriptLogoText').addClass('blackFont');
});


// This makes the css image to change from black and white to the colored version
$('#cssLogo').hover(function(){
  $('#cssLogo').attr('src', 'cssLogo.png');
  $('#cssLogoText').removeClass('blackFont');
  $('#cssLogoText').addClass('whiteFont');
  }, function(){
  $('#cssLogo').attr('src', 'cssLogoBW.png');
  $('#cssLogoText').removeClass('whiteFont');
  $('#cssLogoText').addClass('blackFont');
});
  