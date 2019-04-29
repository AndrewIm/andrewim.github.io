 /* function for the timer where it uses seconds and centiseconds */
 window.onload = function() {

   var seconds = 00;
   var tens = 00;
   var appendTens = document.getElementById("tens")
   var appendSeconds = document.getElementById("seconds")
   var buttonStart = document.getElementById('button-start');
   var buttonStop = document.getElementById('button-stop');
   var buttonReset = document.getElementById('button-reset');
   var Interval;

   /* setup the bunttons for the timer so that the corresponding action occurs */
   buttonStart.onclick = function() {
     clearInterval(Interval);
     Interval = setInterval(StartTimer, 10);
   }

   buttonStop.onclick = function() {
     clearInterval(Interval);
     SetTime();
   }

   buttonReset.onclick = function() {
     clearInterval(Interval);
     tens = "00";
     seconds = "00";
     appendTens.innerHTML = tens;
     appendSeconds.innerHTML = seconds;
   }

   /* change the value of the timer to increase when it reaches above 9.
      It is setup so that it only takes in up to seconds and not minutes*/
   function StartTimer() {
     tens++;

     if (tens < 9) {
       appendTens.innerHTML = "0" + tens;
     }
     if (tens > 9) {
       appendTens.innerHTML = tens;
     }
     if (tens > 99) {
       seconds++;
       appendSeconds.innerHTML = "0" + seconds;
       tens = 0;
       appendTens.innerHTML = "0" + 0;
     }
     if (seconds > 9) {
       appendSeconds.innerHTML = seconds;
     }
   }


 }
 /* sets the value of the time input to the value that the timer is at */
 function SetTime() {
   document.getElementById("time").value = seconds.innerHTML + ":" + tens.innerHTML;

 }

 /* function for validating the input from the user */
 var value1, value2, value3, value4, timeTest, timeTest1, value6, valid;

 function ValidChecking(val) {

   /* set each of the values of the input to coresponding "value" except for time and makes sure the text under the inputs start as blank */
   value1 = document.getElementById("number").value;
   value2 = document.getElementById("first").value;
   value3 = document.getElementById("last").value;
   value4 = document.getElementById("date").value;
   value6 = document.getElementById("comment").value;

   valid = 1;

   document.getElementById('invalid1').innerHTML = "";
   document.getElementById('invalid2').innerHTML = "";
   document.getElementById('invalid3').innerHTML = "";
   document.getElementById('invalid4').innerHTML = "";
   document.getElementById('invalid6').innerHTML = "";

   /* checking the input to make sure if its not blank or it is a number for certain inputs */
   if (isNaN(value1) || value1.trim() === "") {
     document.getElementById('invalid1').innerHTML = "Invalid Input";
     valid = 0;
   }
   if (value2.trim() === "") {
     document.getElementById('invalid2').innerHTML = "Invalid Input";
     valid = 0;
   }
   if (value3.trim() === "") {
     document.getElementById('invalid3').innerHTML = "Invalid Input";
     valid = 0;
   }
   if (value4.trim() === "") {
     document.getElementById('invalid4').innerHTML = "Invalid Input";
     valid = 0;
   }
   ValidTime();
   if (value6.trim() === "") {
     document.getElementById('invalid6').innerHTML = "Invalid Input";
     valid = 0;
   }

   /* checks for outputting the correct output depending on which button was pressed */
   if (valid === 1 && val === "submit") {
     document.getElementById("print").innerHTML = "Submitted";
   }
   if (valid === 1 && val === "convert") {
     document.getElementById('print').innerHTML = "CSV Format: " +
       document.getElementById('number').value + "," +
       document.getElementById('first').value + "," +
       document.getElementById('last').value + "," +
       document.getElementById('date').value + "," +
       document.getElementById('time').value + "," +
       document.getElementById('comment').value;
   }
 }

 /* function that checks whether the time field meets the required format up to 000:00 */
 function ValidTime() {
   timeTest = /^([0-9][0-9][0-9]):([0-9][0-9])$/.test(time.value);
   timeTest1 = /^([0-9][0-9]):([0-9][0-9])$/.test(time.value);
   if (timeTest || timeTest1) {
     document.getElementById('invalid5').innerHTML = "";
   } else {
     document.getElementById('invalid5').innerHTML = "Invalid Input";
     valid = 0;
   }
 }
