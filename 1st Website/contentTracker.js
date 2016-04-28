  /* connects the HTML file to this JavaScript file 
    and defines the variables that are taken from the HTML file*/

  var gradeChoicesDropdown = document.getElementById('dropdown'),
    caInputBox = document.getElementById('inputBox'),
    compGeneratedResponse = document.getElementById('compResponse'),
    calculateButton = document.getElementById('submitButton');

  /*Event Listener tells the program that when the button is clicked, preform the function*/

  calculateButton.addEventListener('click', function(evt) {


    var userInput = caInputBox.value;
    var outcome = Math.round(56 - userInput); //This says to take the input that the user writes and subtract 56 from it
    if (gradeChoicesDropdown.value == "fresh") {
      compGeneratedResponse.innerHTML = 'You have ' + outcome + ' Content Assessments to pass to finish the year. <br> That means you have to pass about ' + Math.round(outcome / 23) + ' Content Assessment(s) per week to pass the year!';
    }
    else if (gradeChoicesDropdown.value == "soph") {
      compGeneratedResponse.innerHTML = 'You have ' + outcome + ' Content Assessments to pass to finish the year.<br> That means you have to pass about ' + Math.round(outcome / 23) + ' Content Assessment(s) per week to pass the year!';
    }
    else if (gradeChoicesDropdown.value == "jr") {
      var outcomeJr = Math.round(69 - userInput); //The 56 value has changed because the number of CAs for Juniors is more
      compGeneratedResponse.innerHTML = 'You have ' + outcomeJr + ' Content Assessments to pass to finish the year.<br> That means you have to pass about ' + Math.round(outcomeJr / 23) + ' Content Assessment(s) per week to pass the year!';
    }
    else if (gradeChoicesDropdown.value == "snr") {
      var outcomeSnr = Math.round(77 - userInput); //The 69 value has changed because the number of CAs for Seniors is more
      compGeneratedResponse.innerHTML = 'You have ' + outcomeSnr + ' Content Assessments to pass to finish the year. <br>That means you have to pass about ' + Math.round(outcomeSnr / 23) + ' Content Assessment(s) per week to pass the year!';

    }
    evt.preventDefault();
  }, false);