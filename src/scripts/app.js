$(function() {
  $('.toggle-nav').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleNav();
  });

  $(window).scroll(function(){
    scrollFunction();
  })
});


function toggleNav() {
  if ($('#app-wrapper').hasClass('show-nav')) {
    $('#app-wrapper').removeClass('show-nav');
  } else {
    $('#app-wrapper').addClass('show-nav');
  }
}

function scrollFunction() {
  var firstSection = $('.section.first').height();
  console.log(firstSection);
  if ($(this).scrollTop() > firstSection) {
    $('.c-nav').addClass('show');
  } else {
      $('.c-nav').removeClass('show');
  }

}

$(document).keyup(function() {
  if (e.keyCode == 27) {
    if ($('#app-wrapper').hasClass('show-nav')) {
      toggleNav();
    }
  } 
  });