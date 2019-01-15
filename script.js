


//   $('#top').hide();

//   document.onload = setTimeout(() =>{
//     $('#top').show();
//   },500)

document.onload = setTimeout(() =>{
  $('.introductionText').addClass('fadeOut');
},3000)

document.onload = setTimeout(() =>{
  $('.introductionText').removeClass('fadeOut');
  $('.introductionText').html('Jaime Jacobo');
  $('.introductionText').addClass('biggerFont');
  $('.introductionText').addClass('fadeIn');
},4000)


// // NAVBAR PRUEBAS

// $(window).scroll(function() {
//   // 100 = The point you would like to fade the nav in.
    
//   if ($(window).scrollTop() == 100 ){
      
//       // $('.bg').addClass('showNav');
//       console.log('bubucela')
      
//   } else {
      
//     $('.bg').removeClass('showNav');
      
//     };   	
// });
  
//   $('.scroll').on('click', function(e){		
//       e.preventDefault()
      
//     $('html, body').animate({
//         scrollTop : $(this.hash).offset().top
//       }, 3000);
//   });

//   // FINAL NAVBAR PRUEBAS


  // EFECTO HOVER PRUEBAS

  
// //This makes the rest of the Navbar dissapear when you hover over 'Contact'

//   $('#navbarContact').hover(function(){
//     $('#navbarSocialMedia').addClass('fadeOut');
//     $('#navbarMyProjects').addClass('fadeOut');
//     $('#navbarAboutMe').addClass('fadeOut');
//     }, function(){
//     $('#navbarSocialMedia').removeClass('fadeOut');
//     $('#navbarSocialMedia').addClass('fadeIn');
//     $('#navbarMyProjects').removeClass('fadeOut');
//     $('#navbarMyProjects').addClass('fadeIn');
//     $('#navbarAboutMe').removeClass('fadeOut');
//     $('#navbarAboutMe').addClass('fadeIn');
//   });



// //This makes the rest of the Navbar dissapear when you hover over 'Social Media'
// $('#navbarSocialMedia').hover(function(){
//   $('#navbarContact').addClass('fadeOut');
//   $('#navbarMyProjects').addClass('fadeOut');
//   $('#navbarAboutMe').addClass('fadeOut');
//   }, function(){
//   $('#navbarContact').removeClass('fadeOut');
//   $('#navbarContact').addClass('fadeIn');
//   $('#navbarMyProjects').removeClass('fadeOut');
//   $('#navbarMyProjects').addClass('fadeIn');
//   $('#navbarAboutMe').removeClass('fadeOut');
//   $('#navbarAboutMe').addClass('fadeIn');
// });


// //This makes the rest of the Navbar dissapear when you hover over 'My Projects'
// $('#navbarMyProjects').hover(function(){
//   $('#navbarContact').addClass('fadeOut');
//   $('#navbarSocialMedia').addClass('fadeOut');
//   $('#navbarAboutMe').addClass('fadeOut');
//   }, function(){
//   $('#navbarContact').removeClass('fadeOut');
//   $('#navbarContact').addClass('fadeIn');
//   $('#navbarSocialMedia').removeClass('fadeOut');
//   $('#navbarSocialMedia').addClass('fadeIn');
//   $('#navbarAboutMe').removeClass('fadeOut');
//   $('#navbarAboutMe').addClass('fadeIn');
// });


// //This makes the rest of the Navbar dissapear when you hover over 'About Me'
// $('#navbarAboutMe').hover(function(){
//   $('#navbarContact').addClass('fadeOut');
//   $('#navbarSocialMedia').addClass('fadeOut');
//   $('#navbarMyProjects').addClass('fadeOut');
//   }, function(){
//   $('#navbarContact').removeClass('fadeOut');
//   $('#navbarContact').addClass('fadeIn');
//   $('#navbarSocialMedia').removeClass('fadeOut');
//   $('#navbarSocialMedia').addClass('fadeIn');
//   $('#navbarMyProjects').removeClass('fadeOut');
//   $('#navbarMyProjects').addClass('fadeIn');
// });


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
  // $('#javascriptLogo').attr('src', 'javascriptLogo.jpg');
  $('#javascriptLogoText').removeClass('blackFont');
  $('#javascriptLogoText').addClass('whiteFont');
  }, function(){
  // $('#javascriptLogo').attr('src', 'javascriptLogoBW.jpg');
  $('#javascriptLogoText').removeClass('whiteFont');
  $('#javascriptLogoText').addClass('blackFont');
});


// This makes the css image to change from black and white to the colored version
$('#cssLogo').hover(function(){
  // $('#cssLogo').attr('src', 'cssLogo.png');
  $('#cssLogoText').removeClass('blackFont');
  $('#cssLogoText').addClass('whiteFont');
  }, function(){
  // $('#cssLogo').attr('src', 'cssLogoBW.png');
  $('#cssLogoText').removeClass('whiteFont');
  $('#cssLogoText').addClass('blackFont');
});


// This makes the react image to change from black and white to the colored version
$('#reactLogo').hover(function(){
  // $('#reactLogo').attr('src', 'reactLogo.png');
  $('#reactLogoText').removeClass('blackFont');
  $('#reactLogoText').addClass('whiteFont');
  }, function(){
  // $('#reactLogo').attr('src', 'reactLogoBW.png');
  $('#reactLogoText').removeClass('whiteFont');
  $('#reactLogoText').addClass('blackFont');
});


// This makes the react image to change from black and white to the colored version
$('#nodejsLogo').hover(function(){
  // $('#nodejsLogo').attr('src', 'nodejsLogo.png');
  $('#nodejsLogoText').removeClass('blackFont');
  $('#nodejsLogoText').addClass('whiteFont');
  }, function(){
  // $('#nodejsLogo').attr('src', 'nodejsLogoBW.png');
  $('#nodejsLogoText').removeClass('whiteFont');
  $('#nodejsLogoText').addClass('blackFont');
});


// This makes the react image to change from black and white to the colored version
$('#photoshopLogo').hover(function(){
  // $('#photoshopLogo').attr('src', 'photoshopLogo.png');
  $('#photoshopLogoText').removeClass('blackFont');
  $('#photoshopLogoText').addClass('whiteFont');
  }, function(){
  // $('#photoshopLogo').attr('src', 'photoshopLogoBW.png');
  $('#photoshopLogoText').removeClass('whiteFont');
  $('#photoshopLogoText').addClass('blackFont');
});


// This makes the bootstrap image to change from black and white to the colored version
$('#bootstrapLogo').hover(function(){
  // $('#bootstrapLogo').attr('src', 'bootstrapLogo.png');
  $('#bootstrapLogoText').removeClass('blackFont');
  $('#bootstrapLogoText').addClass('whiteFont');
  }, function(){
  // $('#bootstrapLogo').attr('src', 'bootstrapLogoBW.png');
  $('#bootstrapLogoText').removeClass('whiteFont');
  $('#bootstrapLogoText').addClass('blackFont');
});
  

// This makes the mysql image to change from black and white to the colored version
$('#mysqlLogo').hover(function(){
  // $('#mysqlLogo').attr('src', 'mysqlLogo.png');
  $('#mysqlLogoText').removeClass('blackFont');
  $('#mysqlLogoText').addClass('whiteFont');
  }, function(){
  // $('#mysqlLogo').attr('src', 'mysqlLogoBW.png');
  $('#mysqlLogoText').removeClass('whiteFont');
  $('#mysqlLogoText').addClass('blackFont');
});
  

// This makes the mongoDB image to change from black and white to the colored version
$('#mongoDBLogo').hover(function(){
  // $('#mongoDBLogo').attr('src', 'mongoDBLogo.png');
  $('#mongoDBLogoText').removeClass('blackFont');
  $('#mongoDBLogoText').addClass('whiteFont');
  }, function(){
  // $('#mongoDBLogo').attr('src', 'mongoDBLogoBW.png');
  $('#mongoDBLogoText').removeClass('whiteFont');
  $('#mongoDBLogoText').addClass('blackFont');
});


// This makes the ajax image to change from black and white to the colored version
$('#ajaxLogo').hover(function(){
  // $('#ajaxLogo').attr('src', 'ajaxLogo.png');
  $('#ajaxLogoText').removeClass('blackFont');
  $('#ajaxLogoText').addClass('whiteFont');
  }, function(){
  // $('#ajaxLogo').attr('src', 'ajaxLogoBW.png');
  $('#ajaxLogoText').removeClass('whiteFont');
  $('#ajaxLogoText').addClass('blackFont');
});


// This makes the jquery image to change from black and white to the colored version
$('#jqueryLogo').hover(function(){
  // $('#jqueryLogo').attr('src', 'jqueryLogo.png');
  $('#jqueryLogoText').removeClass('blackFont');
  $('#jqueryLogoText').addClass('whiteFont');
  }, function(){
  // $('#jqueryLogo').attr('src', 'jqueryLogoBW.png');
  $('#jqueryLogoText').removeClass('whiteFont');
  $('#jqueryLogoText').addClass('blackFont');
});


// This makes the html image to change from black and white to the colored version
$('#htmlLogo').hover(function(){
  // $('#htmlLogo').attr('src', 'htmlLogo.png');
  $('#htmlLogoText').removeClass('blackFont');
  $('#htmlLogoText').addClass('whiteFont');
  }, function(){
  // $('#htmlLogo').attr('src', 'htmlLogoBW.png');
  $('#htmlLogoText').removeClass('whiteFont');
  $('#htmlLogoText').addClass('blackFont');
});


// This makes the git image to change from black and white to the colored version
$('#gitLogo').hover(function(){
  // $('#gitLogo').attr('src', 'gitLogo.png');
  $('#gitLogoText').removeClass('blackFont');
  $('#gitLogoText').addClass('whiteFont');
  }, function(){
  // $('#gitLogo').attr('src', 'gitLogoBW.png');
  $('#gitLogoText').removeClass('whiteFont');
  $('#gitLogoText').addClass('blackFont');
});