$(function(){
  $('#js-click-btn').on('click',function(){
    $(this).addClass('large-btn');
  })

// ボタンの色変更
  $('#js-hover-btn').mouseover(function() {
    $(this).addClass('opacity');
  }).mouseleave(function() {
    $(this).removeClass('opacity');
  });

$('#js-hide-btn').on('click',function(){
  $('#js-target-element').slideUp(1000);
});
$('#js-show-btn').on('click',function(){
  $('#js-target-element').slideDown(1000);
});

$('#js-add-btn').on('click',function(){
  // $(this).before('<li class="btn">ボタンの前に追加</li>');
  $(this).after('<li class="btn">ボタンの後ろに追加</li>');
});

$('#js-add-btn2').on('click',function(){
  // $(this).prepend('<li>前<li>')
  $(this).append('<li>後ろ<li>')
});

$('.js-toggle').on('click',function(){
  $(this).toggleClass('on');
  $(this).siblings().slideToggle();
});


// ハンバーガーメニュー
$('.js-hamburger').on('click', function() {
  $(this).toggleClass('on');
});

// スムーズスクロール
$('.js-scroll').on('click',function(){
  $('body,html').animate({scrollTop: 0},500);
  return false;
});

// モーダル
$('.js-modal').on('click', function() {
  $('.modal-content').fadeIn('slow');
  $('#modal-bg').fadeIn('slow');
});

$('.js-modal-close').on('click', function() {
  $('.modal-content').fadeOut(1000);
  $('#modal-bg').fadeOut(1000);
});

});