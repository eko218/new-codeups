
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
        // $(".js-drawer-menu").fadeIn(); // ドロワーメニューをフェードイン
      } else {
        $("body, html").css("overflow", "auto");
        // $(".js-drawer-menu").fadeOut(); // ドロワーメニューをフェードアウト
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




// aboutusモーダル
$(".page-aboutus-gallery__img-item img").click(function () {
  // まず、クリックした画像の HTML(<img>タグ全体)を#frayDisplay内にコピー
  $("#grayDisplay").html($(this).prop("outerHTML"));
  // body要素にoverflow: hidden;を設定してスクロールを禁止する
  $("body").css("overflow", "hidden");
  //そして、fadeInで表示する。
  $("#grayDisplay").fadeIn(200);
  return false;
});

// コース画像モーダル非表示イベント
// モーダル画像背景 または 拡大画像そのものをクリックで発火
$("#grayDisplay").click(function () {
  // 非表示にする
  $("#grayDisplay").fadeOut(200);
  // body要素のoverflowを元の状態に戻す
  $("body").css("overflow", "auto");
  return false;
});





// informationタブ

// $(document).ready(function () {
//   $(window).on("hashchange", function () {
//     activateTabFromHash();
//   });
//   // ハッシュの値に応じてタブをアクティブにする関数
//   function activateTabFromHash() {
//     var hash = window.location.hash; // 現在のハッシュを取得
//     var index = getIndexFromHash(hash);

//     // すべてのタブとコンテンツのアクティブ状態を初期化
//     $(".js-tab-list").removeClass("is-active");
//     // すべてのタブとコンテンツのアクティブ状態を初期化
//     $(".js-tab-list").removeClass("is-active");
//     // ハッシュが存在する場合、該当するタブとコンテンツをアクティブにする
//     if (hash) {
//       // ハッシュの値に応じてタブをアクティブにする
//       $("#tab-" + hash.replace("#", "")).addClass("is-active");
//       $(hash).addClass("is-active");
//       // 該当のjs-information-card　にis-activeをつけるため
//       // ハッシュの値が"tab-"で始まる場合、"tab-"を除去してコンテンツのIDを生成
//       var contentId = hash.replace("#tab-", "#");
//       // 対応するコンテンツをアクティブにする
//       $(contentId).addClass("is-active");
//       var index = getIndexFromHash(hash);
//       if (index !== null) {
//         // scrollToSection(index);
//       }
//     } else {
//       // ハッシュが存在しない場合、1件目のタブとコンテンツをアクティブにする
//       $(".js-tab-list:first").addClass("is-active");
//       $(".js-tab-list:first").addClass("is-active");
//     }
//   }
//   // 別ページから遷移した際の処理
//   $(window).on("load", function () {
//     var hash = window.location.hash;
//     var index = getIndexFromHash(hash);
//     if (index !== null) {
//       // scrollToSection(index);
//     }
//   });
//   // 最初のタブをデフォルトで表示
//   $(".js-tab-content:first-of-type").css("display", "block");
//   var hash = window.location.hash;
//   // hashからインデックスを取得
//   var index = getIndexFromHash(hash);
//   showCategory(index);
//   $(".js-tab-list").on("click", function () {
//     var index = $(this).index();
//     showCategory(index);
//   });
//   function showCategory(index) {
//     $(".js-tab-list").removeClass("is-active");
//     $(".js-tab-list").eq(index).addClass("is-active");
//     $(".js-tab-list").hide().eq(index).fadeIn(300);
//   }
//   function getIndexFromHash(hash) {
//     // デフォルトのインデックス
//     var defaultIndex = 0;
//     if (!hash.startsWith("#info")) {
//       return defaultIndex;
//     }
//     var index = parseInt(hash.replace("#info", ""), 10) - 1; // 0-based index
//     if (isNaN(index) || index < 0 || index >= $(".js-tab-list").length) {
//       return defaultIndex;
//     }
//     return index;
//   }
// });

$(document).ready(function () {
  $(window).on("hashchange", function () {
    activateTabFromHash();
  });
  // ハッシュの値に応じてタブをアクティブにする関数
  function activateTabFromHash() {
    var hash = window.location.hash; // 現在のハッシュを取得
    var index = getIndexFromHash(hash);

    // すべてのタブとコンテンツのアクティブ状態を初期化
    $(".js-tab-list").removeClass("is-active");
    // すべてのタブとコンテンツのアクティブ状態を初期化
    $(".js-tab-list").removeClass("is-active");
    // ハッシュが存在する場合、該当するタブとコンテンツをアクティブにする
    if (hash) {
      // ハッシュの値に応じてタブをアクティブにする
      $("#tab-" + hash.replace("#", "")).addClass("is-active");
      $(hash).addClass("is-active");
      // 該当のjs-information-card　にis-activeをつけるため
      // ハッシュの値が"tab-"で始まる場合、"tab-"を除去してコンテンツのIDを生成
      var contentId = hash.replace("#tab-", "#");
      // 対応するコンテンツをアクティブにする
      $(contentId).addClass("is-active");
      var index = getIndexFromHash(hash);
      if (index !== null) {
        // scrollToSection(index);
      }
    } else {
      // ハッシュが存在しない場合、1件目のタブとコンテンツをアクティブにする
      $(".js-tab-list:first").addClass("is-active");
      $(".js-tab-list:first").addClass("is-active");
    }
  }
  // 別ページから遷移した際の処理
  $(window).on("load", function () {
    var hash = window.location.hash;
    var index = getIndexFromHash(hash);
    if (index !== null) {
      // scrollToSection(index);
    }
  });
  // 最初のタブをデフォルトで表示
  $(".js-tab-content:first-of-type").css("display", "block");
  var hash = window.location.hash;
  // hashからインデックスを取得
  var index = getIndexFromHash(hash);
  showCategory(index);
  $(".js-tab-list").on("click", function () {
    var index = $(this).index();
    showCategory(index);
  });
  function showCategory(index) {
    $(".js-tab-list").removeClass("is-active");
    $(".js-tab-list").eq(index).addClass("is-active");
    $(".js-tab-content").hide().eq(index).fadeIn(300);
  }
  function getIndexFromHash(hash) {
    // デフォルトのインデックス
    var defaultIndex = 0;
    if (!hash.startsWith("#info")) {
      return defaultIndex;
    }
    var index = parseInt(hash.replace("#info", ""), 10) - 1; // 0-based index
    if (isNaN(index) || index < 0 || index >= $(".js-tab-content").length) {
      return defaultIndex;
    }
    return index;
  }
});


// voiceタブ
// $(function(){
//   // 初期状態ではすべてのcampaign-card__itemを表示する
//   $(".voice-card").show();

//   // js-category-buttonがクリックされたときの処理
//   $(".js-category-button").on("click", function(){
//     // クリックされたボタンのテキストを取得
//     var category = $(this).text().trim();
    
//     // すべてのcampaign-card__itemを一度非表示にする
//     $(".voice-card").hide();
    
//     // クリックされたカテゴリーに対応するcampaign-card__itemを表示する
//     if(category === "ALL") {
//       $(".voice-card").show();
//     } else {
//       $(".voice-card").each(function() {
//         if($(this).find(".voice-card__category").text().trim() === category) {
//           $(this).show();
//         }
//       });
//     }
  
//     // js-category-buttonのクラスを調整して、現在の選択状態を示す
//     $(".js-category-button").removeClass("is-active");
//     $(this).addClass("is-active");
//   });
// });

// $(document).ready(function () {
//   $(window).on("hashchange", function () {
//     activateTabFromHash();
//   });
//   // ハッシュの値に応じてタブをアクティブにする関数
//   function activateTabFromHash() {
//     var hash = window.location.hash; // 現在のハッシュを取得
//     var index = getIndexFromHash(hash);

//     // すべてのタブとコンテンツのアクティブ状態を初期化
//     $(".js-category-button").removeClass("is-active");
//     // すべてのタブとコンテンツのアクティブ状態を初期化
//     $(".js-category-button").removeClass("is-active");
//     // ハッシュが存在する場合、該当するタブとコンテンツをアクティブにする
//     if (hash) {
//       // ハッシュの値に応じてタブをアクティブにする
//       $("#tab-" + hash.replace("#", "")).addClass("is-active");
//       $(hash).addClass("is-active");
//       // 該当のjs-information-card　にis-activeをつけるため
//       // ハッシュの値が"tab-"で始まる場合、"tab-"を除去してコンテンツのIDを生成
//       var contentId = hash.replace("#tab-", "#");
//       // 対応するコンテンツをアクティブにする
//       $(contentId).addClass("is-active");
//       var index = getIndexFromHash(hash);
//       if (index !== null) {
//         // scrollToSection(index);
//       }
//     } else {
//       // ハッシュが存在しない場合、1件目のタブとコンテンツをアクティブにする
//       $(".js-category-button:first").addClass("is-active");
//       $(".js-category-button:first").addClass("is-active");
//     }
//   }
//   // 別ページから遷移した際の処理
//   $(window).on("load", function () {
//     var hash = window.location.hash;
//     var index = getIndexFromHash(hash);
//     if (index !== null) {
//       // scrollToSection(index);
//     }
//   });
//   // 最初のタブをデフォルトで表示
//   $(".js-category-button:first-of-type").css("display", "block");
//   var hash = window.location.hash;
//   // hashからインデックスを取得
//   var index = getIndexFromHash(hash);
//   showCategory(index);
//   $(".js-category-button").on("click", function () {
//     var index = $(this).index();
//     showCategory(index);
//   });
//   function showCategory(index) {
//     $(".js-category-button").removeClass("is-active");
//     $(".js-category-button").eq(index).addClass("is-active");
//     $(".js-category-button").hide().eq(index).fadeIn(300);
//   }
//   function getIndexFromHash(hash) {
//     // デフォルトのインデックス
//     var defaultIndex = 0;
//     if (!hash.startsWith("#info")) {
//       return defaultIndex;
//     }
//     var index = parseInt(hash.replace("#info", ""), 10) - 1; // 0-based index
//     if (isNaN(index) || index < 0 || index >= $(".js-category-button").length) {
//       return defaultIndex;
//     }
//     return index;
//   }
// });

// * アーカイブ年をクリックしたときにアコーディオンする
  // 初期表示
  const archiveButton = $(".js-archive-button");
  archiveButton.eq(0).addClass("is-active");
  // 初期表示　is-activeの次の要素を表示する
  const archiveButtonActive = $(".js-archive-button.is-active");
  archiveButtonActive.next().css({ display: "block" });
  // ボタンをクリックしたらアコーディオンする
  archiveButton.on("click", function () {
    $(this).toggleClass("is-active");
    $(this).next().slideToggle(300);
  });





// faqアコーディオン
// $(function () {
//   $(".js-faq-item,.js-faq-text").css(
//     "display",
//     "block"
//   );
//   $(".js-faq-item:first-child,.js-faq-title").addClass(
//     "is-active"
//   );
//   $(".js-faq-title").on("click", function () {
//     $(this).toggleClass("is-active");
//     $(this).next().slideToggle(300);
//   });
// });

jQuery(function ($) {
  $('.js-faq-title').on('click', function () {
      $(this).next().slideToggle();
      $(this).toggleClass('is-active');
  });
});



// document.addEventListener("DOMContentLoaded", function() {
//   const tabButtons = document.querySelectorAll('.footer-nav__item');
//   const tabContents = document.querySelectorAll('.js-information-sub-btn');

//   // 関数を定義して、クリック時の処理を再利用可能にする
//   function activateTab(tabIndex) {
//     // Remove 'current' class from all tab buttons and contents
//     tabButtons.forEach(function(btn) {
//       btn.classList.remove('current');
//     });
//     tabContents.forEach(function(content) {
//       content.classList.remove('current');
//     });

//     // Add 'current' class to the clicked tab button and content
//     tabButtons[tabIndex].classList.add('current');
//     tabContents[tabIndex].parentNode.classList.add('current'); // 対応する親要素にもクリックされた状態を追加
//     tabContents[tabIndex].classList.add('current'); // タブの番号が取得されていないため、直接クリックする
//   }

//   // URLのクエリパラメータからタブ番号を取得
//   const urlParams = new URLSearchParams(window.location.search);
//   const tabParam = urlParams.get('tab');
//   if (tabParam !== null) {
//     // タブ番号が存在する場合、そのタブをアクティブにする
//     const tabIndex = parseInt(tabParam) - 1; // インデックスに変換して渡すために-1する
//     if (tabIndex >= 0 && tabIndex < tabButtons.length) {
//       activateTab(tabIndex);
//     }
//   }
// });

// タブ
$(document).ready(function() {
  // URLから 'tab' パラメータを取得
  const tab = new URL(window.location.href).searchParams.get('tab');

  // タブメニューのクリックイベント
  $('.js-tab-list').on('click', function () {
    const number = $(this).attr('date-number'); // data-number属性を取得するよう修正

    // アクティブクラスの切り替え
    $('.js-tab-list').removeClass('is-active');
    $(this).addClass('is-active');
    $('.js-tab-content').removeClass('is-active');
    if (number) {
      $('#' + number).addClass('is-active');
    }
  });

  // 初期状態またはURLパラメータに基づくタブのアクティブ化
  if (tab) {
    // URLパラメータが存在する場合、該当するタブをアクティブにする
    $('.js-tab-list[date-number="' + tab + '"]').click(); // data-number属性を正しく指定するよう修正
  } else {
    // URLパラメータがない場合、最初のタブをアクティブにする
    $('.js-tab-list:first').click();
  }
});



