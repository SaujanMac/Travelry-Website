$(document).ready(function(){

    $('.pop-carousel').owlCarousel({

        responsive: {
            1000: {
                loop: false,
                nav: false,
                autoplay: false,
                items: 4,
            },

            360: {
                loop: true,
                nav: false,
                dots: false,
                margin: 10,
                draggable: true,
                autoplay: false,
                items: 2,
                center: true,
            }
        }
    })

    $('.travel-carousel').owlCarousel({

        responsive: {
            1000: {
                loop: false,
                nav: false,
                autoplay: false,
                items: 4,
            },

            360: {
                loop: true,
                nav: false,
                dots: false,
                margin: 10,
                draggable: true,
                autoplay: false,
                items: 2,
                center: true,
            }
        }
    })

    $('.tour-carousel').owlCarousel({
        loop:true,
        // margin:10,
        nav:true,
        dots: false,
        autoplay: true,
        responsive:{
              0:{
                  items:1
              },
              360:{
                  items:1.5,
                  center: true,
                  autoplay: false,
              },
              1000:{
                  items:4
              }
    }
    })
    
    $('.rest-carousel').owlCarousel({
        loop:true,
        // margin:10,
        nav:true,
        dots: false,
        autoplay: true,
        responsive:{
              0:{
                  items:1
              },
              360:{
                  items:1.5,
                  center: true,
                  nav: false,
                  dots: false,
                  margin: 10,
                  autoplay: false,
              },
              1000:{
                  items:4
              }
    }
    })
    
      $('.reviewcard').owlCarousel({
                loop:true,
                // margin:10,
                // nav:true,
                dots: false,
                autoplay: true,
                responsive:{
                      0:{
                          items:1
                      },
                      360:{
                          items:1,
                          center: true,
                      },
                      1000:{
                          items:2
                      }
        }
    })  
})
