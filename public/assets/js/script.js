$(function() {
  //wow
  new WOW().init()

  //drawer-js
  $(document).ready(function() {
    $('.drawer').drawer()
})

jQuery('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position - $( '#js-header' ).outerHeight()
  },
    speed
  );
  return false;
});

jQuery('.qa-q').on('click',function() {
  jQuery(this).next().slideToggle();
});
});