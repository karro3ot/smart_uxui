// jq_05_event_02.js

(function($){
  let menu = $('.menu');
  let menuUl = menu.children('ul');
  let menuLi = menuUl.children('li');
  let menuLink = menuLi.children('a');

  let mLiBg = menuLi.css('backgroundColor'); 
  let mLiBdr = menuLi.css('borderRadius'); 
  let mLinkColor = menuLink.css('color');
  let mLinkWeight = menuLink.css('fontWeight');
  menuLink.css({'outline':0});

  let set = {
    licolor : mLiBg,
    liborder : mLiBdr,
    linkcolor : mLinkColor,
    linkbold : mLinkWeight
  };

  set.licolor

  // focus : 초점이 잡힌 상태 (a, button, form 내부의 요소)
  menuLink.on('focus', function(){
    let mythis = $(this);
    mythis.parent('li').css({'backgroundColor':'#0af', 'borderRadius':'0.5rem'});
    mythis.css({'color':'#fff', 'fontWeight':'bold'});
  });

  // blur : 초점이 잡힌요소가 풀리는 상황
  menuLink.on('blur', function(){
    let mythis = $(this);
    mythis.parent('li').css({ 'backgroundColor': set.licolor, 'borderRadius': set.liborder});
    mythis.css({ 'color': set.linkcolor, 'fontWeight': set.linkbold});
  });

  let mytop = $('.top_link').children('button');
  /*
  mytop.on('mouseenter', function(){});
  mytop.on('mouseleave', function(){});

  mytop.on('mouseenter', function(){})
       .on('mouseleave', function(){}); // 메소드 체인을 이용한 기능
*/
  let topColor = mytop.css('backgroundColor')

  mytop.hover(function(){
                $(this).animate({'backgroundColor':'#fa5'});
              }, // 마우스 올렸을 경우 
              function(){
                $(this).animate({'backgroundColor': topColor});
              }); // 마우스 벗어났을 경우

  mytop.on('click', function(event){
    event.preventDefault(); // 선행되는 이벤트 제거
    $('html, body').animate({'scrollTop':0});
  });

/* 
 * css() => css 기능을 거의 다 쓸 수 있다.
 * animate()는 css의 기능을 쓸 수 있지만, 모두 쓸수는 없다.
 * transform, transition, animation, borderRadius 등 흔히 말하는 css3 기능은 동작하지 않는다.
 * 또한, backgroundColor, color 등 색상관련된 기능은 jquery-ui 에서 사용되는 기능
 * animate는 css와 다른 기능 일부가 첨부되어 있다. (scrollTop)
*/

const win = $(window);
const conBox = $('#contentBox');

win.on('scroll', function(){
  let myscroll = $(this).scrollTop();
  // console.log(myscroll);
if (myscroll > 150){
  // conBox.stop().animate({'backgroundColor':'#aca'}, 300);
  conBox.css({'backgroundColor':'#aca', 'transition':'all 300ms ease'});
}else{
  // conBox.stop().animate({'backgroundColor':'#fca'}, 300);
  conBox.css({'backgroundColor':'#fca', 'transition':'all 300ms ease'});
}

// (myscroll > 150) ? conBox.css({'backgroundColor':'#aca'}) : conBox.css({'backgroundColor':'#fca'};)
});

// 크기값이 변경 되었을때 사용하는 기능(가로, 세로 일부기능 제한 두고 사용)

let beforeWidth = win.width(); // 크기값이 변경되기전 가로 값
win.on('resize', function(){
    let afterWidth = win.width(); // 크기값이 변경된 후 가로 값

    if(beforeWidth !== afterWidth){
    console.log('크기가 변경 되었습니다.');
    history.go(0);

  }

});

/** 새로고침의 방법
 * location.reload(true);         // 새로고침(F5번키)
 * lacation.href = location.href; // 상단 주소창에 있는 주소로 이동
 * history.go(0);                 // 사용 기록중에 가장 최근 기록 위치로 이동
*/

})(jQuery);