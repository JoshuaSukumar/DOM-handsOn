// Code for Question - 1
let select = document.getElementById("text");
console.log(select);



// Code for Question - 2
let select1 = document.getElementsByTagName("h1");
console.log(select1[0]);




// Code for Question - 3
let select2 = document.getElementsByClassName('box');
console.log(select2[0]);




// Code for Question - 4
let changeText = document.getElementById('change');
changeText.innerText = "Hello World";
console.log(changeText);





// Code for Question - 5
let newText = document.getElementById('welcome');
function add() {
   console.log(newText.innerText = "Welcome to Elevation academy");
}




// Code for Question - 6
let style1 = document.getElementsByClassName('unique');
style1[0].setAttribute('id', 'heading');
style1[0].style.color = "red";
console.log(style1[0]);





// Code for Question - 7
let direction = document.getElementsByTagName('section');
function add1() {
   direction[0].style.flexDirection = 'column';
}


// code for Question - 9
setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		sec +
		am_pm;

	// Displaying the time
	document.getElementById(
		"clock"
	).innerHTML = currentTime;
}

showTime();
