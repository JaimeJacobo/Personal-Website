


document.onload = setTimeout(() =>{
  $('.introductionText').addClass('fadeOut');
},3000)

document.onload = setTimeout(() =>{
  $('.introductionText').removeClass('fadeOut');
  $('.introductionText').html('Jaime Jacobo');
  $('.introductionText').addClass('biggerFont');
  $('.introductionText').addClass('fadeIn');
  // $('#titleDiv').html('<h2>Web Developer</h2><h2>Web Designer</h2>');
  $('#titleDiv').addClass('fadeIn2');
},4000)


  $('.typewrite').removeClass('hide');



// document.onload = setTimeout(()=>{
//   $('#titleDiv').html('<h2>Web Developer</h2><h2>Web Designer</h2>');
//   $('#titleDiv').addClass('fadeIn');
// },5000)


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


// This makes the java image to change from black and white to the colored version
$('#javaLogo').hover(function(){
  // $('#javaLogo').attr('src', 'javaLogo.png');
  $('#javaLogoText').removeClass('blackFont');
  $('#javaLogoText').addClass('whiteFont');
  }, function(){
  // $('#javaLogo').attr('src', 'javaLogoBW.png');
  $('#javaLogoText').removeClass('whiteFont');
  $('#javaLogoText').addClass('blackFont');
});


// This makes the sass image to change from black and white to the colored version
$('#sassLogo').hover(function(){
  // $('#sassLogo').attr('src', 'sassLogo.png');
  $('#sassLogoText').removeClass('blackFont');
  $('#sassLogoText').addClass('whiteFont');
  }, function(){
  // $('#sassLogo').attr('src', 'sassLogoBW.png');
  $('#sassLogoText').removeClass('whiteFont');
  $('#sassLogoText').addClass('blackFont');
});


// This makes the python image to change from black and white to the colored version
$('#pythonLogo').hover(function(){
  // $('#pythonLogo').attr('src', 'pythonLogo.png');
  $('#pythonLogoText').removeClass('blackFont');
  $('#pythonLogoText').addClass('whiteFont');
  }, function(){
  // $('#pythonLogo').attr('src', 'pythonLogoBW.png');
  $('#pythonLogoText').removeClass('whiteFont');
  $('#pythonLogoText').addClass('blackFont');
});




// Functions to change the language of the page

$('.spanish').hide();

$('#spanishPage').click(()=>{
  $('.english').hide();
  $('.spanish').show();
})

$('#englishPage').click(()=>{
  $('.spanish').hide();
  $('.english').show();
})



  // PRUEBAS AUTO WRITTER

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = setTimeout(() => {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
},4000);





// window.onload = function() {
//   var elements = document.getElementsByClassName('typewrite');
//   for (var i=0; i<elements.length; i++) {
//       var toRotate = elements[i].getAttribute('data-type');
//       var period = elements[i].getAttribute('data-period');
//       if (toRotate) {
//         new TxtType(elements[i], JSON.parse(toRotate), period);
//       }
//   }
//   // INJECT CSS
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//   document.body.appendChild(css);
// };
  
