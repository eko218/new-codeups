
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
      // ヘッダーの高さ分だけコンテンツを下げる

  $(function () {
    // ヘッダーの高さ取得
    const headerHeight = $('.js-header').height();
    $('a[href^="#"]').click(function () {
      const speed = 600;
      let href = $(this).attr('href');
      let target = $(href === '#' || href === '' ? 'html' : href);

      // スクロール位置の計算
      let position;
      if (href === '.mv') {
        // mvセクションへのリンクの場合、ヘッダーの高さは考慮しない
        position = target.offset().top;
      } else {
        // それ以外の場合、ヘッダーの高さを差し引く
        position = target.offset().top - headerHeight;
      }

      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
  });
});

      $(function () {
    $(".js-hamburger").click(function () {
      $(".js-hamburger").toggleClass("is-active");
      $(".js-drawer-menu").toggleClass("is-active"); // ドロワーメニューにis-activeクラスを追加
      if ($(".js-drawer-menu").hasClass("is-active")) {
        $("body, html").css("overflow", "hidden");
        $(".js-drawer-menu").fadeIn(); // ドロワーメニューをフェードイン
      } else {
        $("body, html").css("overflow", "auto");
        $(".js-drawer-menu").fadeOut(); // ドロワーメニューをフェードアウト
      }
    });
  });
  

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

    //  キャンペーンスライダー
    jQuery(function ($) {
      // リサイズ処理（PC時のみ矢印表示）
      const service_slideLength = document.querySelectorAll(
        '.js-campaign-swiper .swiper-slide'
      ).length;
      $(window).resize(function () {
        service_arrow();
      });
      service_arrow();
      function service_arrow() {
        if (
          window.matchMedia('(max-width: 767px)').matches ||
          service_slideLength <= 2
        ) {
          $('.js-campaign-arrow').hide();
        } else {
          $('.js-campaign-arrow').show();
        }
      }
    
       // Swiper
      const service_swiper = new Swiper('.js-campaign-swiper', {
        loop: true,
        speed: 3000,
        // slidesPerView: 'auto',
        loopedSlides: 4,
        spaceBetween: 24,
        width: 280,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
          direction: 'horizontal', 
        },
        breakpoints: {
          768: {
            spaceBetween: 40,
            width: 333,
          }
        },
        
        navigation: {
          nextEl: '.campaign__button-next',
          prevEl: '.campaign__button-prev',
          clickable: true,
        },
      });

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

// Topへ戻るボタン
$(function () {
  const pageTop = $('.js-page-top');
  pageTop.hide(); // 最初はボタンを非表示にする
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      // 100pxスクロールしたら表示
      pageTop.fadeIn(); // 100px以上スクロールしたらボタンをフェードイン
    } else {
      pageTop.fadeOut(); // 100px以下になったらボタンをフェードアウト
    }
  });
  pageTop.click(function () {
    $('body,html').animate(
      {
        scrollTop: 0, // 上から0pxの位置に戻る
      },
      500 // 500ミリ秒かけて戻る
    );
    return false;
  });
});
});


// campaignタブ
$(function(){
  // 初期状態ではすべてのcampaign-card__itemを表示する
  $(".campaign-card__item").show();

  // js-category-buttonがクリックされたときの処理
  $(".js-category-button").on("click", function(){
    // クリックされたボタンのテキストを取得
    var category = $(this).text().trim();
    
    // すべてのcampaign-card__itemを一度非表示にする
    $(".campaign-card__item").hide();
    
    // クリックされたカテゴリーに対応するcampaign-card__itemを表示する
    if(category === "ALL") {
      $(".campaign-card__item").show();
    } else {
      $(".campaign-card__item").each(function() {
        if($(this).find(".campaign-card__category").text().trim() === category) {
          $(this).show();
        }
      });
    }
  
    // js-category-buttonのクラスを調整して、現在の選択状態を示す
    $(".js-category-button").removeClass("is-active");
    $(this).addClass("is-active");
  });
});


// $(function(){
//   $(document).on('touchend','.js-category-button',function(){
//     $(".campaign-card__item").show();

//   // js-category-buttonがクリックされたときの処理
//   $(".js-category-button").on("click", function(){
//     // クリックされたボタンのテキストを取得
//     var category = $(this).text().trim();
    
//     // すべてのcampaign-card__itemを一度非表示にする
//     $(".campaign-card__item").hide();
    
//     // クリックされたカテゴリーに対応するcampaign-card__itemを表示する
//     if(category === "ALL") {
//       $(".campaign-card__item").show();
//     } else {
//       $(".campaign-card__item").each(function() {
//         if($(this).find(".campaign-card__category").text().trim() === category) {
//           $(this).show();
//         }
//       });
//     }
  
//     // js-category-buttonのクラスを調整して、現在の選択状態を示す
//     $(".js-category-button").removeClass("is-active");
//     $(this).addClass("is-active");
//   });
//   });
// });

// faqアコーディオン
$(function () {
  $(".js-faq-item:first-child .js-faq-text").css(
    "display",
    "block"
  );
  $(".js-faq-item:first-child .js-faq-title").addClass(
    "is-active"
  );
  $(".js-faq-title").on("click", function () {
    $(this).toggleClass("is-active");
    $(this).next().slideToggle(300);
  });
});


