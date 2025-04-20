
$(function () {
    const teoreticalPart = $("#teoreticalPart"),
        practicalPart = $("#practicalPart"),
        services = $(".kurz__list"),
        btnAno = $(".cookie__btn--ano"),
        btnNe = $(".cookie__btn--ne"),
        cookieBanner = $(".cookie");


    services.hide(1);

    teoreticalPart.on("click", function () {
        $(this).find(".kurz__list").slideToggle("slow");
    });

    practicalPart.on("click", function () {
        $(this).find(".kurz__list").slideToggle("slow");
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
