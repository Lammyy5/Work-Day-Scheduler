var descriptionEl = $('.description');
var saveBtnEl = $('.saveBtn');
var currentDayEl = $('#currentDay');
var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
let hour = dayjs().format('hh');
let hourIds = [];
let past = $('.past');
let present = $('.present');
let future = $('.future');
$('.time-block').each(function() {
    hourIds.push(this.id.match(/(\d+)/).shift());
});
console.log(hourIds);
console.log(hour);
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let timeeBlock;
$(function () {
	saveBtnEl.on('click', function (event) {
		let timeBlock = $(this).closest('.time-block');
		let descriptionEl = timeBlock.find('.description');
		let descriptionVal = descriptionEl.val();

		let hourId = timeBlock.attr('id');
		let schedule = {
			time: hourId,
			description: descriptionVal,
		};

		// Retrieve existing schedules from local storage
		

		// Add new schedule to the array
		

		// Save updated array back to local storage
		localStorage.setItem('schedule', JSON.stringify(schedule));
		
		getSchedule();
	});

	// TODO: Add a listener for click events on the save button. This code should
	// use the id in the containing time-block as a key to save the user input in
	// local storage. HINT: What does `this` reference in the click listener
	// function? How can DOM traversal be used to get the "hour-x" id of the
	// time-block containing the button that was clicked? How might the id be
	// useful when saving the description in local storage?

	// TODO: Add code to apply the past, present, or future class to each time
	// block by comparing the id to the current hour. HINTS: How can the id
	// attribute of each time-block be used to conditionally add or remove the
	// past, present, and future classes? How can Day.js be used to get the
	// current hour in 24-hour time?
function setColor(){
	console.log(hour)
	
}
	// TODO: Add code to get any user input that was saved in localStorage and set
	// the values of the corresponding textarea elements. HINT: How can the id
	// attrhhhhibute of each time-block be used to do this?
	function getSchedule() {
let savedSchedule = JSON.parse(localStorage.getItem('schedule'))
console.log(savedSchedule)
// if(){}
	}
	// TODO: Add code to display the current date in the header of the page.
	function setTime() {
		let rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
		currentDayEl.text(rightNow);
	}
	setColor()
	setTime();
	setInterval(setTime, 1000);
});
