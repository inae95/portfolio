var togglebtn = document.querySelector('.togglebtn');
var nav=document.querySelector('nav');

togglebtn.addEventListener('click', function(){
  nav.classList.add('on');      
})
var closeBtn = document.querySelector('.close_btn');
closeBtn.addEventListener('click',function(){
  nav.classList.remove('on');      
});


// window.addEventListener('scroll', function(){
//   var docTop = $(document).scrollTop();
//   var navColor = document.querySelectorAll('nav>ul>li>a');
  

//   if(docTop >= 870){
//     $('.navbar').addClass('active');
//     $('.logo').css('backgroundPosition','0 0');
//     $(navColor).css('color','black');

//   } else {
//     $('.navbar').removeClass('active');
//     $('.logo').css('backgroundPosition','-60px 0');
//     $(navColor).css('color','white');
//   };
// });



