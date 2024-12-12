// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
  var btm_frame = $(".image__banner.banner--bottom-frame");
  var top_frame = $(".image__banner.banner--top-frame");
  var btm_about = $(".about--bottom");
  var top_about = $(".about--top");

  btm_frame.on("click", function () {
    btm_about.fadeToggle(300, function () {});
  });
  top_frame.on("click", function () {
    top_about.fadeToggle(300, function () {});
  });
});
