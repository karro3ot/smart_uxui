// index.js

(function($){
  const gnb = $('#gnb');
  const gnbUl = gnb.children('ul');
  const gnbDd = gnb.find('dd');

  gnbUl.on('mouseenter', function(){
    gnbDd.stop().slideDown();
  });

  gnbUl.on('mouseleave', function(){
    gnbDd.stop().slideUp();
  });

  gnbUl.find('a').on('focus', function(){
    gnbDd.stop().slideDown();
  });

  gnbUl.find('a').on('blur', function(){
    gnbDd.stop().slideUp();
  });
  
})(jQuery);