// ====== 画像プリロード（ちらつき防止）======
(function preloadNavIcons() {
    document.querySelectorAll('.nav-icon').forEach(img => {
      const p1 = new Image(); p1.src = img.dataset.srcDefault;
      const p2 = new Image(); p2.src = img.dataset.srcChecked;
    });
  })();

// ====== ドロワー開閉 ======
// ※ ロゴだけ切り替え。ナビのアイコンは触らない！
jQuery("#js-draw-icon").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-draw-icon").toggleClass("is-checked");
  jQuery("#js-header-content").toggleClass("is-checked");
  jQuery("#js-draw-content").toggleClass("is-checked");
  jQuery("#js-fixed-content").toggleClass("is-checked");

  const isOpen = jQuery("#js-draw-content").hasClass("is-checked");

  // ロゴ差し替え（必要な場合のみ）
  const $logo = jQuery("#site-logo");
  if ($logo.length) {
    $logo.attr("src", isOpen ? $logo.data("src-checked") : $logo.data("src-default"));
  }

  // スクロール固定
  jQuery("body").toggleClass("is-fixed", isOpen);
});

// ====== ナビ：PCホバー時のみアイコン一時切替 ======
(function enableHoverSwap() {
  const $nav = jQuery(".header__nav");
  if (!$nav.length) return;

  const isPC = () => window.matchMedia("(min-width: 768px)").matches;

  $nav.on("mouseenter", ".header__link", function() {
    if (!isPC()) return;
    const $icon = jQuery(this).find(".nav-icon");
    if ($icon.length) $icon.attr("src", $icon.data("src-checked"));
  });

  $nav.on("mouseleave", ".header__link", function() {
    if (!isPC()) return;
    const $icon = jQuery(this).find(".nav-icon");
    if ($icon.length) $icon.attr("src", $icon.data("src-default"));
  });

  // キーボード操作でのフォーカス対応（任意）
  $nav.on("focusin", ".header__link", function() {
    if (!isPC()) return;
    const $icon = jQuery(this).find(".nav-icon");
    if ($icon.length) $icon.attr("src", $icon.data("src-checked"));
  });
  $nav.on("focusout", ".header__link", function() {
    if (!isPC()) return;
    const $icon = jQuery(this).find(".nav-icon");
    if ($icon.length) $icon.attr("src", $icon.data("src-default"));
  });
})();

// メニューリンククリックで閉じる
jQuery(".drawer-content__link").on("click", function() {
    jQuery("#js-draw-icon").removeClass("is-checked");
    jQuery("#js-draw-content").removeClass("is-checked");
    jQuery("body").removeClass("is-fixed");
});

// ページトップボタン
$(function(){
  var topBtn=$('.pageTop__btn');
  topBtn.hide();
    
  //ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      // 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      // 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });
  
  // ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
});

// スライダー
const loop = new Swiper("#loop", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: "clickable"
      }
});

// slick
$(".slide-items").slick({
    autoplay: true,//自動でスライドさせる
    autoplaySpeed: 0,//次の画像に切り替えるまでの時間 今回の場合は0
    speed: 15000,//画像が切り替わるまでの時間 今回の場合は何秒で1枚分動くか
    cssEase: 'linear',//動きの種類は等速に
    arrows:false,//左右に出る矢印を非表示
    swipe: false,//スワイプ禁止
    pauseOnFocus: false,//フォーカスが合っても止めない
    pauseOnHover: false,//hoverしても止めない
    centerMode: false,
    slideToShow: 3,//最初に表示させる要素の番号を指定
    variableWidth: true,//スライドの要素の幅をcssで設定できるようにする 
});



