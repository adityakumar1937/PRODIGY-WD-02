var hours = 0;
var minutes = 0;
var seconds = 0;
var count = 0;
var timer = false;


var mockuptime = document.getElementById("date")
let currentTime = new Date();
let time = currentTime.getHours() + ":" + currentTime.getMinutes();
mockuptime.innerHTML = time;

console.log(time);

function reset() {
  timer = false;
  if (document.getElementById("reset").classList.contains("active")){
    document.getElementById("reset").classList.remove("active");
  } else {
    document.getElementById("reset").classList.add("active");
  }

  hours = 0;
  minutes = 0;
  seconds = 0;
  count = 0;

  document.getElementById("hours").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function start() {
  timer = true;
  if (document.getElementById("start").classList.contains("active")){
    document.getElementById("start").classList.remove("active");
  } else {
    document.getElementById("start").classList.add("active");
  }
  Stopwatch();
}

function pause() {
  timer = false;
  if (document.getElementById("pause").classList.contains("active")){
    document.getElementById("pause").classList.remove("active");
  } else {
    document.getElementById("pause").classList.add("active");
  }
}

function Stopwatch() {
  if (timer == true) {
    count += 1;

    if (count == 100) {
      seconds += 1;
      count = 0;
    }

    if (seconds == 60) {
      minutes += 1;
      seconds = 0;
    }

    if (minutes === 60) {
      hr += 1;
      minutes = 0;
      seconds = 0;
    }

    var hrString = hours;
    var minString = minutes;
    var secString = seconds;
    var countString = count;

    if (hours < 10) {
      hrString = "0" + hrString;
    }
    if (minutes < 10) {
      minString = "0" + minString;
    }
    if (seconds < 10) {
      secString = "0" + secString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hours").innerHTML = hrString;
    document.getElementById("minutes").innerHTML = minString;
    document.getElementById("seconds").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;

    setTimeout("Stopwatch()", 10);
  }
}
