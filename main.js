//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
const testpage2btn=document.querySelector("#testpage2btn");
const Gamebtn=document.querySelector("#Gamebtn");
const Historybtn=document.querySelector("#Historybtn");
const Historybtn2=document.querySelector("#Historybtn2");
const Historybtn3=document.querySelector("#Historybtn3");
const Historybtn4=document.querySelector("#Historybtn4");
const Historybtn5=document.querySelector("#Historybtn5");
const testpage3btn=document.querySelector("#testpage3btn");
const testpage1btn=document.querySelector("#testpage1btn");
var allpages=document.querySelectorAll(".page");
const page1=document.querySelector("#page1");
const page2=document.querySelector("#page2");
const page3=document.querySelector("#page3");
const page4=document.querySelector("#page4");
const page5=document.querySelector("#page5");
const page6=document.querySelector("#page6");
const page8=document.querySelector("#page8");
const page9=document.querySelector("#page9");
const page10=document.querySelector("#page10");
const page11=document.querySelector("#page11");
const page12=document.querySelector("#page12");
const page13=document.querySelector("#page13");
const page14=document.querySelector("#page14");
//select all subtopic pages
function hideall(){ //function to hide all pages
	for(let onepage of allpages)
	{ //go through all subtopic pages
		onepage.style.display="none"; //hide it
	}
}
function hideMainPages() {
	document.querySelector("#page1").style.display = "none";
	document.querySelector("#page2").style.display = "none";
	document.querySelector("#page3").style.display = "none";
	document.querySelector("#page6").style.display = "none";
}
function show(pgno)
{ //function to show selected page no
//select the page based on the parameter passed in
	let onepage=document.querySelector("#page"+pgno);
	onepage.style.display="block"; //show the page
}
page1btn.addEventListener("click", function () 
{
	hideMainPages();
	page1.classList.add("pageanim");
	show(1);
});
page2btn.addEventListener("click", function () 
{
	hideMainPages();
	page2.classList.add("pageanim");
	show(2);
});
page3btn.addEventListener("click", function () 
{
	hideMainPages();
	page3.classList.add("pageanim");
	show(3);
});
page4btn.addEventListener("click", function () 
{
	hideMainPages();
	page6.classList.add("pageanim");
	show(6);
});
testpage2btn.addEventListener("click", function () 
{
	page4.classList.add("pageanim");
	show(4);
});
var timerInterval;
var TimerCounter = 60;
Gamebtn.addEventListener("click", function () 
{
	page5.classList.add("pageanim");
	show(5);
	timerInterval = setInterval(timer,1000);
});
Historybtn.addEventListener("click", function () 
{
	page8.classList.add("pageanim");
	show(8);
});
Historybtn2.addEventListener("click", function () 
{
	page9.classList.add("pageanim");
	show(9);
});
Historybtn3.addEventListener("click", function () 
{
	page10.classList.add("pageanim");
	show(10);
});
Historybtn4.addEventListener("click", function () 
{
	page11.classList.add("pageanim");
	show(11);
});
Historybtn5.addEventListener("click", function () 
{
	page12.classList.add("pageanim");
	show(12);
});
testpage3btn.addEventListener("click", function () 
{
	page13.classList.add("pageanim");
	show(13);
});
testpage1btn.addEventListener("click", function () 
{
	page14.classList.add("pageanim");
	show(14);
});
hideall();
/*JS for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
const menuItemsList=document.querySelector("nav ul");
hamBtn.addEventListener("click",toggleMenus);
function toggleMenus()
{
	//if menuItemsList dont have the class "menuShow", add it, else remove it
	menuItemsList.classList.toggle("menuShow");
	//if menu is showing (has the class “menuShow”)
	if(menuItemsList.classList.contains("menuShow"))
	{
		hamBtn.innerHTML="Close Menu"; //change button text to chose menu
	}
	else
	{ //if menu NOT showing
		hamBtn.innerHTML="Open Menu"; //change button text open menu
	}
}
const noteId = document.getElementById("noteId");
const beamednoteId = document.getElementById("beamednoteId");
var moveNoteItvId = setInterval(MoveNote, 2000);
var moveBeamedNoteItvId = setInterval(MoveBeamedNote, 2000);
const restartbtn=document.querySelector("#restartbtn");
const stopbtn=document.querySelector("#stopbtn");
noteId.addEventListener("click",NoteCatch);
beamednoteId.addEventListener("click",BeamedNoteCatch);
restartbtn.addEventListener("click",Restartgame);
stopbtn.addEventListener("click",Stopgame);
var clickable = true;
var clickable2 = true;
var Totalbeats = 60;
function timer()
{
	TimerCounter--;
	TimerBox.innerHTML = "Time left: " + TimerCounter;
	if (TimerCounter <= 0)
	{
		clearInterval(timerInterval);
		clearInterval(moveNoteItvId);
		clearInterval(moveBeamedNoteItvId);
		var missedbeats = parseInt(Totalbeats)-parseInt(score);
		TimerBox.innerHTML = "Game Over! you missed: " + missedbeats + " beats";
		noteId.removeEventListener("click", NoteCatch); // Prevent scoring
		beamednoteId.removeEventListener("click", BeamedNoteCatch); // Prevent scoring
	}
}
function Stopgame ()
{
		clearInterval(timerInterval);
		clearInterval(moveNoteItvId);
		clearInterval(moveBeamedNoteItvId);
		var missedbeats = parseInt(Totalbeats)-parseInt(score);
		TimerBox.innerHTML = "Game Over! you missed: " + missedbeats + " beats";
		noteId.removeEventListener("click", NoteCatch); // Prevent scoring
		beamednoteId.removeEventListener("click", BeamedNoteCatch); // Prevent scoring
		TimerCounter=0;
}
function Restartgame ()
{
	if (TimerCounter==0)
	{
		TimerCounter=60;
		score=0;
		scoreBox.innerHTML = "Score: " + score;
		clickable = true;
		clickable2 = true;
		moveNoteItvId = setInterval(MoveNote, 2000);
		moveBeamedNoteItvId = setInterval(MoveBeamedNote, 2000);
		noteId.addEventListener("click",NoteCatch);
		beamednoteId.addEventListener("click",BeamedNoteCatch);
		timerInterval = setInterval(timer,1000);
		TimerBox.innerHTML = "Time left: " + TimerCounter;
	}
}
function GetRandom(min,max)
{
	return Math.round(Math.random() * (max - min)) + min;
}
const Metronome = new Audio("Audios/Metronome.mp3");
function MoveNote() 
{
	clickable=false;
	noteId.classList.add("shrink");
	setTimeout (function()
	{
		noteId.style.left = GetRandom(0, 32) + "vw";
		noteId.style.top = GetRandom(0, 25) + "vh";
	}, 500);
	setTimeout (function ()
	{
		noteId.classList.remove("shrink");
		clickable=true;
	}, 1000);
}
function MoveBeamedNote() 
{
	clickable2=false;
	beamednoteId.classList.add("shrink");
	setTimeout (function()
	{
		beamednoteId.style.left = GetRandom(0, 32) + "vw";
		beamednoteId.style.top = GetRandom(0, 46) + "vh";
	}, 500);
	setTimeout (function ()
	{
		beamednoteId.classList.remove("shrink");
		clickable2=true;
	}, 1000);
}

const scoreBox=document.getElementById("scoreBox");
const TimerBox=document.getElementById("TimerBox");
var score=0;
function NoteCatch() 
{
	if(clickable==true)
	{
		score++;
		scoreBox.innerHTML = "Score: " + score;
		Metronome.play();
		clickable=false;
	}
}
function BeamedNoteCatch() 
{
	if(clickable2==true)
	{
		score--;
		scoreBox.innerHTML = "Score: " + score;
		Metronome.play();
		clickable2=false;
	}
}
var togglefs=0;
const btnFS=document.querySelector("#btnFS");
btnFS.addEventListener("click", toggleFullscreen);

function toggleFullscreen()
{
	if(togglefs == 0)
	{
		togglefs = 1;
		enterFullscreen();
	}
	else if(togglefs == 1)
	{
		togglefs = 0;
		exitFullscreen();
	}
}
function enterFullscreen() 
{
	if (document.documentElement.requestFullscreen) 
	{
	document.documentElement.requestFullscreen();
	} 
	else if (document.documentElement.mozRequestFullScreen) 
	{ // Firefox
	document.documentElement.mozRequestFullScreen();
	}
	else if (document.documentElement.webkitRequestFullscreen) 
	{ // Chrome, Safari, and Opera
	document.documentElement.webkitRequestFullscreen();
	}
	else if (document.documentElement.msRequestFullscreen) 
	{ // IE/Edge
	document.documentElement.msRequestFullscreen();
	}
}
function exitFullscreen() 
{
	if (document.exitFullscreen) 
	{
	document.exitFullscreen();
	} 
	else if (document.mozCancelFullScreen) 
	{ // Firefox
	document.mozCancelFullScreen();
	} 
	else if (document.webkitExitFullscreen) 
	{ // Chrome, Safari, and Opera
	document.webkitExitFullscreen();
	} 
	else if (document.msExitFullscreen) 
	{ // IE/Edge
	document.msExitFullscreen();
	}
}
const btnSubmit=document.querySelector("#btnSubmit");
const btn2Submit=document.querySelector("#btn2Submit");
const btn3Submit=document.querySelector("#btn3Submit");
btnSubmit.addEventListener("click",CheckAns);
btn2Submit.addEventListener("click",CheckAns2);
btn3Submit.addEventListener("click",CheckAns3);
const quizscorebox=document.querySelector("#quizscorebox");
const quizscorebox2=document.querySelector("#quizscorebox2");
const quizscorebox3=document.querySelector("#quizscorebox3");
var q1,q2,q3,quizscore=0;
var test2q1,test2q2,test2q3,quizscore2=0;
var test3q1,test3q2,test3q3,quizscore3=0;
function CheckAns(){
	quizscore=0; //reset score to 0, check ans and give score if correct
	//read the value of the selected radio button for q1
	q1=document.querySelector("input[name='q1']:checked").value;
	if(q1=="Charles Darwin")quizscore++;
	console.log(q1);
	//read the value of the selected radio button for q2
	q2=document.querySelector("input[name='q2']:checked").value;
	if(q2=="Universal Language")quizscore++;
	console.log(q2);
	q3=document.querySelector("input[name='q3']:checked").value;
	if(q3=="We Don't Actually Know")quizscore++;
	console.log(q3);
	if(quizscore >= 1) 
	{
		quizscorebox.innerHTML="Correct! you got: "+quizscore+"/3";
	}else
	{
		quizscorebox.innerHTML="Incorrect! You got all of them wrong!";
	}
}
function CheckAns2(){
	quizscore2=0; //reset score to 0, check ans and give score if correct
	//read the value of the selected radio button for q1
	test2q1=document.querySelector("input[name='test2q1']:checked").value;
	if(test2q1=="Popularity")quizscore2++;
	console.log(test2q1);
	//read the value of the selected radio button for q2
	test2q2=document.querySelector("input[name='test2q2']:checked").value;
	if(test2q2=="Shoegaze")quizscore2++;
	console.log(test2q2);
	test2q3=document.querySelector("input[name='test2q3']:checked").value;
	if(test2q3=="IQ")quizscore2++;
	console.log(test2q3);
	if(quizscore2 >= 1) 
	{
		quizscorebox2.innerHTML="Correct! you got: "+quizscore2+"/3";
	}else
	{
		quizscorebox2.innerHTML="Incorrect! You got all of them wrong!";
	}
}
function CheckAns3(){
	quizscore3=0;
	test3q1=document.querySelector("input[name='test3q1']:checked").value;
	if(test3q1=="Shoegaze era")quizscore3++;
	test3q2=document.querySelector("input[name='test3q2']:checked").value;
	if(test3q2=="Bach")quizscore3++;
	test3q3=document.querySelector("input[name='test3q3']:checked").value;
	if(test3q3=="The 1950s")quizscore3++;
	if(quizscore3 >= 1) 
	{
		quizscorebox3.innerHTML="Correct! you got: "+quizscore3+"/3";
	}else
	{
		quizscorebox3.innerHTML="Incorrect! You got all of them wrong!";
	}
}