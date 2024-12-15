// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
  const whereTo = $(".scrollTo");
  const fade = $(".image__banner");
  const offset = 70;

  whereTo.on("click", function (event) {
    event.preventDefault();

    // Získání ID cílového elementu z atributu data-target
    const targetId = $(this).data("target");
    const targetElement = $(`#${targetId}`);

    // Posun stránky na cílový element
    $("html, body").animate(
      {
        scrollTop: targetElement.offset().top - offset,
      },
      1
    );
  });

  fade.on("click", function () {
    const targetId = $(this).data("target");
    $(`#${targetId}`).fadeToggle(300);
  });
});
