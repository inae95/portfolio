// 마우스 효과
$(document).ready(function(){
  $(document).mousemove(function(e){
    //마우스커서 위치 담을 변수
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    //마우스 움직이기
    $(".mouse").show().css({
      left: mouseX + -20 + "px",
      top: mouseY + -20 + "px"
    });
  });
});
