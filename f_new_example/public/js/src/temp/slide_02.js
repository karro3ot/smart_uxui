// slide_02.js
(function($){
  const viewBox2 = $('#viewBox_02');
  const indicator = viewBox2.find('.indicator');
  const indiLi = indicator.find('li');
  const indiLiLink = indiLi.children('a');
  const viewBtn = viewBox2.find('.view_btn');
  const pause = viewBtn.find('.pause'); 
  const play = viewBtn.find('.play');

  const slideForm = viewBox2.find('.slide_02_form');
  const slideGuide = slideForm.children ('.guide');
  const slideEach = slideGuide.children ('.banner_area');

  let timed = 500;
  let myn = 0, maxn = slideEach.length;
  let mybool = true;
// ------------------------------------------------------
// 공통기능 수행
  const MoveSlide = function(n, bool){
    indiLiLink.removeClass('action');
    indiLi.eq(n).children('a').addClass('action');
    slideGuide.animate({'marginLeft':(-100 * n)+'%'}, function(){
      slideEach.removeClass('action');
      setTimeout(function(){
        slideEach.eq(n).addClass('action');
      }, timed);
    });
    // play, stop 버튼 동작유무 판단
    if(!bool){
      play.show();
      pause.hide();
    }else{
      pause.show();
      play.hide();
    }
  }; // MoveSlide() // =====================================
MoveSlide(0, true);
// ----------------------------------------------------------
// 일정 시간마다 광고배너 움직이게 하기
let go;
const GoSlide = function(){
go = setInterval(function(){
  myn++;
  if(myn >= maxn){myn = 0;}
  MoveSlide(myn, true);
 }, timed * 4);
}; // GoSlide();

const StopSlide = function(){clearInterval(go);};


let PlayBanner = function(bool){
  if(bool){
    GoSlide();
  }else{
    StopSlide();
  }
}; // PlayBanner()
PlayBanner(mybool);

// --------------------------------------------------------
viewBox2.on('mouseenter', function(){PlayBanner(false);});
viewBox2.on('mouseleave', function(){PlayBanner(true);});
pause.on('click', function(){PlayBanner(false);});
play.on('click', function(){PlayBanner(true);});
// ---------------------------------------------------------
// 클릭시 배너 움직이게 만들기
  indiLiLink.on('click focus', function(e){
    e.preventDefault();
    e.stopPropagation();
    myn = $(this).parent('li').index();
    mybool = 
    MoveSlide(myn, true);
    PlayBanner(false);
  });
// ---------------------------------------------------------- 


})(jQuery);


// setTimeout() : 일정시간 뒤에 수행
// setInterval() : 일정시간마다 수행
// clearInterval() : setInterval의 기능을 취소/정지

/* let i = 0, maxi = 4, timed = 1000, go;
let Goslide = function(){
  go = setInterval(function(){
    i++; 
    if(i >= maxi){i = 0;} 
    console.log(i);
  }, timed);
}; // Goslide()

Goslide(); // 최초의 수행


// setTimeout(function(){clearInterval(go);}, timed * 15);
$(document).on('mouseenter', function(){
  clearInterval(go);
});
$(document).on('mouseleave', function(){
  Goslide();
}); */