var rndNbr = (Math.random()*(999999 - 111111) + 111111).toFixed(0);
var rndColor = "#"+rndNbr;

var boxElement = document.getElementById("box");
var myClock = document.getElementById("clock");

boxElement.style.width = "100%";
boxElement.style.height = "1000px"
boxElement.style.paddingTop = "150px";

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



function dynamicClock() {
	
var myDate = new Date();
var hours = myDate.getHours();
var minutes = myDate.getMinutes();
var seconds = myDate.getSeconds();

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (hours < 10) {
		hours = "0" + hours;
	}

	clock.innerHTML = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
}

var move = setInterval(dynamicClock, 1000);

window.onload = function() {
    var currentColor = "#9a1003";
    setInterval(function() {
        document.body.style.backgroundColor = currentColor;
        if (currentColor === "#9a1003") {
        	currentColor = "#dd1704";
        }
        else {
        	currentColor = "#9a1003";
        }
        myClock.style.backgroundColor = currentColor;
    }, 2000);
};

