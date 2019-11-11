// jq_landing_01.js
(function($){

  const win = $(window);
  const headBox = $('#headBox');
  const viewBox = $('#viewBox');
  const con_01 = $('#conBox_01');
  const con_02 = $('#conBox_02');
  const con_03 = $('#conBox_03');

  let winH = win.outerHeight(); // 브라우저의 높이값
  let headBoxH = headBox.outerHeight();
  
  // con_01의 위치에서 브라우저의 2/3(3분의2) 높이만큼 전에서 구동 처리
  let con_01_offset = con_01.offset().top;
  let myCon01_offset = con_01_offset - (winH/3*2);
  // con_02의 위치에서 브라우저의 1/2(2분의1) 높이만큼 전에서 구동 처리
  let con_02_offset = con_02.offset().top;
  let myCon02_offset = con_02_offset - (winH/2);

  // con_03의 위치파악
  let con_03_offset = con_03.offset().top;
  let myCon03_offset = con_03_offset - (winH/2);

  // ------------------------------------------
  win.on('scroll', function(){
    let winScroll = win.scrollTop();
    // headBox 기능
    if(winScroll > headBoxH){
      headBox.addClass('action');
    }else{
      headBox.removeClass('action');
    }

    // viewBox 나타나게 만들기
    if(winScroll > headBoxH){
      viewBox.find('h2').addClass('action');
      viewBox.find('p').addClass('action');
    }else{
      viewBox.find('h2').removeClass('action');
      viewBox.find('p').removeClass('action');
    }

    // -------------------------------------
    // conBox_01 내용
    let conImg = con_01.find('.narr').children('.img_box');
    let conNar = con_01.find('.narr').children('.nar_box');
    if(winScroll > myCon01_offset){
      conImg.addClass('action');
      conNar.addClass('action');
    }else{
      conImg.removeClass('action');
      conNar.removeClass('action');
    }
    // --------------------------------------
    if(winScroll > myCon02_offset){
      setTimeout(function(){
        $('.con_02').addClass('action');
      }, 200);
    }else{
      $('.con_02').removeClass('action');
    }
    // --------------------------------------
    // scroll 처리시 03 이미지가 왼쪽에서부터 오른쪽으로 이동하게 하기
    let n = 0;
    if(winScroll > myCon03_offset){
      let myLeft = winScroll - myCon03_offset;

      let myn = Math.round(myLeft % 18)+1;
      if(myn < 10){n = '0' + myn;
      }else{n = myn;}

      con_03.find('.mv_bird').css({top:myLeft + 'px', left:myLeft + 'px', backgroundImage:'url(../../img/bird/bird_'+ n +'.png)'});
    }
  });
  // Math.random(), Math.round(), Math.ceil(), Math.floor(), Math.abs()
  let r = Math.abs(-4.9);
  console.log(r);
})(jQuery);