$(function () {
  const switcher = $(".gallery__list .switcher");
  const galleryWrapper = $("#gallery__wrapper");
  const layer = $("#layer");
  const closeIcon = $("#close_icon");
  const rightMarker = $("#inner__right");
  const leftMarker = $("#inner__left");
  const innerMid = $("#inner__mid");
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

  function galleryHandler(list) {
    const src = list.attr("src").replace("_thumb", "");
    const array = list.closest("ul").find("img");
    let position = array.index(list);
    console.log(position);

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
