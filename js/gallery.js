$(function () {
  const switcher = $(".gallery__list .switcher"),
    galleryWrapper = $("#gallery__wrapper"),
    layer = $("#layer"),
    closeIcon = $("#close_icon"),
    rightMarker = $("#inner__right"),
    leftMarker = $("#inner__left"),
    innerMid = $("#inner__mid"),
    tattooList = $("#tattoo__list"),
    beautyList = $("#beauty__list"),
    altText = $("#alt__text"),
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

  function galleryHandler(list) {
    const src = list.attr("src").replace("_thumb", "");
    const array = list.closest("ul").find("img");
    const txt = list.attr("alt");
    let position = array.index(list);
    altText.text(txt);

    layer.removeClass("black__hole");
    innerMid.css({
      "background-image": `url(${src})`,
    });

    leftMarker.off("click").on("click", function () {
      if (position > 0) {
        position--;
      } else {
        position = array.length - 1;
      }
      const txt = $(array[position]).attr("alt");
      altText.text(txt);

      const prev = $(array[position]).attr("src").replace("_thumb", "");
      innerMid.css({
        "background-image": `url(${prev})`,
      });
    });

    rightMarker.off("click").on("click", function () {
      if (position < array.length - 1) {
        position++;
      } else {
        position = 0;
      }
      const txt = $(array[position]).attr("alt");
      altText.text(txt);

      const next = $(array[position]).attr("src").replace("_thumb", "");
      innerMid.css({
        "background-image": `url(${next})`,
      });
    });
  }

  galleryWrapper.on("click", "img", function () {
    galleryHandler($(this));
  });

  closeIcon.on("click", function () {
    layer.addClass("black__hole");
  });
});
