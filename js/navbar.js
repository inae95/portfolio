var navHamOpen = document.querySelectorAll('.fa-bars');
var navHamClose = document.querySelectorAll('.fa-times');


window.addEventListener('scroll', function(){
  var docTop = $(document).scrollTop();
  var navColor = document.querySelectorAll('nav>ul>li>a');

  if(docTop >= 850){ 
    $('.navbar').addClass('active');
    $('.logo').css('backgroundPosition','0 0');
    $(navColor).css('color','black');
    $(navHamOpen).css('color','black');
    $(navHamClose).css('color','black');
  } else {
    $('.navbar').removeClass('active');
    $('.logo').css('backgroundPosition','-60px 0');
    $(navColor).css('color','white');
    $(navHamOpen).css('color','white');
    $(navHamClose).css('color','white');
  };
});

var togglebtn = document.querySelector('.togglebtn');
var nav=document.querySelector('nav');

togglebtn.addEventListener('click', function(){
  nav.classList.add('on');      
})
var closeBtn = document.querySelector('.close_btn');
closeBtn.addEventListener('click',function(){
  nav.classList.remove('on');      
});

    // $('nav>ul>li>a').mouseenter(function(){
    //   $(this).css('color','red');
    // });
    // $('nav>ul>li>a').mouseleave(function(){
    //   $(this).css('color','black');
    // });

