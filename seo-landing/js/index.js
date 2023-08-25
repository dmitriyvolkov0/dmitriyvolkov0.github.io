// wow js
$(document).ready(()=>{
    new WOW().init();
});


// spoilers
function toggleSpoiler(id){
    $('#'+id +' .type-block-1__spoiler-body').animate({
        'opacity': 'toggle',
        'height':'toggle'
    });
    if($('#'+id +' .type-block-1__spoiler-body').css('opacity') == 1){
      $('#'+id +' .type-block-1__spoiler-header span').text('Развернуть описание');
    }else{
      $('#'+id +' .type-block-1__spoiler-header span').text('Свернуть описание');

    }
}

// ===== sliders =====
// price slider
$('.price__items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// works slider
var window_width = window.innerWidth,
    activeWorkSlider = false;
  
function setWorkSlider(){
  if( window_width <= 576 && !activeWorkSlider){
    activeWorkSlider = true;
    $('.work__items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      rows: 2
    });
  }else if(window_width > 576 && activeWorkSlider){
    $('.work__items').slick('unslick');
    activeWorkSlider = false;
  }
}
    
$(window).resize(()=>{
  window_width = window.innerWidth;
  setWorkSlider();
});

setWorkSlider();

// seo slider
$('.seo__items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
});

// leader steps (tabs)
$(document).ready(()=>{
  // Скрываем все табы и выводим только первый
  var first_tab_id = $('.tabs')[0].getAttribute('id');
  $('.tabs').animate({'opacity':'hide', 'height': 'hide'}, 0);
  $('#'+first_tab_id).animate({'opacity':'show', 'height': 'show'}, 0);
});

function showStepTab(id, e){
  // Добавляем класс active-step к активному табу
  $('.leader__steps-ul li').removeClass('active-step');
  e.classList.add('active-step');

  // Показываем тело таба
  $('.tabs').animate({'opacity':'hide', 'height': 'hide'}, 0);
  $('#'+id).animate({'opacity':'show', 'height': 'hide'});
}


// warranty slider
$('.warranty__items').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
});

// warranty tab
$(document).ready(()=>{
  // Скрываем все табы и выводим только первый
  var first_tab_id = $('.warranty__tab')[0].getAttribute('id');
  $('.warranty__tab').animate({'opacity':'hide', 'height': 'hide'}, 0);
  $('#'+first_tab_id).animate({'opacity':'show', 'height': 'show'}, 0);
});

function showWarrantyTab(id, e){
  // Добавляем класс active-step к активному табу
  $('.warranty__item').removeClass('active-warranty');
  e.classList.add('active-warranty');

  // Показываем тело таба
  $('.warranty__tab').animate({'opacity':'hide', 'height': 'hide'}, 0);
  $('#'+id).animate({'opacity':'show', 'height': 'hide'});
}