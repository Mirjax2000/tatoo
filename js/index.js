// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
  const fade = $(".banner--js");

  fade.on("click", function () {
    const targetId = $(this).data("target");
    $(`#${targetId}`).fadeToggle(300);
  });
});
