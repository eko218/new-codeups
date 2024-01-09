
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


      $(function () {
        // ハンバーガーメニュー
       $(".js-hamburger,.js-drawer-menu").on('click', function () {
         if ($(".js-hamburger").hasClass("is-active")) {
           // $(".js-drawer-menu").fadeOut();
           $("body, html").css("overflow", "auto");
           $(".js-drawer-menu").removeClass("is-active");
           $(this).removeClass("is-active");
        } else {
           //  $(".js-drawer-menu").fadeIn();
           $("body, html").css("overflow", "hidden");
           $(".js-drawer-menu").addClass("is-active");
            $(this).addClass("is-active");
        }
        });
      });
    });
    
    // ドロワーメニューふわっとフェードイン
    $(function(){
        $('.sp-nav').on('click', function(){
          $('.sp-nav__left, .sp-nav__right').toggleClass('is-active');
        });
      }());
    
    // mvスライダー
     var swiper = new Swiper(".js-mv-swiper", {
          loop: true,
          effect: 'fade', // フェードのエフェクト
            autoplay: {
              delay: 3000, // ４秒後に次の画像へ
              disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
            },
            speed: 2000, // ２秒かけながら次の画像へ移動
     });


//要素の取得とスピードの設定
var box = $('.js-colorbox'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
　　　　　$(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});