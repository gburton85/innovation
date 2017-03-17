
// selected elements
var navTrigger = document.getElementById('nav-trigger');
var nav = document.getElementById('nav');
var header = document.getElementById('header');
var heading = document.getElementById('heading');
var labels = document.getElementsByClassName('nav-label');

// sizing
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var fontSize = windowHeight*0.08;
var headingSize = windowWidth*0.1;

// Event Listening
navTrigger.addEventListener('click', navToggle);
window.addEventListener('resize', resize);

function resize() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  fontSize = windowHeight*0.05;
  headingSize = windowWidth*0.1;
  if(headingSize > windowHeight*0.3) headingSize = windowHeight*0.3;

  for(var i = 0; i < labels.length; i++) {
    labels[i].style.fontSize = fontSize+'px';
    labels[i].style.height = fontSize+'px';
    labels[i].style.marginTop = '-'+fontSize*0.7+'px';
  }

}

function navToggle(e) {
  var closed = (navTrigger.className.indexOf('close') > 0);
  if(closed) {
    navTrigger.className = 'nav-trigger open';
    nav.className = 'out';
  } else {
    navTrigger.className = 'nav-trigger close';
    nav.className = 'in';
  }
}

window.onload = resize;

  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//accordian
$.fn.ashCordian = function() {

  var container = $(this);

  container.find('header').click(function() {
    if($(this).siblings('section').css('display') == 'block'){
       container.find('section').slideUp(150);
    } else {
      container.find('section').slideUp(150);
       $(this).siblings('section').slideDown(150);
    }
  });
};

//accordians
$('#accord1').ashCordian();
$('#accord2').ashCordian();
$('#accord3').ashCordian();
$('#accord4').ashCordian();
$('#accord5').ashCordian();
$('#accord6').ashCordian();
$('#accord7').ashCordian();

//scroll reveal
window.sr = ScrollReveal();
sr.reveal('h1', { duration: 800 });
sr.reveal('h2', { duration: 800 });
sr.reveal('h3', { duration: 800 });
sr.reveal('h4', { duration: 800 });
sr.reveal('.profile', { duration: 1000 });
sr.reveal('.masonry__item', { duration: 1000 }, 50);
