// Get references to the radio buttons and the section where the movie information will be displayed

var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var s5 = document.getElementById("s5");
var infos = document.getElementById("text-section");

// add event listener to radio buttons
var radioButtons = document.getElementsByName("slider");
radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    if (s1.checked) {
      infos.innerHTML =
        "<h1>Creed |||</h1><p>Adonis has been thriving in both his carrer and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than a fight.</p>";
    } else if (s2.checked) {
      infos.innerHTML =
        "<h1>Creed |</h1><p>Adonis has been thriving in both his carrer and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than a fight.</p>";
    } else if (s3.checked) {
      infos.innerHTML =
        "<h1>Creed |</h1><p>Adonis has been thriving in both his carrer and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than a fight.</p>";
    } else if (s4.checked) {
      infos.innerHTML =
        "<h1>Creed |||</h1><p>Adonis has been thriving in both his carrer and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than a fight.</p>";
    } else if (s5.checked) {
      infos.innerHTML =
        "<h1>Creed |||</h1><p>Adonis has been thriving in both his carrer and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than a fight.</p>";
    }
  });
});

// Each movie object has properties for each date, which are arrays of showtimes.

var subjectObject = {
    "Creed 3": {
      "4-23-2023": ["17:00", "19:00", "21:00"],
      "4-24-2023": ["17:00", "19:00", "21:00"],
      "4-25-2023": ["17:00", "19:00", "21:00"],
      "4-26-2023": ["17:00", "19:00", "21:00"],
      "4-27-2023": ["17:00", "19:00", "21:00"],
      "4-28-2023": ["17:00", "19:00", "21:00"],
      "4-29-2023": ["17:00", "19:00", "21:00"],


    },
    "Evil Dead Rise": {
      "4-23-2023": ["19:00", "21:30"],
      "4-24-2023":  ["19:00", "21:30"],
      "4-25-2023": ["19:00", "21:30"],
      "4-26-2023":  ["19:00", "21:30"],
      "4-27-2023":  ["19:00", "21:30"],
      "4-28-2023": ["19:00", "21:30"],
      "4-29-2023": ["19:00", "21:30"],
    },
    "Fast X": {
      "4-23-2023": ["17:00","18:00", "19:00", "20:00"],
      "4-24-2023": ["17:00","18:00", "19:00", "20:00"],
      "4-25-2023":["17:00","18:00", "19:00", "20:00"],
      "4-26-2023": ["17:00","18:00", "19:00", "20:00"],
      "4-27-2023":["17:00","18:00", "19:00", "20:00"],
      "4-28-2023": ["17:00","18:00", "19:00", "20:00"],
      "4-29-2023":["17:00","18:00", "19:00", "20:00"],
    },
    "John Wick: Chapter 4": {
      "4-23-2023":["19:00", "21:30"],
      "4-24-2023": ["19:00", "21:30"],
      "4-25-2023": ["19:00", "21:30"],
      "4-26-2023": ["19:00", "21:30"],
      "4-27-2023":["19:00", "21:30"],
      "4-28-2023": ["19:00", "21:30"],
      "4-29-2023": ["19:00", "21:30"],
    },
    "The Super Mario Bros": {
      "4-23-2023": ["13:00", "15:00", "17:00"],
      "4-24-2023": ["13:00", "15:00", "17:00"],
      "4-25-2023": ["13:00", "15:00", "17:00"],
      "4-26-2023": ["13:00", "15:00", "17:00"],
      "4-27-2023": ["13:00", "15:00", "17:00"],
      "4-28-2023":["13:00", "15:00", "17:00"],
      "4-29-2023": ["13:00", "15:00", "17:00"],
    },
    "Top Gun: Maverick": {
      "4-23-2023": ["17:00", "19:00", "21:00"],
      "4-24-2023": ["17:00", "19:00", "21:00"],
      "4-25-2023": ["17:00", "19:00", "21:00"],
      "4-26-2023": ["17:00", "19:00", "21:00"],
      "4-27-2023": ["17:00", "19:00", "21:00"],
      "4-28-2023": ["17:00", "19:00", "21:00"],
      "4-29-2023": ["17:00", "19:00", "21:00"],
    },
  };
  // When the window loads, populate the movie dropdown with the movies in the subjectObject
  // and set up event handlers for the movie and date dropdowns.
  window.onload = function () {
    var movieSel = document.getElementById("Movie");
    var dateSel = document.getElementById("Date");
    var timeSel = document.getElementById("Time");

    // Populate the movie dropdown with the movies in the subjectObject.
    // Add an option element for each movie.
    for (var x in subjectObject) {
      movieSel.options[movieSel.options.length] = new Option(x, x);
    }

    // Set up an onchange event handler for the movie dropdown.
    // When the user selects a movie, populate the date dropdown with the dates for that movie.
    movieSel.onchange = function () {
      timeSel.length = 1;
      dateSel.length = 1;
      // Populate the date dropdown with the dates for the selected movie.
      // Add an option element for each date.
      for (var y in subjectObject[this.value]) {
        dateSel.options[dateSel.options.length] = new Option(y, y);
      }
    };

    // Set up an onchange event handler for the date dropdown.
    // When the user selects a date, populate the showtime dropdown with the showtimes for that date and movie.
    dateSel.onchange = function () {
      //empty Chapters dropdown
      timeSel.length = 1;
      // Get the showtimes for the selected movie and date.
      // The showtimes are stored in an array in the subjectObject.
      var z = subjectObject[movieSel.value][this.value];

      // Populate the showtime dropdown with the showtimes for the selected movie and date.
      // Add an option element for each showtime.
      for (var i = 0; i < z.length; i++) {
        timeSel.options[timeSel.options.length] = new Option(z[i], z[i]);
      }
    };
  };