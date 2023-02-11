// Header Type = Fixed
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var img, source;
  var header_ = $("header");

  img = $("header .logo_ .header_logo");

  if (scroll > 20) {
    $("header").addClass("nav_bg_adder");
    source = "./src/assets/logo_img/KakaoTalk_Photo_2023-02-10-00-16-41.png";
    img.attr("src", source);
    img.addClass("second_logo");
    var link__ = $(".nav_item");
    link__.addClass("black_");
    // change the src
  } else {
    $("header").removeClass("nav_bg_adder");
    source = "./src/assets/logo_img/the_right_realty_group.jpeg";
    img.attr("src", source);
    img.removeClass("second_logo");
  }
});

$(function () {
  $(".bg__").bgSlideShow({
    current: 0,
    randomize: true,
    images: [
      "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80",
      "https://images.unsplash.com/photo-1571168538867-ad36fe110cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "./src/assets/img/big-mansion-with-palm-trees-5692l6vwcj1hmc5k.jpg",
      "./src/assets/img/background.jpg",
      "./src/assets/img/real-estate-with-infinity-pool-kl2wvk2zp66lfpsf.jpg",
      "./src/assets/img/modern-minimalist-ivory-home-garage-9euuep88adzkg08e.jpg",
      "./src/assets/img/real-estate-beach-house-ssros561b191qnwe.jpg",
      "./src/assets/img/real-estate-modern-house-95ju6o11ap2vad6n.jpg",
    ],
    initialBackground:
      "https://images.unsplash.com/photo-1614846384571-1e31322ed3a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    transitionDelay: 2000,
    transitionSpeed: 3000,
    transitionEffect: "fade-in",
    slideControls: {
      enabled: false,
      classes: null,
    },
    eventHandlers: {
      // before initialization
      beforeInit: null,
      // after initialization
      afterInit: null,
      // before the current image is replaced
      beforeChange: null,
      // after the current image is replaced
      afterChange: null,
    },
  });
});

https: fitty("#heading_one", {
  minSize: 18,
  maxSize: 75,
  multiLine: true,
});
fitty(".heading_two", {
  minSize: 28,
  maxSize: 37,
  multiLine: true,
});
fitty(".heading_five", {
  minSize: 18,
  maxSize: 27,
  multiLine: true,
});
fitty(".paragraph__", {
  minSize: 12,
  maxSize: 14,
  multiLine: true,
});
fitty(".paragraph__two", {
  minSize: 16,
  maxSize: 26,
  multiLine: true,
});
