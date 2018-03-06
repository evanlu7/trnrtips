$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 50) {
                    $("nav").css('background-color', 'white');
                    $("nav a").css('color', 'black');
                } else {
                    $("nav").css('background-color', 'transparent');
                    $("nav a").css('color', 'white');
                }
            });
});

$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 90) {
                    $(".social").addClass("animated bounceIn");
                } else {
                  $(".social").addClass("");
                }
            });

$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                
                if(scroll_pos > 50) {
                    $("button").css('background-color', '');
                    $("button").addClass('animated flip');
                    $("button").addClass('visibility: visible');
            
                } else {
                    $("button").css('background-color', '');
                    $("button").addClass('');
                }
            });
        });
            
});


