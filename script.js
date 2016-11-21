$(document).ready(function(){
$("#sessionTime").html(25);
$("#breakTime").html(5);

var startTimerSI;
var startTimerB;

var audioElementWorkCompleted = document.createElement('audio');
audioElementWorkCompleted.setAttribute('src', 'workcompleted.mp3');
  
var audioElementBreakOver = document.createElement('audio');
audioElementBreakOver.setAttribute('src', 'breakover.mp3');

  
$('button[id="plusSessionTime"]').click(function(){
var sessionTimeInline = parseFloat(document.getElementById("sessionTime").innerHTML);
sessionTimeInline=sessionTimeInline+5;
$("#sessionTime").html(sessionTimeInline);
});

$('button[id="subtractSessionTime"]').click(function(){
var sessionTimeInline = parseFloat(document.getElementById("sessionTime").innerHTML);
if(sessionTimeInline>5){
sessionTimeInline=sessionTimeInline-5;
$("#sessionTime").html(sessionTimeInline);}

});

$('button[id="plusBreakTime"]').click(function(){
var breakTimeInline = parseFloat(document.getElementById("breakTime").innerHTML);
breakTimeInline=breakTimeInline+5;
$("#breakTime").html(breakTimeInline);
});

$('button[id="subtractBreakTime"]').click(function(){
var breakTimeInline = parseFloat(document.getElementById("breakTime").innerHTML);
if(breakTimeInline>5){
breakTimeInline=breakTimeInline-5;
$("#breakTime").html(breakTimeInline);}
});


$('button[id="startTimer"]').click(function(){
$("#plusSessionTime").prop("disabled",true);
$("#subtractSessionTime").prop("disabled",true);
$("#plusBreakTime").prop("disabled",true);
$("#subtractBreakTime").prop("disabled",true);
$("#startTimer").prop("disabled",true);

startTimerSI=setInterval(startSessionFunc, 60000);
function startSessionFunc() {
    var sessionTimeInline = parseFloat(document.getElementById("sessionTime").innerHTML);
	if(sessionTimeInline>0){
	sessionTimeInline=sessionTimeInline-1;
	$("#statusParagraph").html("Work Time Remaining: "+sessionTimeInline+" minute(s)");
	$("#sessionTime").html(sessionTimeInline);}
	else{
		clearInterval(startTimerSI);
		audioElementWorkCompleted.play(); 
		startTimerB=setInterval(startBreakFunc, 60000);
		function startBreakFunc(){
			if(parseFloat(document.getElementById("breakTime").innerHTML)==0){
				clearInterval(startTimerB);
				$("#plusSessionTime").prop("disabled",false);
				$("#subtractSessionTime").prop("disabled",false);
				$("#plusBreakTime").prop("disabled",false);
				$("#subtractBreakTime").prop("disabled",false);
				$("#startTimer").prop("disabled",false);
				audioElementBreakOver.play();  
				$("#statusParagraph").html("");

			}
			else{
			var breakTimeInline = parseFloat(document.getElementById("breakTime").innerHTML);
			breakTimeInline=breakTimeInline-1;
			$("#statusParagraph").html("Break Time Remaining: "+breakTimeInline+" minute(s)");
			$("#breakTime").html(breakTimeInline);}
		}
	}
}
});

$('button[id="stopTimer"]').click(function(){
clearInterval(startTimerSI);
clearInterval(startTimerB);
$("#plusSessionTime").prop("disabled",false);
$("#subtractSessionTime").prop("disabled",false);
$("#plusBreakTime").prop("disabled",false);
$("#subtractBreakTime").prop("disabled",false);
$("#startTimer").prop("disabled",false);
});


});
