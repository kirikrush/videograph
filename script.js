

$(document).ready(() => {
  let list = ("#i0>span");
  let sliderButton = ("#s0");


  $(".list__item__service>span").on('click', event => {

    $(list).css("outline", "none");
    list = event.target;
    $(list).css("outline", "1px solid white");
    let multipler = $(event.currentTarget).attr("id")[1];
    let bgPosition = (1000 * multipler) + "px";
    let itemHeight = +$(".slider__item").css("height").split("px")[0];
    let itemMargin = +$(".slider__item").css("margin-bottom").split("px")[0];
    let letItemMarginBot;
    let shift = Math.round(itemHeight + itemMargin) * multipler;
    console.log(multipler, bgPosition, shift);
    $(".presentation").css({
      "background-position-y": bgPosition
    })
    $(".slider__item").css({
      "top": "-" + String(shift) + "px"
    })
  })

  $(".slider__control").on('click', event => {
    console.log('okay')
    $(sliderButton).css({
      "background-position": "-300px,0",
      "color": "black"
    })

    sliderButton = event.target;

    $(sliderButton).css({
      "background-position": "0,0",
      "color": "white"
    })
    let multipler = +$(event.currentTarget).attr("id")[1];
    let bgPosition = (1000 * multipler) + "px";
    let itemHeight = +$(".slider__item__horizontal").css("width").split("px")[0];
    let itemMargin = +$(".slider__item__horizontal").css("margin-right").split("px")[0];
    let pad = +$(document).width() * 0.1;
    let shift = Math.round(itemHeight + itemMargin) * multipler;
    console.log(multipler, itemHeight, itemMargin, pad, shift);
    $(".slider__item__horizontal").css({
      "left": "-" + String(shift) + "px"
    })
  })
  let slider = 0;


  $("#prev").on('click', event => {
    console.log('event')
    if (slider > 0) {
      slider--;
      let multipler = slider;
      let itemMargin = +$(".feedback__item").css("margin-right").split("px")[0];
      let pad = +$(document).width() * 0.1;
      let itemWidth = +$(".feedback__item").css("width").split("px")[0];
      let shift = (itemMargin + itemWidth) * multipler;
      console.log(shift);
      $(".feedback__item").css({
        "left": String(350 - shift) + "px"
      })
    }
  })


  $("#next").on('click', event => {
    if (slider < 2) {
      slider++;
      let multipler = slider;
      let itemMargin = +$(".feedback__item").css("margin-right").split("px")[0];
      let itemWidth = +$(".feedback__item").css("width").split("px")[0];
      let pad = +$(document).width() * 0.1;
      let shift = (itemMargin + itemWidth) * multipler;
      console.log(shift);
      $(".feedback__item").css({
        "left": String(350 - shift) + "px"
      })
    }
  })

})