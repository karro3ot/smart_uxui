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

  for(let i = 0; i > liLen; i++){
    slideLi.eq(i).css({'zIndex':liLen - i});
  }

  let textN = 0;
  const textEm = function(n){
    indiCon.text('0' + (n + 1));
  };
  textEm(textN);
  // ------------------------------------------------
  // 버튼클릭
  indiBtn.on('click', function(e){
    e.preventDefault();
    if($(this).index() == 0){ // next버튼
      textN++;
      if(textN >= liLen){textN = 0;}
      textEm(textN);
    }else{ // prev버튼
      textN--;
      if(textN < 0){textN = liLen-1}
      textEm(textN);
    }
  });

})(jQuery);

