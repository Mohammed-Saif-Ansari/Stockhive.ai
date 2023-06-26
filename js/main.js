//for responsive toggle button for header

$('#open-menu').click(function(){
    $('#mobile-menu').show(function(){
     $(this).css('transform', 'translateX(0)')
    });
   })
 
   $('.header-responsive-button-menu').click(function(){
     $('#mobile-menu').css('transform', 'translateX(-100%)');
     // setTimeout(() => {
     //   $('#mobile-menu').hide(function(){
     // }, 300);
     // });
    })
 
   $('.header-responsive-hidden-menu').click(function(e){
     e.stopPropagation();
   })



   $(document).ready(function () {
     $('.active').slideToggle();
     $('.active').parent().removeClass('gray');
     $('.accordion-header-1').removeClass('gray');

    $('.accordion-header').click(function () {
        // Toggle the visibility of the clicked section's content
        $(this).next('.accordion-content').slideToggle();

        // Collapse all other sections except the clicked one
        $('.accordion-content').not($(this).next()).slideUp();
      });
    });


$(document).ready(function() {
  // Initially hide section-4-bottom-data-2
  $('.section-4-bottom-data-2').hide();
  $('.section-4-button-1').removeClass('gray');

  // Button click event for section-4-button-1
  $('.section-4-button-1 button').click(function() {
    $('.section-4-button-1').removeClass('gray');
    $('.section-4-button-2').addClass('gray');
    $('.section-4-bottom-data-2').hide();
    $('.section-4-bottom-data-1').show();
  });

  // Button click event for section-4-button-2
  $('.section-4-button-2 button').click(function() {
    $('.section-4-button-2').removeClass('gray');
    $('.section-4-button-1').addClass('gray');
    $('.section-4-bottom-data-1').hide();
    $('.section-4-bottom-data-2').show();
  });
});


$(document).ready(function() {
  $('.accordion-section').click(function() {
    $('.accordion-section').not($(this)).addClass('gray');
    $('.accordion-header').not($(this).find('.accordion-header')).addClass('gray');
    $(this).removeClass('gray');
    $(this).find('.accordion-header').removeClass('gray');
  });
});


$(document).ready(function() {
  function toggleImages() {
    $('#section1-img-1').fadeToggle(100, "linear");
    $('#section1-img-2').fadeToggle(100, "linear");
  }

  // Initially hide the second image
  $('#section1-img-2').hide();

  setInterval(toggleImages, 3000);
});


$(document).ready(function() {
  function toggleColor() {
    $('.word1, .word4').removeClass('yellow');
    $('.word2, .word3').addClass('yellow');
    setTimeout(function() {
      $('.word2, .word3').removeClass('yellow');
      $('.word1, .word4').addClass('yellow');
    }, 2000);
  }

  setInterval(toggleColor, 4000);
});







$(document).ready(function() {
  // Add click event handler to slides
  $('.section-5-slider .change-slider').click(function() {
    // Remove the 'active-slider' class from all slides
    $('.section-5-slider .change-slider').removeClass('active-slider');
    
    // Add the 'active-slider' class to the clicked slide
    $(this).addClass('active-slider');
  });

  // Add click event handler to left button
  $('#left-button-slider').click(function() {
    var activeSlide = $('.section-5-slider .active-slider');
    var prevSlide = activeSlide.prev('.change-slider');

    if (prevSlide.length > 0) {
      activeSlide.removeClass('active-slider');
      prevSlide.addClass('active-slider');
    }
  });

  // Add click event handler to right button
  $('#right-button-slider').click(function() {
    var activeSlide = $('.section-5-slider .active-slider');
    var nextSlide = activeSlide.next('.change-slider');

    if (nextSlide.length > 0) {
      activeSlide.removeClass('active-slider');
      nextSlide.addClass('active-slider');
    }
  });
});



// responsive slider

$(document).ready(function() {
  var currentSlide = 0;
  var totalSlides = $('.slide').length;

  function showSlide(index) {
    $('.slide').removeClass('active');
    $('.slide').eq(index).addClass('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  $('#nextBtn').click(nextSlide);
  $('#prevBtn').click(prevSlide);

  showSlide(currentSlide);
});












