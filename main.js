var introFlag="f";
var aboutFlag="f";
var statsFlag="f";
var linksFlag="f";

window.onload =function fadeIn() {
	$("#firstMean").fadeIn(1000);
  setTimeout(nextfade,2000);
}

function nextfade(){
  $("#thirdMean").fadeIn(1000);
}

function dropTopBenzAbout(){
	if(aboutFlag!="t"){
	$("#special").css("color","inherit");
	$("#leftLinksContain").css("display","none");
	$("#leftLinksContain").css("display","");
	$("#leftStatsContain").css("display","");
	$("#rightStatsContain").css("display","");
	$("#leftStatsContain").css("display","none");
	$("#rightStatsContain").css("display","none");
	$("#rightContain").css("bottom","");
	$("#leftContain").css("bottom","");
  $("#rightContain").animate({"top": 1000},1000);
  $("#leftContain").animate({"top": 1000},1000);
	$("#right2Contain").animate({"right": 100}, 1000);
	$("#left2Contain").animate({"left": 100}, 1000);
  $("#rightContain").css("display","none");
  $("#leftContain").css("display","none");
  $("#video").remove();
  $("#topbar").addClass("topbar2");
  $("#title").addClass("title2");
  $("#subtitle").addClass("subtitle2");
  $("#lk").addClass("lk2");
  var newVid='<video autoplay loop id="video" muted><source src="Computer Keyboard - 3174.mp4" type="video/mp4"></video>';
  $("body").append(newVid);
	$("#right2Contain").css("display","inline-block");
	$("#left2Contain").css("display","inline-block");
  setTimeout(goodfade1,1000);
	introFlag="f";
	aboutFlag="t";
	statsFlag="f";
	linksFlag="f";
	}
}

function dropTopBenzIntro(){
	if(introFlag!="t"){
		$("#special").css("color","#D9853B");
		$("#leftLinksContain").css("display","none");
		$("#leftLinksContain").css("display","");
		$("#leftStatsContain").css("display","");
		$("#rightStatsContain").css("display","");
		$("#leftStatsContain").css("display","none");
		$("#rightStatsContain").css("display","none");
		$("#rightContain").css("top","");
		$("#leftContain").css("top","");
		$("#left2Contain").css("display","none");
		$("#right2Contain").css("display","none");
	  $("#leftContain").animate({"bottom": 75},1000);
		$("#rightContain").animate({"bottom": 75},1000);
		$("#left2Contain").animate({"left": -800},1000);
	  $("#right2Contain").animate({"right": -800},1000);
	  $("#rightContain").css("display","flex");
	  $("#leftContain").css("display","inline-block");
	  $("#video").remove();
	  $("#topbar").removeClass("topbar2");
	  $("#title").removeClass("title2");
	  $("#subtitle").removeClass("subtitle2");
	  $("#lk").removeClass("lk2");
	  var newVid='<video autoplay loop id="video" muted><source src="Keyboard - 8246.mp4" type="video/mp4"></video>';
	  $("body").append(newVid);
	  setTimeout(meanfade1(),1000);
		introFlag="t";
		aboutFlag="f";
		statsFlag="f";
		linksFlag="f";
	}
}

function statsTab()
{
	if(statsFlag!="t"){
	$("#rightContain").css("display","");
  $("#leftContain").css("display","");
	$("#left2Contain").css("display","");
	$("#right2Contain").css("display","");
	$("#leftLinksContain").css("display","");
	$("#leftLinksContain").css("display","none");
	$("#rightContain").css("display","none");
  $("#leftContain").css("display","none");
	$("#left2Contain").css("display","none");
	$("#right2Contain").css("display","none");
	$("#leftStatsContain").css("display","inline-block");
	$("#rightStatsContain").css("display","inline-block");
	introFlag="f";
	aboutFlag="f";
	statsFlag="t";
	linksFlag="f";
	}
}

function linksTab()
{
	if(linksFlag!="t"){
	$("#rightContain").css("display","");
  $("#leftContain").css("display","");
	$("#left2Contain").css("display","");
	$("#right2Contain").css("display","");
	$("#leftStatsContain").css("display","");
	$("#rightStatsContain").css("display","");
	$("#leftStatsContain").css("display","none");
	$("#rightStatsContain").css("display","none");
	$("#rightContain").css("display","none");
  $("#leftContain").css("display","none");
	$("#left2Contain").css("display","none");
	$("#right2Contain").css("display","none");
	$("#leftLinksContain").css("display","inline-block");
	introFlag="f";
	aboutFlag="f";
	statsFlag="f";
	linksFlag="t";
	}
}

function goodfade1(){
  $("#firstGood").fadeIn(1000);
	$("#firstMean").fadeOut(10);
  setTimeout(goodfade2,1000);
}

function goodfade2(){
  $("#thirdGood").fadeIn(1000);
	$("#thirdMean").fadeOut(10);
}

function meanfade1(){
	$("#firstGood").fadeOut(10);
	$("#firstMean").fadeIn(1000);
  setTimeout(meanfade2,1000);
}

function meanfade2(){
	$("#thirdGood").fadeOut(10);
	$("#thirdMean").fadeIn(1000);
}
