window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }

    $(document).ready(function(){


        let $btns = $('.portfolio-area .button-group button');
        
        $btns.click(function(e){
        
            $('.portfolio-area .button-group button').removeClass('active');
            e.target.classList.add('active');
        
            let selector = $(e.target).attr('data-filter');
            $('.portfolio-area .grid').isotope({
                filter : selector
            });
        
            return false;
        })
        
        $('.portfolio-area .button-group #btn1').trigger('click');
        
        $('.portfolio-area .grid .test-popup-link').magnificPopup({
            type: 'image',
            gallery:{enabled:true}
          });
        
        
          // Owl-Carousel
        
           $('.site-main .info-area .owl-carousel').owlCarousel({
              loop:true,
              autoplay:true,
              dots:true,
              items: 1,
          })
        
        
          // sticky nav menu
        
          let nav_offset_top =$('.header_area').height() + 50;
        
          function navbarFixed(){
              if($('.header_area').length){
                  $(window).scroll(function(){
                      let scroll = $(window).scrollTop();
                      if(scroll >= nav_offset_top){
                          $('.header_area .main-menu').addClass('navbar_fixed');
                      }else{
                        $('.header_area .main-menu').removeClass('navbar_fixed');
                      }
                  })
              }
          }
        
          navbarFixed();
        
        
        });
}