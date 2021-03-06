// paul_viewBox.js
(function($){
  const viewBox = $('#viewBox');
  // 버튼 및 인디케이터 영역
  const indi = viewBox.find('.indicator');
  const indiCon = indi.find('p').children('em');
  const indiBtn = indi.find('.view_btn').children('button'); 


  // 슬라이드 영역
  const slide = viewBox.find('.slide_form');
  const slideUl = slide.find('ul');
  const slideLi = slideUl.find('li');
  // --------------------------------------------------------
  // 1. slide영역 순서에 맞게 배치
  let liLen = slideLi.length; // 3 - 0
  const slideZindexSet = function(){
    for(let i = 0; i < liLen; i++){
      slideLi.eq(i).css({'zIndex':liLen - i});
    }
  } // slideZindexSet();

  

  let textN = 0;
  const textEm = function(n){
    indiCon.text('0' + (n + 1));
  };
  textEm(textN);
  // ------------------------------------------------
  // li 첫번째만 만들고 나머지는 사라지게 만들기
  slideLi.eq(0).siblings().hide();
  slideLi.eq(0).find('dl').addClass('action');

  // ------------------------------------------------
  const fakeBtn = $('.fake_btn');
  fakeBtn.hide();

  // 버튼클릭
  indiBtn.on('click', function(e){
    e.preventDefault();

    fakeBtn.show();
    if($(this).index() == 0){ // next버튼
      textN++;
      if(textN >= liLen){textN = 0;}
      textEm(textN);
    }else{ // prev버튼
      textN--;
      if(textN < 0){textN = liLen-1}
      textEm(textN);
    }
    // slideLi.eq(textN).siblings().slideUp();
    // slideLi.eq(textN).slideDown();
    
    /* // 옆에서 불러오는 현상
    let slideThis = slideLi.eq(textN)
    slideThis.css({zIndex:liLen+2, left:-100 + '%'});
    slideThis.stop().show(function(){
      slideThis.animate({left:0}, function(){
        slideThis.siblings().hide();
        slideZindexSet();
      });
    }); // slideThis.slideDown
    */

    // 가로로 늘어나는 현상
    let slideThis = slideLi.eq(textN)
    slideThis.css({zIndex:liLen+2, width:0});
    slideThis.css({display:'block', padding:'5vw 0'});
      slideThis.stop().animate({width:100+'%'}, 1000, 'easeOutCubic', function(){
      slideThis.siblings().hide();
      slideZindexSet();
      fakeBtn.hide();
      slideThis.siblings().find('dl').removeClass('action');
      slideThis.find('dl').addClass('action');
    }); // slideThis.animate()
  }); // indiBtn.on('click')

  // -----------------------------------------------
  // li 보이지 않게 하고, -> li요소의 첫번째만 보이게 만들고
  // slideLi.hide();
  
  // 버튼 클릭시, 해당하는 순서에 맞는 li 요소를 나타나게 만들기

})(jQuery);

