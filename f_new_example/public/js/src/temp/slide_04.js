// slide_04.js
(function($){
// 이미지 경로, 이미지 파일 명
  const url = "../img/slide_01/";
 
  let imgList;

  $.ajax({
    async:false,
    type:'GET',
    url:'../data/slide_04.json',
    dataType:'json',
    error:function(){console.log('data error');},
    success:function(data){return imgList = data;}
  });
  console.log(imgList);
// ------------------------------------------------------------------------------------------------
// 기본 선택자 및 내용(기본틀) 생성
const slide_04 = $('#viewBox_04');
slide_04.append('<div class="slide_form"></div>');
const slideForm = slide_04.children('.slide_form');
slideForm.append('<ul></ul>');
const slideGuide = slideForm.children('ul');

let imglen = imgList.length;
let slideCon = '<dl><dt></dt><dd class="con"></dd>\
                <dd class="link"><a href=""></a></dd></dl>';

for(let i = 0; i < imgList.length; i++){
  slideGuide.append(`<li class="slide_4th_0${i+1}"></li>`);
  let li_nth = slideGuide.children('li').eq(i)
  // li_nth.text(imgList[i].title);
  li_nth.html(slideCon);
  li_nth.css({'backgroundImage':`url(${url + imgList[i].bgimg})`});
  // li_nth.css({'backgroundImage':"url(" + url + imgList[i]+")"});

  li_nth.find('dt').text(imgList[i].title);
  li_nth.find('.con').text(imgList[i].content);
  let link = li_nth.find('.link').children('a');
  link.text(imgList[i].linkTest);
  link.attr({'href':imgList[i].link, 'target':'_blank'});
}

let cloneLi = slideGuide.children('li').eq(-1).clone(true);
cloneLi.prependTo(slideGuide);
// slideGuide.prepend(cloneLi);

imglen++; // li 마지막 요소 추가하여 갯수 다시 파악
const slide4thLi = slideGuide.children('li');

slideGuide.css({'width':100 * imglen + '%'});
slide4thLi.css({'width':100 / imglen + '%', 'boxSizing':'border-box', 'border':'1px solid #5ff'});
// -------------------------------------------------------------------------------
// 버튼요소 만들기
let btnMake = `<div class="slide_04_btn_area">\
                <button type="button" class="next"><span>다음내용</span></button>\
                <button type="button" class="prev"><span>이전내용</span></button>\
              </div>`;

slide_04.prepend(btnMake);
const btnArea = slide_04.find('.slide_04_btn_area');
const btn = btnArea.children('button');

slide_04.css({'position':'relative'});
btnArea.css({'position':'absolute', 'top':'-50px', 'left':0});
btn.css({'width':'100px', 'height':'30px'});
btn.eq(0).css({'float':'right'});
btn.eq(1).css({'float':'left', 'marginRight':'10px'});
// ----------------------------------------------------------------------------
// 생성된 버튼을 이용하여 좌우 슬라이드 기능 수행
let num = 0;
/*
// next 버튼클릭
btn.eq(0).on('click', function(e){ 
  e.preventDefault();
  num++;
  // -----------------------
  if(num >= imglen-1){
    slideGuide.animate({'left':'100%'});
    num = 0;
  }
  // -----------------------
  slideGuide.stop().animate({'left':-100 * num + '%'}, 600);
});

// prev 버튼클릭
btn.eq(1).on('click', function(e){ 
  e.preventDefault();
  num--;
  slideGuide.stop().animate({'left':-100 * num + '%'}, 600, function(){
    // --------------------------
    if(num <= -1){
      num = imglen-2;
      slideGuide.stop().css({'left':-100 * num + '%'}, 600);
    }
    // --------------------------
  });
});
*/

// next, prev 버튼을 하나로 구현
btn.on('click', function(e){
  e.preventDefault();
  if($(this).index() == 0){num++;
    if(num >= imglen-1){slideGuide.animate({'left':'100%'}); num = 0;}
  }else{num--;}
    slideGuide.stop().animate({'left':-100 * num + '%'}, 600, function(){
      if(num <= -1){num = imglen-2; slideGuide.stop().css({'left':-100 * num + '%'}, 600);}
  });
});

// --------------------------------------------------------------------
})(jQuery);