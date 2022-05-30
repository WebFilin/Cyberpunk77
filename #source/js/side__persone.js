var mySlider = {

   config: {
      slider: '.slider-content',
      activeSlide: '.slide.active',
      button: '.next-button',
      transition: 500,
      delay: function () { return this.transition; },
      navigation: '.control-nav',
      buttonBack: ".back-button"
   },

   init: function (config) {
      this.createNav();
      $(mySlider.config.button).
         click(function () {
            mySlider.animateSlide($(this));
         });
      $(mySlider.config.buttonBack).
         click(function () {
            mySlider.animateBackSlide($(this));
         });

   },


   getActiveSlide: function () {
      return $(mySlider.config.activeSlide);
   },

   getNextSlide: function () {

      var nextSlide = mySlider.getActiveSlide().next();

      if (nextSlide.length === 0) {

         nextSlide = $(mySlider.config.slider).find('.slide').eq(0);
      }

      return nextSlide;

   },

   getNextSlideColorAndName: function () {

      var colorAndName = {};
      var nextSlidenext = mySlider.getNextSlide().next();
      var nextSlideColor = nextSlidenext.data('color');
      var nextSlideName = nextSlidenext.data('name');

      colorAndName.color = nextSlideColor;
      colorAndName.name = nextSlideName;

      if (nextSlidenext.length === 0) {
         nextSlidenext = $(mySlider.config.slider).find('.slide').eq(0);
         nextSlideColor = nextSlidenext.data('color');
         nextSlideName = nextSlidenext.data('name');

         colorAndName.color = nextSlideColor;
         colorAndName.name = nextSlideName;
      }
      return colorAndName;
   },

   createNav: function () {

      var totalSlides = $(mySlider.config.slider).find('.slide').length;
      var controlNav = $(mySlider.config.navigation).find('ul');

      for (var i = 0; i < totalSlides; i++) {

         var active = "";
         if (i === 0) {
            active = 'active';
         }

         controlNav.append('<li class="slider-nav nav-' + i + ' ' + active + ' "></li>')

      }

   },

   animateNav: function () {

      var activeNav = $('li.active');
      var nextNav = activeNav.next();

      if (nextNav.length === 0) {
         nextNav = $('.control-nav li').eq(0);
      }

      activeNav.removeClass('active');
      nextNav.addClass('active');
   },

   animateNavBack: function () {

      var activeNav = $('li.active');
      var nextNav = activeNav.prev();

      if (nextNav.length === 0) {
         nextNav = $('.control-nav li').eq(0);
      }

      activeNav.removeClass('active');
      nextNav.addClass('active');

   },

   animateSlide: function (button) {

      var activeSlide = mySlider.getActiveSlide();
      var nextSlide = mySlider.getNextSlide();
      var delay = mySlider.config.delay();
      var clipPath = $('.clip-svg');
      clipPath.css('transition-duration', mySlider.config.transition + 'ms');
      button.css('pointer-events', 'none');
      nextSlide.css('z-index', 10);
      button.css('background', mySlider.getNextSlideColorAndName().color);
      button.prev().find('.color').html(mySlider.getNextSlideColorAndName().name);
      nextSlide.addClass('active').css('opacity', 1);

      setTimeout(function () {
         activeSlide.removeClass('active').css('opacity', 0);
      }, delay);

      setTimeout(function () {
         nextSlide.css('z-index', '');
         button.css('pointer-events', 'auto');
      }, delay + 300);

      mySlider.animateNav();
   },

   animateBackSlide: function (buttonBack) {

      var activeSlide = mySlider.getActiveSlide();
      var nextSlide = mySlider.getBackSlide();
      var delay = mySlider.config.delay();
      var clipPath = $('.clip-svg');
      clipPath.css('transition-duration', mySlider.config.transition + 'ms');
      buttonBack.css('pointer-events', 'none');
      nextSlide.css('z-index', 10);
      buttonBack.css('background', mySlider.getNextSlideColorAndName().color);
      buttonBack.prev().find('.color').html(mySlider.getNextSlideColorAndName().name);
      nextSlide.addClass('active').css('opacity', 1);

      setTimeout(function () {
         activeSlide.removeClass('active').css('opacity', 0);
      }, delay);

      setTimeout(function () {
         nextSlide.css('z-index', '');
         buttonBack.css('pointer-events', 'auto');
      }, delay + 300);
      mySlider.animateNavBack();
   },

   getBackSlide: function () {
      var nextSlide = mySlider.getActiveSlide().prev(".slide");
      if (nextSlide.length === 0) {
         nextSlide = $(mySlider.config.slider).find('.slide').eq(0);
      }
      return nextSlide;
   },
}

$(document).ready(function () { mySlider.init(); });

// Функции сокрытия кнопок навигации в граничных положениях
let btnNext = document.querySelector(".next-button");
let btnBack = document.querySelector(".back-button");

function createCounter() {
   var count = 0;
   createCounter.prototype.inc = function () {
      count++;
   };
   createCounter.prototype.dec = function () {
      count--;
   };
   createCounter.prototype.getValue = function () {

      if (count >= 1) {
         btnBack.style.visibility = "visible";
      }

      if (count <= 0) {
         btnBack.style.visibility = "hidden";
      }
      if (count >= 9) {
         btnNext.style.visibility = "hidden";
      }

      else if (count >= 1 && count <= 9) {
         btnBack.style.visibility = "visible";
         btnNext.style.visibility = "visible";
      }
   };
   return count
};

var countInc = new createCounter();
var countDec = new createCounter();

btnNext.addEventListener("click", () => {
   countInc.inc();
   countInc.getValue();
});

btnBack.addEventListener("click", () => {
   countDec.dec();
   countDec.getValue();
})




