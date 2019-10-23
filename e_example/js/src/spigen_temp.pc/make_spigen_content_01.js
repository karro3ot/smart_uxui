// make_spigen_content_01.js

(function($){
	// console.log('load');
	const conArea = $('.content_area');
	const conDt = conArea.find('dt');
	const conDd = conArea.find('dd');
	const conDtBtn = conDt.children('button');

	 conDt.children('button').on('click focus', function(e){
		e.preventDefault();
		let btn = $(this);
		let btnParent = btn.parent();
		let parNext = btnParent.next('dd');

		btn.addClass('action');
		btnParent.siblings('dt').children('button').removeClass('action');

		// step_1
		parNext.addClass('action');
		parNext.siblings('dd').removeClass('action');

		// step_2
		parNext.stop().fadeIn();
		parNext.siblings('dd').stop().fadeOut();
		// action 클래스 이름으로 구분만 할 수 있도록 처러ㅣ하고,
		// css에서 동작하지 않도록 처리
	});


// ============================================================
const bmText = '\
	<div class="album">\
	<a href="#">\
		<h4></h4>\
		<p class="con"></p>\
		<p class="data"></p>\
	</a>\
	</div>';

let imgUrl = "../img/spigen/";
const mediaList = [
	{text:'[youtube] 아마존으로 2600억 매출', data:'2019.10.22', img:'media_01.jpg'}, {text:'슈피겐코리아 미국 아마존 독점유통', date:'2019.10.20', img:'media_02.jpg'}, 
	{text:'[youtube] \'취업비자\' 기업탐방', date:'2019.10.10', img:'media_03.jpg'}];

const blogList = [
	{text:'아무리 급해도 놓칠 수 없는 한 가지!', data:'2019.10.22', img:'blog_01.jpg'},
	{text:'업무 중 즐기는 문화예술공연', date:'2019.10.20', img:'blog_02.jpg'}, 
	{text:'풀필먼트(fulfillment) 서비스의 새로운 바람', date:'2019.10.10', img:'blog_03.jpg'}];

// mediaList[0].text
// mediaList[1].date 

// const blogList = ;

// ForList([selector], [array]);
const ForList = function(mySel, myList, myText){
	let tabBox = conArea.find(mySel);
	const bmText = '\
	<div class="album">\
	<a href="#">\
		<h4></h4>\
		<p class="con"></p>\
		<p class="data"></p>\
	</a>\
	</div>';
	for(let i = 0; i < myList.length; i++){
		tabBox.append(bmText);
		let myNth = tabBox.children('.album').eq(i);

		myNth.find('h4').text(myText);
		myNth.find('.con').text(myList[i].text);
		myNth.find('.date').text(myList[i].date);

		let myImg = imgUrl + myList[i].img;
		myNth.css({'backgroundImage':'url('+ myImg +')', 'backgroundRepeat':'no-repeat', 'background-position':'50% 50%'});
		// myNth.css({'backgroundImage':`url(${myImg})`});
	}
}; // ForList () End

ForList('.media', mediaList, 'media');
ForList('.blog', blogList, 'blog');


/**
 * TODO :
 * 1. 사진 이미지 저장(배열요소에 이미지 담고, 반복문에 포함)
 * 2. 키보드 제어(화살표로 설정)
 * 3. 모든 내용에 이미지/내용 작성
 */


// 키보드 제어(dt>button에 키보드를 설정)
conDtBtn.on('keyup', function(e){
	console.log(e.keyCode);
	// 왼쪽37, 오른쪽39, 위38, 아래40
	let num = e.keyCode;
	let beforeKey = num === 37 || num === 38 // 둘중 하나가 참이면 참 도출
	let afterKey = num === 39 || num === 40  // 둘중 하나가 참이면 참 도출
	let pdt = $(this).parent(conDt);

	// if(beforeKey){
	// 	pdt.prevAll('dt').find('button').focus();
	// }else if(afterKey){
	// 	pdt.nextAll('dt').find('button').focus();
	// }

	switch(num){
		case 37:		case 38:
			pdt.prevAll('dt').find('button').focus();	break;
		case 39:		case 40:
			pdt.nextAll('dt').find('button').focus();	break;
	}
});

// ============================================================


})(jQuery);