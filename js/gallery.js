// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
  const switcher = $(".gallery__list .switcher");
  const tattooList = $("#tattoo__list");
  const beautyList = $("#beauty__list");

  switcher.on("click", function () {
    switcher.removeClass("active");
    $(this).addClass("active");

    if ($(this).text() === "beauty") {
      beautyList.removeClass("black__hole");
      tattooList.addClass("black__hole");
    } else {
      tattooList.removeClass("black__hole");
      beautyList.addClass("black__hole");
    }
  });
});
