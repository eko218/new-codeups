
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
    
    // // ドロワーメニューふわっとフェードイン
    //  $(function(){
    //     $('.sp-nav').on('click', function(){
    //       $('.sp-nav__left, .sp-nav__right').toggleClass('is-active');
    //     });
    //   }());
    
   

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


// //要素の取得とスピードの設定
// var box = $('.js-colorbox'),
//     speed = 700;  
 
// //.colorboxの付いた全ての要素に対して下記の処理を行う
// box.each(function(){
//     $(this).append('<div class="color"></div>')
//     var color = $(this).find($('.color')),
//     image = $(this).find('img');
//     var counter = 0;
 
//     image.css('opacity','0');
//     color.css('width','0%');
//     //inviewを使って背景色が画面に現れたら処理をする
//     color.on('inview', function(){
//         if(counter == 0){
// 　　　　　$(this).delay(200).animate({'width':'100%'},speed,function(){
//                    image.css('opacity','1');
//                    $(this).css({'left':'0' , 'right':'auto'});
//                    $(this).animate({'width':'0%'},speed);
//                 })
//             counter = 1;
//           }
//      });
// });

$(function () {
  let box = $('.js-colorbox');
  let speed = 700;
box.each(function () {
  $(this).append('<div class="color"></div>');
  let color = $(this).find($('.color')),
    image = $(this).find('img');
  let executed = false; // executedフラグを追加

  image.css('opacity', '0');
  color.css('width', '0%');

  // inviewイベントを使用して背景色が画面に現れたら処理をする
  color.on('inview', function () {
    if (!executed) {
      // アニメーションが未実行の場合のみ実行
      $(this)
        .delay(200)
        .animate({ width: '100%' }, speed, function () {
          image.css('opacity', '1');
          $(this).css({ left: '0', right: 'auto' });
          $(this).animate({ width: '0%' }, speed);
        });
      executed = true; // アニメーション実行後にフラグを更新
    }
  });
});
});


document.addEventListener('DOMContentLoaded', function () {
  let boxes = document.querySelectorAll('.js-colorbox');
  let speed = 700;

  boxes.forEach(function (box) {
      let colorDiv = document.createElement('div');
      colorDiv.classList.add('color');
      box.appendChild(colorDiv);

      let color = box.querySelector('.color');
      let image = box.querySelector('img');
      let executed = false;

      image.style.opacity = '0';
      color.style.width = '0%';

      // 代替の "inview" イベントの実装
      window.addEventListener('scroll', function () {
          if (!executed && isElementInView(color)) {
              setTimeout(function () {
                  color.style.width = '100%';
                  setTimeout(function () {
                      image.style.opacity = '1';
                      color.style.left = '0';
                      color.style.right = 'auto';
                      color.style.width = '0%';
                  }, speed);
              }, 200);
              executed = true;
          }
      });
  });

  function isElementInView(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
});
