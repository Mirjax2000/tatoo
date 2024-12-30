// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
  const listItem = $("#cenik__list").find(".cenik__list--item");
  const services = $(".services");
  services.hide(1);

  listItem.on("click", function () {
    $(this).find(".services").slideToggle("slow");
  });
});
