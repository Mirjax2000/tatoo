
$(function () {
  const fade = $(".banner--js"),

    btnAno = $(".cookie__btn--ano"),
    btnNe = $(".cookie__btn--ne"),
    cookieBanner = $(".cookie");

  const cookies = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-132KB8NMEL');
  };

  fade.on("click", function () {
    const targetId = $(this).data("target");
    $(`#${targetId}`).fadeToggle(300);
  });

  

  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(function () {
      cookieBanner.slideDown(1000);
    }, 2000);
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
