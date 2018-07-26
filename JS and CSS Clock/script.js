const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock(){
  //new date object, saying the date from the browser
  var date = new Date();
  //pull out from the object "date" hours mins and secs by using methods
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  //console.log the time:
  console.log ('hour '+ hr + ' minues ' + min + 'seconds '+ sec);


  //degrees of arms, need to figure them out of for how many pieces th clock is divided
  let hrPosition = (hr*360/12)+(min*(360/60)/12);
  let minPosition = (min*360/60) + (sec*(360/60)/60); //minute postion + sec so the minute arm move a little if there is between 1 to 60  secs, and not the full portion if the sec is up
  let secPosition = sec*360/60;//how many segments on the clock face should the arm move

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(runTheClock, 1000); //run the function every second
