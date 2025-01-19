
$(function () {
  const listItem = $("#cenik__list").find(".cenik__list--item"),
    services = $(".services"),
    btnAno = $(".cookie__btn--ano"),
    btnNe = $(".cookie__btn--ne"),
    cookieBanner = $(".cookie");


  services.hide(1);

  listItem.on("click", function () {
    $(this).find(".services").slideToggle("slow");
  });


  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(function () {
      cookieBanner.slideDown(1000);
    }, 1000);
  }

  btnAno.on("click", function () {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.hide(1000);
    cookies();
  });

  btnNe.on("click", function () {
    localStorage.setItem('cookiesAccepted', 'false');
    cookieBanner.hide(1000);
  });
});
