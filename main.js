//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const testpage2btn=document.querySelector("#testpage2btn");
const Gamebtn=document.querySelector("#Gamebtn");
var allpages=document.querySelectorAll(".page");
const MusicAudio = new Audio("Audios/Weird_fishes.mp3");
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
	document.querySelector("#page7").style.display = "none";
	page1.classList.add("pageanim");
	show(1);
});
page2btn.addEventListener("click", function () 
{
	hideMainPages();
	document.querySelector("#page7").style.display = "none";
	page2.classList.add("pageanim");
	show(2);
});
page3btn.addEventListener("click", function () 
{
	hideMainPages();
	document.querySelector("#page7").style.display = "none";
	page3.classList.add("pageanim");
	show(3);
});
page4btn.addEventListener("click", function () 
{
	hideMainPages();
	document.querySelector("#page7").style.display = "none";
	page6.classList.add("pageanim");
	show(6);
});
testpage2btn.addEventListener("click", function () 
{
	page4.classList.add("pageanim");
	show(4);
});
var timerInterval;
var Timer=0;
var TimerCounter = 318;
Gamebtn.addEventListener("click", function () 
{
	page5.classList.add("pageanim");
	show(5);
	MusicAudio.play();
	clearInterval(timerInterval);
	timerInterval = setInterval(timer,1000);
});
diagrambutton.addEventListener("click", function () 
{
	page7.classList.add("pageanim");
	show(7);
	hideMainPages();
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
var moveNoteItvId = setInterval(MoveNote, 780);
noteId.addEventListener("click",NoteCatch);

var Totalbeats = 794;
function timer()
{
	Timer++;
	TimerCounter--;
}
function GetRandom(min,max)
{
	return Math.round(Math.random() * (max - min)) + min;
}
function MoveNote() 
{
	noteId.classList.add("shrink");
	setTimeout (function()
	{
		noteId.style.left = GetRandom(0, 30) + "vw";
		noteId.style.top = GetRandom(0, 13) + "vh";
	}, 195);
	setTimeout (function ()
	{
		noteId.classList.remove("shrink");
	}, 390);

	TimerBox.innerHTML = "Time left: " + TimerCounter;
	if (Timer >= 318)
	{
		clearInterval(moveNoteItvId);
		var missedbeats = parseInt(Totalbeats)-parseInt(score);
		TimerBox.innerHTML = "Game Over! you missed: " + missedbeats + " beats";
	}
}

const scoreBox=document.getElementById("scoreBox");
var score=0;
function NoteCatch() 
{
	score++;
	scoreBox.innerHTML = "Score: " + score;
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