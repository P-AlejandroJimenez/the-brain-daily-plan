var currentDayEl = $('#currentDay');




function displayTime() {
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(currentTime);
}
setInterval(displayTime, 1000);