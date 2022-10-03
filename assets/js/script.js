//var timeblockEl = $(#time-block);
//<p id="currentDay" class="lead"></p>
//var currentDayEl = $(moment().format('llll');)
var currentDayEl = $('#current-day');


function displayTime() {
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(currentTime);
}