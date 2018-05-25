

$(document).ready(() => {
  let list = ("#i0>span")


  $(".list__item__service").on('click', event => {

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






})