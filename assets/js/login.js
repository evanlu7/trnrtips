


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


