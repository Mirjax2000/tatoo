// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
  const toTattoo = $("#toTatoo");
  const toBeauty = $("#toBeauty");
  const tattoo = $("#tattoo");
  const beauty = $("#beauty");
  const offset = 70;

  const btm_frame = $(".image__banner.banner--bottom-frame");
  const top_frame = $(".image__banner.banner--top-frame");
  const btm_about = $(".about--bottom");
  const top_about = $(".about--top");

  toTattoo.on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: tattoo.offset().top - offset,
      },
      1
    );
  });
  toBeauty.on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: beauty.offset().top - offset,
      },
      1
    );
  });

  btm_frame.on("click", function () {
    btm_about.fadeToggle(300, function () {});
  });
  top_frame.on("click", function () {
    top_about.fadeToggle(300, function () {});
  });
});
