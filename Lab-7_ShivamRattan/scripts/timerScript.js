//window loaded console log
window.addEventListener('onload',console.log("Window loaded"));

//declaring button to be used with eventlisteners later
let startBtn = document.querySelector('#btnStart');
let endBtn = document.querySelector('#btnStop');
let resetBtn = document.querySelector('#btnReset');

//declaring text elements to be used to display information later
let txtStartTime = document.querySelector('#txtStartTime');
let txtEndTime = document.querySelector('#txtEndTime');
let timerContainer = document.querySelector("#timer");

//declaring time objects for duration calculation, and writing formatted information to textboxes, and elements
let startTimeObj;
let endTimeObj;
let startTimeFormatted;
let endTimeFormatted;

//adding event listener for startButton.
//This will write to console, initialize start time object, startString for console/element and textbox
startBtn.addEventListener('click', function (){
    startTimeObj = new Date;
    startTimeFormatted = startTimeObj.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true });
    txtStartTime.value = startTimeFormatted;
    let startTimeString = "Start timer : " + startTimeFormatted;
    console.log(startTimeString);

});

//adding event listener for endButton
//This will write to console, initialize end time oject, endString for console/element and textbox
//This will also calculate duration, as end means that duration needs to be calculated, and outputs to new elements
endBtn.addEventListener('click', function (){
    endTimeObj = new Date;
    endTimeFormatted = endTimeObj.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true });
    txtEndTime.value = endTimeFormatted;
    let endTimeString = "End timer : " + endTimeFormatted;
    console.log(endTimeString);

    let duration = endTimeObj - startTimeObj;
    let durationString = "Duration is  => minutes : " + Math.floor(duration/60000) + " and Seconds : " + Math.floor((duration%60000)/1000);
    console.log(durationString);

    let addDuration = document.createElement('p')
        addDuration.className = "container-item";
        addDuration.textContent = durationString;
        timerContainer.appendChild(addDuration);
});


//Adding eventlisteners for clearing time objects, strings, text boxes and added child elements
resetBtn.addEventListener('click', function (){
    console.log("reset button clicked");
    startTimeObj = undefined;
    endTimeObj = undefined;
    startTimeFormatted = undefined;
    endTimeFormatted = undefined;
    txtEndTime.value="";
    txtStartTime.value="";
    while (timerContainer.lastElementChild !== null){
            timerContainer.lastElementChild.remove();
        }
});

