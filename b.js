var redLabel,yellowLabel,greenLabel,rc=0,gc=0,yc=0,gc2=0,pause=0,reset=0 ,myVar ;
var temp;
function startAnimation()
{

	redLabel=document.getElementById('red');
	yellowLabel=document.getElementById('yellow');
	greenLabel=document.getElementById('green');
document.getElementById("startBtn").disabled = true;
	start();
}
function setRed(){
	if(pause==0)
	{
		document.getElementById("timings").innerHTML = "Timeout : 5 second(s)";
		count(4);
	redLabel.style.backgroundColor = "red";
	yellowLabel.style.backgroundColor = "black";
	greenLabel.style.backgroundColor = "black";
	document.getElementById("img1").src= "reds.png";
	rc=1;gc=0;yc=0,gc2=0;
	console.log("setRed : "+rc+"_"+yc+"_"+gc);

	 myVar = setTimeout(function(){ setRedYellow(); }, 5000);}
}
function setRedYellow(){if(pause==0){
	document.getElementById("timings").innerHTML = "Timeout : 3 second(s)";
	count(2);
	redLabel.style.backgroundColor = "red";
	yellowLabel.style.backgroundColor = "yellow";
	greenLabel.style.backgroundColor = "black";
	document.getElementById("img1").src= "redyellows.png";
	rc=1;gc=0;yc=1,gc2=0;
	console.log("setYellow : "+rc+"_"+yc+"_"+gc);

	 myVar = setTimeout(function(){ setGreen(); }, 3000);}
}
function setGreen(){
	if(pause==0){
		document.getElementById("timings").innerHTML = "Timeout : 5 second(s)";
		count(4);
	redLabel.style.backgroundColor = "black";
	yellowLabel.style.backgroundColor = "black";
	greenLabel.style.backgroundColor = "green";
	document.getElementById("img1").src= "greens.png";
	rc=0;gc=1;yc=0,gc2=0;
	console.log("setGreen : "+rc+"_"+yc+"_"+gc);

	 myVar = setTimeout(function(){ setYellow(); }, 5000);
	}
}
function setYellow(){if(pause==0){
	document.getElementById("timings").innerHTML = "Timeout : 2 second(s)";
	count(1);
	redLabel.style.backgroundColor = "black";
	yellowLabel.style.backgroundColor = "yellow";
	greenLabel.style.backgroundColor = "black";
	document.getElementById("img1").src= "yellows.png";
	rc=0;gc=0;yc=0,gc2=1;
	console.log("setGreen2 : "+rc+"_"+yc+"_"+gc);

	 myVar = setTimeout(function(){ setRed(); }, 2000);}
}
function start()
{
pause=0;
setRed();
//document.getElementById('pauseBtn').value='Pause';
}

function pauseAnimation(){
	clearTimeout(myVar);
	pause=1;
	document.getElementById('pauseBtn').value='Resume';
	temp=1;
}

function pauseFun() {
	if(temp == 1) {
		resumeAnimation();
	}
	else {
		pauseAnimation();
	}
}

function resumeAnimation(){
pause =0;
document.getElementById('pauseBtn').value='Pause';
	if(rc == 1 && yc == 0 && gc == 0 && gc2 == 0) {
		setRedYellow();
	}
	else if(rc == 1 && yc == 1 && gc == 0 && gc2 == 0) {
		setGreen();
	}
	else if(rc == 0 && yc == 0 && gc == 1 && gc2 == 0) {
		setYellow();
	}
	else if(rc == 0 && yc == 0 && gc == 0 && gc2 == 1) {
		setRed();
	}
	temp = 0;
}

function resetAnimation(){
	pause=0;
		clearTimeout(myVar);
	startAnimation();
}

function count(i) {
    var int = setInterval(function () {
        document.getElementById("timings").innerHTML = "Timeout : " + (i) + " second(s)";
        //if i is 1 interval will be stopped
        if(i > 1) {
        	i --;
        }
        else {
        	clearInterval(int);
        }
    }, 1000);
}
