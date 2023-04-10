var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));


$(function () {

var mDiv = $(".container-lg");

var currentHr = dayjs().format("H");
console.log(currentHr);

var times = [ 
  {
    schedTime: "9AM",
    timeVal: 9,
    id: "hour-9"
  },
  {
    schedTime: "10AM",
    timeVal: 10,
    id: "hour-10"
  },
  {
    schedTime: "11AM",
    timeVal: 11,
    id: "hour-11"
  },
  {
    schedTime: "12AM",
    timeVal: 12,
    id: "hour-12"
  },
  {
    schedTime: "1PM",
    timeVal: 13,
    id: "hour-13"
  },
  {
    schedTime: "2PM",
    timeVal: 14,
    id: "hour-14"
  },
  {
    schedTime: "3PM",
    timeVal: 15,
    id: "hour-15"
  },
  {
    schedTime: "4PM",
    timeVal: 16,
    id: "hour-16"
  },
  {
    schedTime: "5PM",
    timeVal: 17,
    id: "hour-17"
  }
]

function generateBlocks() {
  for (var i = 0; i < times.length; i++) {

    // creating div to hold the id (time block)
    var divRow = $("<div>");
    divRow.addClass("row time-block");
    divRow.attr("id", times[i].id);

    // creating div to hold schedTime (current hour)
    var schedTimeDiv = $("<div>")
    schedTimeDiv.addClass("col-2 col-md-1 hour text-center py-3")
    schedTimeDiv.text(times[i].schedTime)

    // 
    var textBox = $("<textarea>")
    textBox.addClass("col-8 col-md-10 description")
    textBox.attr("rows", "3")

    var saveButton = $("<button>")
    saveButton.addClass("btn saveBtn col-2 col-md-1")
    saveButton.attr("id", "save-button")
    saveButton.attr("aria-label", "save")

    var iEl = $("<i>")
    iEl.addClass("fas fa-save")
    iEl.attr("aria-hidden", "true")

    if (times[i].timeVal < currentHr) {
      divRow.addClass("past");
    } else if (times[i].timeVal == currentHr) {
      divRow.addClass("present");
    } else if (times[i].timeVal > currentHr) {
      divRow.addClass("future")
    }

    mDiv.append(divRow)

    divRow.append(schedTimeDiv, textBox, saveButton)
    saveButton.append(iEl);

    

  }
}

generateBlocks();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
