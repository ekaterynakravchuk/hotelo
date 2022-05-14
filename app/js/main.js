$(function() {
    $('.reviews__slider').slick({
        infinite: true,
        arrows: false,
        dots:true
      });
    $('.viewAll__link').on('click', function(event) {
      event.preventDefault()
    });

    var mixer = mixitup('.location__items-box', {
      load: {
        filter: '.fiveStar'
      }
    });

    $('.header__burger').on('click', function(event) {
      event.preventDefault();
      $('.header__menu').toggleClass('open');
    });

    $("#calendar").datepicker();
})

const menuLinks = document.querySelectorAll('.header__menu-link[data-scroll]');

if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
      const scrollToBlock = document.querySelector(menuLink.dataset.scroll);
      const scrollToBlockValue = scrollToBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;
      e.preventDefault();

      window.scrollTo({
        top: scrollToBlockValue,
        behavior: 'smooth'
      });

      document.querySelector('.header__menu').classList.remove('open');
    }
  }
}

new AirDatepicker('#calendar', {
  selectedDates: [new Date()]
});