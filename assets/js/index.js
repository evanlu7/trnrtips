// makes the parallax elements
function parallaxIt() {

  // create variables
  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // on window scroll event
  $fwindow.on('scroll resize', function () {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  });

  // for each of content parallax element
  $('[data-type="content"]').each(function (index, e) {
    var $contentObj = $(this);
    var fgOffset = parseInt($contentObj.offset().top);
    var yPos;
    var speed = ($contentObj.data('speed') || 1);

    $fwindow.on('scroll resize', function () {
      yPos = fgOffset - scrollTop / speed;

      $contentObj.css('top', yPos);
    });
  });

  // for each of background parallax element
  $('[data-type="background"]').each(function () {
    var $backgroundObj = $(this);
    var bgOffset = parseInt($backgroundObj.offset().top);
    var yPos;
    var coords;
    var speed = ($backgroundObj.data('speed') || 0);

    $fwindow.on('scroll resize', function () {
      yPos = -((scrollTop - bgOffset) / speed);
      coords = '40% ' + yPos + 'px';

      $backgroundObj.css({
        backgroundPosition: coords
      });
    });
  });

  // triggers winodw scroll for refresh
  $fwindow.trigger('scroll');
};

parallaxIt();

$(document).ready(function () {

  $.get('/users/name', function (res) {
    if (!res.firstname && !res.username) {
      $("#nameDisp").text('Welcome!');
    } else {
      if (res.firstname) {
        if (res.lastname) {
          $("#nameDisp").text(res.firstname + " " + res.lastname);
        } else {
          $("#nameDisp").text(res.firstname);
        }
      } else {
        $('#nameDisp').text(res.username);
      }
    }

    if (!res.firstname && !res.username) {
      $('.logout').attr('href','/login');
      $('.logout').text('Login');
    } else {
      $('.logout').attr('href','/users/sign-out');
      $('.logout').text('Logout');
    }
  });




// bubble js

$('.slider').each(function() {              // For every slider
  var $this   = $(this);                    // Current slider
  var $group  = $this.find('.slide-group'); // Get the slide-group (container)
  var $slides = $this.find('.slide');       // Create jQuery object to hold all slides
  var buttonArray  = [];                    // Create array to hold navigation buttons
  var currentIndex = 0;                     // Hold index number of the current slide
  var timeout;                              // Sets gap between auto-sliding

  function move(newIndex) {          // Creates the slide from old to new one
    var animateLeft, slideLeft;      // Declare variables

    advance();                       // When slide moves, call advance() again

    // If it is the current slide / animating do nothing
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }

    buttonArray[currentIndex].removeClass('active'); // Remove class from item
    buttonArray[newIndex].addClass('active');        // Add class to new item

    if (newIndex > currentIndex) {   // If new item > current
      slideLeft = '100%';            // Sit the new slide to the right
      animateLeft = '-100%';         // Animate the current group to the left
    } else {                         // Otherwise
      slideLeft = '-100%';           // Sit the new slide to the left
      animateLeft = '100%';          // Animate the current group to the right
    }
    // Position new slide to left (if less) or right (if more) of current
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() {    // Animate slides and
      $slides.eq(currentIndex).css( {display: 'none'} ); // Hide previous slide      
      $slides.eq(newIndex).css( {left: 0} ); // Set position of the new item
      $group.css( {left: 0} );               // Set position of group of slides
      currentIndex = newIndex;               // Set currentIndex to the new image
    });
  }

  function advance() {                     // Used to set 
    clearTimeout(timeout);                 // Clear previous timeout
    timeout = setTimeout(function() {      // Set new timer
      if (currentIndex < ($slides.length - 1)) { // If slide < total slides
        move(currentIndex + 1);            // Move to next slide
      } else {                             // Otherwise
        move(0);                           // Move to the first slide
      }
    }, 4000);                              // Milliseconds timer will wait
  }

  $.each($slides, function(index) {
    // Create a button element for the button
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {    // If index is the current item
      $button.addClass('active');    // Add the active class
    }
    $button.on('click', function() { // Create event handler for the button
      move(index);                   // It calls the move() function
    }).appendTo('.slide-buttons');   // Add to the buttons holder
    buttonArray.push($button);       // Add it to the button array
  });

  advance();                          // Script is set up, advance() to move it


});



});

// $(document).ready(function(){       
//             var scroll_pos = 0;
//             $(document).scroll(function() { 
//                 scroll_pos = $(this).scrollTop();
//                 if(scroll_pos > 50) {
//                     $("nav").css('background-color', 'white');
//                     $("nav a").css('color', 'black');
//                 } else {
//                     $("nav").css('background-color', 'transparent');
//                     $("nav a").css('color', 'white');
//                 }
//             });
//         });


// $(document).ready(function(){       
//             var scroll_pos = 0;
//             $(document).scroll(function() { 
//                 scroll_pos = $(this).scrollTop();
//                 if(scroll_pos > 50) {
//                     $("nav").css('background-color', 'transparent');
//                     $("nav a").css('color', 'black');
//                 } else {
//                     $("nav").css('background-color', 'black');
//                     $("nav a").css('color', 'white');
//                 }
//             });
//         });