
$(function () {
    const teoreticalPart_plet = $("#teoreticalPart_plet"),
        teoreticalPart_try = $("#teoreticalPart_try"),
        practicalPart_plet = $("#practicalPart_plet"),
        practicalPart_try = $("#practicalPart_try"),
        services = $(".kurz__list"),
        kurzPlet = $("#kurz_plet"),
        kurzTry = $("#kurz_try"),
        kurzWrapper = $(".kurz_wrapper"),
        btnAno = $(".cookie__btn--ano"),
        btnNe = $(".cookie__btn--ne"),
        cookieBanner = $(".cookie");


    services.hide(1);
    kurzWrapper.hide(1);

    kurzPlet.on("click", function () {
        $(this).next(".kurz_wrapper").slideToggle("slow");
    });

    kurzTry.on("click", function () {
        $(this).next(".kurz_wrapper").slideToggle("slow");
    });


    teoreticalPart_plet.on("click", function () {
        $(this).find(".kurz__list").slideToggle("slow");
    });
    teoreticalPart_try.on("click", function () {
        $(this).find(".kurz__list").slideToggle("slow");
    });

    practicalPart_plet.on("click", function () {
        $(this).find(".kurz__list").slideToggle("slow");
    });
    practicalPart_try.on("click", function () {
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
