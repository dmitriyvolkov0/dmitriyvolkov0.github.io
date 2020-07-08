let active=0;

$('#menu_button').click(function(){
    $(".submenu").animate({
        height: "toggle"
    }, 200, function () {
            if (active == 0){
                $('#menu_button').css({
                    'transform': 'rotate(360deg)',
                    'background':'url("../BuhOne/") center center no-repeat',
                    'backgroundSize': 'contain',
                    'transition': '0.3s'
                });
                active=1;
            }else{
                $('#menu_button').css({
                    'transform': 'rotate(0deg)',
                    'background': 'url("../BuhOne/img/menu_but.png") center center no-repeat',
                    'backgroundSize': 'contain',
                    'transition': '0.3s'
                });
                active=0;
            }
    });
    
    
    
});




// $("#menu_button").animate({
    
// }, 200, function () {
//     // Animation complete.
// });

