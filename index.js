window.addEventListener('scroll', scrollFunc);

function scrollFunc() {
  var windowScroll = this.scrollY; 

  var $logo = document.getElementsByClassName('main')[0];
  $logo.style.transform = 'translateY(' + windowScroll/2 + '%)';

  var $backBird = document.getElementsByClassName('back-el')[0];
  $backBird.style.transform = 'translateY(' + windowScroll/4 + '%)';

  var $foreBird = document.getElementsByClassName('fore-el')[0];
  $foreBird.style.transform = 'translateY(-' + windowScroll/100 + '%)';

}
