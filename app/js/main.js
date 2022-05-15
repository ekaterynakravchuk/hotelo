$(function () {
  $('.reviews__slider').slick({
    infinite: true,
    arrows: false,
    dots: true
  });
  $('.viewAll__link').on('click', function (event) {
    event.preventDefault()
  });

  var mixer = mixitup('.location__items-box', {
    load: {
      filter: '.fiveStar'
    }
  });

  $('.header__burger').on('click', function (event) {
    event.preventDefault();
    $('.header__menu').toggleClass('open');
  });
})

// scroll
const menuLinks = document.querySelectorAll('.header__menu-link[data-scroll]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
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

// calendar
new AirDatepicker('#calendar', {
  selectedDates: [new Date()],
  minDate: [new Date()],
  autoClose: true
});

// select guests list
document.querySelectorAll('.booking__form-select').forEach(function (selectWrapper) {
  const openBtn = selectWrapper.querySelector('.booking__select-btn');
  const openList = selectWrapper.querySelector('.booking__form-list');
  const openItems = openList.querySelectorAll('.booking__form-item');
  const hiddenInput = selectWrapper.querySelector('.booking__hidden-input');

  // select list open
  openBtn.addEventListener('click', function () {
    openList.classList.toggle('open');
  });
  // select lict close
  openItems.forEach(function (formItem) {
    formItem.addEventListener('click', function () {
      openBtn.innerText = this.innerText;
      openList.classList.remove('open');
      hiddenInput.value = this.dataset.value;
    });
  });
  // select list close outside
  document.addEventListener('click', function (e) {
    if (e.target != openBtn) {
      openList.classList.remove('open');
    }
  });
});

// select country list

const countryList = document.querySelector('.booking__select-country');

fetch('https://restcountries.com/v3.1/all').then(res => {
  return res.json();
}).then(data => {
  let output = '';
  data.forEach(country => {
    output += `<option class="booking__form-item" value="${country.name.common}">${country.name.common}</option>`;
    countryList.innerHTML = output;
  });
}).catch(err => {
  console.log(err);
});