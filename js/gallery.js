$(function () {
  const switcher = $(".gallery__list .switcher");
  const layer = $("#layer");
  const rightMarker = $(".inner__right");
  const leftMarker = $(".inner__left");
  const innerMid = $("#inner__mid");
  const tattooList = $("#tattoo__list");
  const tattooImg = tattooList.find("img");
  const beautyList = $("#beauty__list");
  const beautyImg = beautyList.find("img");
  const closeIcon = $(".container .layer .layer__wrapper .layer__close .icon");

  let currentList = tattooList;
  let currentImg = tattooImg;
  let position = null;

  switcher.on("click", function () {
    switcher.removeClass("active");
    $(this).addClass("active");

    if ($(this).text() === "beauty") {
      currentList = beautyList;
      currentImg = beautyImg;
      beautyList.removeClass("black__hole");
      tattooList.addClass("black__hole");
    } else {
      currentList = tattooList;
      currentImg = tattooImg;
      tattooList.removeClass("black__hole");
      beautyList.addClass("black__hole");
    }

    position = null;
  });

  currentList.on("click", "img", function () {
    const src = $(this).attr("src").replace("_thumb", "");
    position = currentImg.index($(this));

    layer.removeClass("black__hole");
    innerMid.css({
      "background-image": `url(${src})`,
    });
  });

  leftMarker.on("click", function () {
    if (position > 0) {
      position--;
    } else {
      position = currentImg.length - 1;
    }

    const prev = $(currentImg[position]).attr("src").replace("_thumb", "");
    innerMid.css({
      "background-image": `url(${prev})`,
    });
  });

  rightMarker.on("click", function () {
    if (position < currentImg.length - 1) {
      position++;
    } else {
      position = 0;
    }

    const next = $(currentImg[position]).attr("src").replace("_thumb", "");
    innerMid.css({
      "background-image": `url(${next})`,
    });
  });

  closeIcon.on("click", function () {
    layer.addClass("black__hole");
  });
});
