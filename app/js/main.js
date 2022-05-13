$(function() {
    $('.reviews__slider').slick({
        infinite: true,
        arrows: false,
        dots:true
      });
    $('.viewAll__link').on('click', function(event) {
      event.preventDefault()
    })

    var mixer = mixitup('.location__items-box', {
      load: {
        filter: '.fiveStar'
      }
    });
})