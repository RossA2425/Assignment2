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
        "<h1>Fire Of Love</h1><p> A woman's life takes an unexpected turn when she comes into the limelight thanks to a photographer. However, he expects something in return for his efforts.</p>";
    } else if (s2.checked) {
      infos.innerHTML =
        "<h1>Aftersun </h1><p>Twenty years after their last holiday at a fading vacation resort, Sophie reflects on the rare time spent with her loving and idealistic father Calum. At 11-years-old, as the world of adolescence creeps into Sophie's view, Calum struggles under the weight of life outside of fatherhood. Sophie's recollections become a powerful and heartrending portrait of their relationship, as she tries to reconcile the father she knew with the man she didn't.</p>";
    } else if (s3.checked) {
      infos.innerHTML =
        "<h1>One Fine Morning </h1><p>A young single mother raising an 8-year-old daughter struggles to take care of her father, who's been diagnosed with a neurodegenerative disease. While trying to secure a decent nursing home, she runs into a married friend and they begin an affair.</p>";
    } else if (s4.checked) {
      infos.innerHTML =
        "<h1>The Grand Budapest Hotel</h1><p>Gustave H, a concierge, is wrongly framed for murder at the Grand Budapest Hotel. In the process of proving his innocence, he befriends a lobby boy.</p>";
    } else if (s5.checked) {
      infos.innerHTML =
        "<h1>Mirror</h1><p>Using a nonlinear structure interlaced with dreams and flashbacks, director Andrei Tarkovsky creates a stream-of-consciousness meditation on war, memory and time that draws heavily on events from his own life. Tarkovsky's film alter ego is Alexei (Ignat Daniltsev), a dying man in his 40s whose commonplace interactions with his wife (Margarita Terekhova) and children summon up a host of memories, ranging from his parents' divorce to his time on the battlefields of World War II.</p>";
    }
  });
});

// Each movie object has properties for each date, which are arrays of showtimes.

var subjectObject = {
    "Fire of Love": {
      "Monday": ["17:30", "19:00", "20:00"],
      "Tuesday": ["17:30", "19:00", "20:00"],
      "Wednesday": ["17:00", "18:30", "20:00"],
      "Thursday": ["17:00", "18:30", "20:00"],
      "Friday": ["12:00", "15:00", "18:30", "22:30"],
      "Saturday": ["12:00", "15:00", "18:30", "22:30"],
      "Sunday": ["12:00", "15:00", "18:30", "21:30"],


    },
    "Aftersun": {
      "Monday": ["19:00", "20:30"],
      "Tuesday": ["17:30","21:00"],
      "Wednesday": ["18:30", "21:00"],
      "Thursday": ["17:00", "19:00", "21:00"],
      "Friday": ["12:00", "15:00", "22:30"],
      "Saturday": ["11:30", "22:30"],
      "Sunday": ["11:30", "15:00", "18:30"],
    },

    "One Fine Morning": {
      "Monday": ["17:00", "19:00", "20:30"],
      "Tuesday": ["17:00", "18:30", "20:30"],
      "Wednesday": ["18:30", "20:00"],
      "Thursday": ["17:30","20:30"],
      "Friday": ["12:00", "15:00", "22:30"],
      "Saturday": ["11:30", "16:00", "22:30"],
      "Sunday": ["11:30", "15:00", "22:30"],
    },

    "The Grand Budapest Hotel": {
      "Monday": ["17:30", "19:00", "21:00"],
      "Tuesday": ["17:40", "18:50", "20:30"],
      "Wednesday": ["18:30", "20:00"],
      "Thursday": ["19:30","21:00"],
      "Friday": ["12:00", "15:00", "17:55", "22:30"],
      "Saturday": ["11:30", "16:00", "22:30", ],
      "Sunday": ["11:30", "15:00", "22:45"],
    },
    
    "Mirror": {
      "Monday": ["17:30","20:30"],
      "Tuesday": ["17:00", "18:30", "20:00"],
      "Wednesday": ["17:00", "18:30", "20:30"],
      "Thursday": ["17:00", "19:00", "21:00"],
      "Friday": ["12:00", "15:00", "22:30"],
      "Saturday": ["11:30", "16:00", "22:30"],
      "Sunday": ["11:30", "15:00", "19:30"],
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