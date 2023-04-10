// gives the current date at the top of the webpage
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

$(function () {

// parent div
var mDiv = $(".container-lg");

// current hour when you visit the webpage
var currentHr = dayjs().format("H");
console.log(currentHr);

// array of objects with times from 9am-5pm
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

function generateSchedule() {
  for (var i = 0; i < times.length; i++) {

    // creating div to hold the id (time block)
    var divRow = $("<div>");
    divRow.addClass("row time-block");
    divRow.attr("id", times[i].id);

    // creating div to hold schedTime (current hour)
    var schedTimeDiv = $("<div>")
    schedTimeDiv.addClass("col-2 col-md-1 hour text-center py-3")
    schedTimeDiv.text(times[i].schedTime)

    // user text box area
    var textBox = $("<textarea>")
    textBox.addClass("col-8 col-md-10 description")
    textBox.attr("rows", "3")

    // save button that will save to local storage
    var saveButton = $("<button>")
    saveButton.addClass("btn saveBtn col-2 col-md-1")
    saveButton.attr("id", "save-button")
    saveButton.attr("aria-label", "save")

    var iEl = $("<i>")
    iEl.addClass("fas fa-save")
    iEl.attr("aria-hidden", "true")

    // if else statement to change color of text boxes based on current time
    if (times[i].timeVal < currentHr) {
      divRow.addClass("past");
    } else if (times[i].timeVal == currentHr) {
      divRow.addClass("present");
    } else if (times[i].timeVal > currentHr) {
      divRow.addClass("future")
    }

    // appends the divs to the main page
    mDiv.append(divRow)

    divRow.append(schedTimeDiv, textBox, saveButton)
    saveButton.append(iEl);

    // event listener to save to local storage when clicking save button
    saveButton.on("click", function(event) {
      event.preventDefault();
      var userTextInput = $(this).siblings(".description").val();
      var hourId = $(this).parent().attr("id");

      localStorage.setItem(hourId, userTextInput);
    });

  }
}

generateSchedule();

// gets info from local storage to save user text input after refreshing or leaving the page
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))

});
