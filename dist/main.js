var myDate = new Date();
console.log(myDate);
var hours = myDate.getHours();
console.log(hours);
var minutes = myDate.getMinutes();
console.log(minutes);
var seconds = myDate.getSeconds();
console.log(seconds);

var rndNbr = (Math.random()*(999999 - 111111) + 111111).toFixed(0);
console.log(rndNbr);
var rndColor = "#"+rndNbr;

var boxElement = document.getElementById("box");
var myClock = document.getElementById("clock");

boxElement.style.backgroundColor = "#f02312";
boxElement.style.width = "100%";
boxElement.style.height = "1000px"
// boxElement.style.paddingTop = "350px";

myClock.style.textDecoration = "underline";
myClock.style.color = "white";
myClock.style.backgroundColor = "#f02312";
myClock.style.borderRadius = "50%";
myClock.style.width = "60%";
myClock.style.height = "20rem";
myClock.style.marginLeft = "auto";
myClock.style.marginRight = "auto";
myClock.style.textAlign = "center";
myClock.style.lineHeight = "100%";
myClock.style.fontSize = "4rem";
myClock.style.paddingTop = "25%";
myClock.style.borderWidth = "20px";
myClock.style.border = "solid #831208";
myClock.style.borderOpacity = "0.1";
	
circle2.style.width = "60%";
circle2.style.height = "40rem";
circle2.style.backgroundColor = "#831208";
circle2.style.borderRadius = "50%";
circle2.style.paddingTop = "100px";
circle2.style.marginLeft = "auto";
circle2.style.marginRight = "auto";

circle1.style.width = "75%";
circle1.style.height = "60rem";
circle1.style.backgroundColor = "blue";
circle1.style.borderRadius = "50%";
circle1.style.paddingTop = "100px";
circle1.style.marginLeft = "auto";
circle1.style.marginRight = "auto";


if (seconds < 10) {
		seconds = "0" + seconds;
	}
if (minutes < 10) {
		minutes = "0" + minutes;
	}
if (hours < 10) {
		hours = "0" + hours;
	}

clock.innerHTML = hours + ":" + minutes + ":" + seconds;
console.log(clock.innerHTML);

var counter = myDate.getSeconds();

function dynamicClock() {
	counter++;
	if (counter < 10) {
		counter = "0" + counter;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (hours < 10) {
		hours = "0" + hours;
	}

	if (counter > 58) {
		counter = 0;
		minutes = minutes+1;
	}
	if (minutes === 60) {
		minutes = minutes - 60;
		hours = hours + 1;
	}
	if (hours === 24) {
		hours = hours - 24;
	}

	clock.innerHTML = hours.toString() + ":" + minutes.toString() + ":" + counter.toString();
}

var move = setInterval(dynamicClock, 1000);
console.log(move);


function circleOneInit() {

	circle1.style.backgroundColor = "#630d06";
}
function circleOneReturn() {

	circle1.style.backgroundColor = "##f02312";
}
function circleTwoInit() {

	circle1.style.backgroundColor = "#931409";
}function circleTwoReturn() {

	circle1.style.backgroundColor = "#f02312";
}
function boxInit() {

	circle1.style.backgroundColor = "#330703";
}function boxReturn() {

	circle1.style.backgroundColor = "#f02312";
}

setInterval(circleOneInit, 2000);
setInterval(circleOneReturn, 5000);
setInterval(circleTwoInit, 1000);
setInterval(circleTwoReturn, 4000);
setInterval(boxInit, 3000);
setInterval(boxReturn, 6000);


