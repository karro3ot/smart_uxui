// join.js
(function($){
  // 영문대/소문자 및 숫자(특수문자) 포함하여 6~15글자
  let checkPw = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{6,15}$/
  // 이메일형식 체크(이름@주소.지역)
  let emailCk = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
  // 전화번호 형식
  let numCk = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/

  // ----------------------------------------------
  // id란 입력하지 않을때 상황
  const userName = $('#userName');
  userName.on('blur', function(){
    let thisVal = $(this).val();
    let thisLi = $(this).closest('li');
    console.log(emailCk.test(thisVal));
    if(thisVal == ""){
      thisLi.addClass('error');
    }else if(!emailCk.test(thisVal)){
      thisLi.addClass('error');
      thisLi.find('.narr').text('이메일 형식에 맞게 내용을 입력하세요.');
    }else{
      thisLi.removeClass('error');
    }
  });
  // --------------------------------------------
  // pw 비교해서 일치여부
  const userPw = $('#userPw');
  const userPwRe = $('#userPwre');
  const pwLabel = $('label[for="userPw"]');
  // -----------------------------------------
  pwLabel.on('mousedown', function(e){
    if(e.which){
      userPw.attr({type:'text'});
    }
  });
  pwLabel.on('mouseup keyup mouseremove', function(e){
    userPw.attr({type:'password'});
  });
  // -----------------------------------------
  let beforePwVal, afterPwVal;
  userPw.on('blur', function(){
    beforePwVal = userPw.val();
    let thisVal = $(this).val();
    let thisLi = $(this).closest('li');
    if(thisVal == ""){
      thisLi.find('.narr').text('비밀번호를 입력하세요.');
      thisLi.addClass('error');
    }if(thisVal.length <= 5){
      thisLi.find('.narr').text('비밀번호는 6~15입니다.');
      thisLi.addClass('error');
    }else if(!checkPw.test(thisVal)){
      thisLi.find('.narr').text('영문 대소문자, 특수문자 혼용');
      thisLi.addClass('error');
    }else{
      thisLi.removeClass('error');
    }
  });

  userPwRe.on('keyup', function(){
    afterPwVal = userPwRe.val();
    // console.log(beforePwVal + ':' + afterPwVal);
    if(beforePwVal !== afterPwVal){
      $(this).closest('li').addClass('error');
      console.log('비밀번호 입력이 일치하지 않음');
    }else{
      $(this).closest('li').removeClass('error');
    }
  });

  // 정규 표현식 : RegExp (regular expression)

  // let r = 'a'; // 문자
  // let n = 0; // 숫자
  // let v = r; // 변수 다시 설정
  // let a = []; // 배열
  // let o = {}; // 객체
  // let re = / /; // / / 사이에 들어가는 걸 정규 표현식이라고 함. 

  let a = 10;
  let b = 4;
  let c = 8;
  let re = /a + c/;
  // let re2 = new RegExp('a + c');
  // console.log(re2);

  // 정규표현식 메소드
  // 1. exec : 대응되는 문자열을 찾는 메소드(배열반환)
  // 2. test : 해당하는 문자열의 유무 파악(t/f)
  // 3. match : 해당하는 문자열의 유무 파악(배열반환)
  // 4. search : 해당하는 문자열의 유무 파악(인덱스반환)
  // 5. replace : 찾아 바꾸기
  // 6. split : 문자열을 배열로 반환(string 메소드)

  let t = /^a&$r/.test('after school');
  console.log(t);



})(jQuery);