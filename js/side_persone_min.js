var mySlider = {
   config: { slider: ".slider-content", activeSlide: ".slide.active", button: ".next-button", transition: 500, delay: function () { return this.transition }, navigation: ".control-nav", buttonBack: ".back-button" }, init: function (a) { this.createNav(); $(mySlider.config.button).click(function () { mySlider.animateSlide($(this)) }); $(mySlider.config.buttonBack).click(function () { mySlider.animateBackSlide($(this)) }) }, getActiveSlide: function () { return $(mySlider.config.activeSlide) }, getNextSlide: function () {
      var a = mySlider.getActiveSlide().next();
      0 === a.length && (a = $(mySlider.config.slider).find(".slide").eq(0)); return a
   }, getNextSlideColorAndName: function () { var a = {}, b = mySlider.getNextSlide().next(), c = b.data("color"), d = b.data("name"); a.color = c; a.name = d; 0 === b.length && (b = $(mySlider.config.slider).find(".slide").eq(0), c = b.data("color"), d = b.data("name"), a.color = c, a.name = d); return a }, createNav: function () {
      for (var a = $(mySlider.config.slider).find(".slide").length, b = $(mySlider.config.navigation).find("ul"), c = 0; c < a; c++) {
         var d = ""; 0 === c && (d = "active"); b.append('<li class="slider-nav nav-' +
            c + " " + d + ' "></li>')
      }
   }, animateNav: function () { var a = $("li.active"), b = a.next(); 0 === b.length && (b = $(".control-nav li").eq(0)); a.removeClass("active"); b.addClass("active") }, animateNavBack: function () { var a = $("li.active"), b = a.prev(); 0 === b.length && (b = $(".control-nav li").eq(0)); a.removeClass("active"); b.addClass("active") }, animateSlide: function (a) {
      var b = mySlider.getActiveSlide(), c = mySlider.getNextSlide(), d = mySlider.config.delay(); $(".clip-svg").css("transition-duration", mySlider.config.transition + "ms"); a.css("pointer-events",
         "none"); c.css("z-index", 10); a.css("background", mySlider.getNextSlideColorAndName().color); a.prev().find(".color").html(mySlider.getNextSlideColorAndName().name); c.addClass("active").css("opacity", 1); setTimeout(function () { b.removeClass("active").css("opacity", 0) }, d); setTimeout(function () { c.css("z-index", ""); a.css("pointer-events", "auto") }, d + 300); mySlider.animateNav()
   }, animateBackSlide: function (a) {
      var b = mySlider.getActiveSlide(), c = mySlider.getBackSlide(), d = mySlider.config.delay(); $(".clip-svg").css("transition-duration",
         mySlider.config.transition + "ms"); a.css("pointer-events", "none"); c.css("z-index", 10); a.css("background", mySlider.getNextSlideColorAndName().color); a.prev().find(".color").html(mySlider.getNextSlideColorAndName().name); c.addClass("active").css("opacity", 1); setTimeout(function () { b.removeClass("active").css("opacity", 0) }, d); setTimeout(function () { c.css("z-index", ""); a.css("pointer-events", "auto") }, d + 300); mySlider.animateNavBack()
   }, getBackSlide: function () {
      var a = mySlider.getActiveSlide().prev(".slide");
      0 === a.length && (a = $(mySlider.config.slider).find(".slide").eq(0)); return a
   }
}; $(document).ready(function () { mySlider.init() }); var btnNext = document.querySelector(".next-button"), btnBack = document.querySelector(".back-button");
function createCounter() { var a = 0; createCounter.prototype.inc = function () { a++ }; createCounter.prototype.dec = function () { a-- }; createCounter.prototype.getValue = function () { 1 <= a && (btnBack.style.visibility = "visible"); 0 >= a && (btnBack.style.visibility = "hidden"); 9 <= a ? btnNext.style.visibility = "hidden" : 1 <= a && 9 >= a && (btnBack.style.visibility = "visible", btnNext.style.visibility = "visible") }; return a } var countInc = new createCounter, countDec = new createCounter; btnNext.addEventListener("click", function () { countInc.inc(); countInc.getValue() });
btnBack.addEventListener("click", function () { countDec.dec(); countDec.getValue() });