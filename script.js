

document.addEventListener('DOMContentLoaded', function () {

  new Swiper('.image-slider', {
    //стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    //бесконечная прокрутка
    loop: true,
    //скорость
    speed: 1500,
    //Количество слайдов для показа
    slidesPerView: 3,
    //Автопрокрутка 
    autoplay: {
      delay: 1000,
    },
    simulateTouch: true,
  });

})
document.addEventListener('DOMContentLoaded', function () {
  Array.from(document.getElementsByClassName('header__body')).forEach(function (v, i) {
    let burger = v.getElementsByClassName('header__burger')[0];
    let menu = v.getElementsByClassName('header__menu')[0];

    burger.addEventListener('click', function () {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
    })
  })
});