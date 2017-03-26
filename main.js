//http://www.prankmenot.com/images/26-03-2017/RDBWSa.png
//http://www.prankmenot.com/images/26-03-2017/BtVCkY.png
//http://www.prankmenot.com/images/26-03-2017/BhQVSL.png
//2
//http://www.prankmenot.com/images/26-03-2017/WFUYvK.png
//http://www.prankmenot.com/images/26-03-2017/Z28KFF.png
window.onload =function fadeIn() {
	$("#firstMean").fadeIn(1000);
  setTimeout(nextfade,2000);
}

function nextfade(){
  $("#thirdMean").fadeIn(1000);
}

function dropTopBenz(){
  $("#rightContain").animate({"top": 1000},1000);
  $("#leftContain").animate({"top": 1000},1000);
  $("#rightContain").css("display","none");
  $("#leftContain").css("display","none");
  $("#right2Contain").css("display","inline-block");
  $("#video").remove();
  $("#topbar").addClass("topbar2");
  $("#title").addClass("title2");
  $("#subtitle").addClass("subtitle2");
  $("#lk").addClass("lk2");
  var newVid='<video autoplay loop id="video" muted><source src="Computer Keyboard - 3174.mp4" type="video/mp4"></video>';
  $("body").append(newVid);
  $("#right2Contain").animate({"right": 100}, 1000);
  $("#left2Contain").animate({"left": 100}, 1000);
  setTimeout(goodfade1,1000);

}

function goodfade1(){
  $("#firstGood").fadeIn(1000);
  setTimeout(goodfade2,1000);
}

function goodfade2(){
  $("#thirdGood").fadeIn(1000);
}
