//event_box2 slider
$('.eb_slider_list').slick({
  arrows: false,
  dots: true,
  fade: true,
  autoplay: true,
  pauseOnHover: false //마우스를 올렸을 때 autoplay가 멈추는 기능 없애기
});

$('.pge_act .btn_stop').click(function (e) {
  e.preventDefault();
  if ($('.event_box2 .pge_act').hasClass("on")) /* 없어도 돌아감 */ {
    $('.event_box2 .pge_act').removeClass("on");
    $('.eb_slider_list').slick('slickPause');
  }
})


$('.pge_act .btn_play').click(function (e) {
  e.preventDefault();
  $('.event_box2 .pge_act').addClass("on");
  $('.eb_slider_list').slick('slickPlay');
})


let card = $('.card')
card.slick({
  arrows: false,
  dots: true,
  fade: true,
  autoplay: true,
  pauseOnHover: false
});

$('.pagn_act .btn_stop').click(function (e) {
  e.preventDefault();
  $('.event_box3 .pagn_act').removeClass("on");
  card.slick('slickPause');
})

$('.pagn_act .btn_play').click(function (e) {
  e.preventDefault();
  $('.event_box3 .pagn_act').addClass("on");
  card.slick('slickPlay');
})



// life 버튼
let tab=$('.life_menu ul li');
let menu=$('.life_style li');

tab.mouseover(function(){
  //태생적으로 태어날때 가지고 나온 번호를 추출 --> index()
  let target = $(this);
  let index = target.index();
  console.log(index)
  menu.css({opacity:0})
  menu.eq(index).css({opacity:1})
});