/* connects the HTML file to this JavaScript file 
and defines the variables that are taken from the HTML file*/

var todo = document.getElementById('planner'),
  form = document.getElementById('myform'),
  newItemInput = document.getElementById('newitem'),
  dropdownColorOptions = document.getElementById('dropdown'),
  dropdownSubjectOptions = document.getElementById('dropdown2'),
    mathTasks = document.getElementById('mathSection'),
    scienceTasks = document.getElementById('scienceSection'),
    historyTasks = document.getElementById('historySection'),
    englishTasks = document.getElementById('englishSection'),
    foreignLangTasks = document.getElementById('foreignLanguageSection');


//tells program what to do when each subject value is selected
/*Event Listener tells the program that when the button is clicked, preform the function*/
form.addEventListener('submit', function(evt) {
  var text = newItemInput.value;
  
  if(dropdownSubjectOptions.value == "math") {
    mathTasks.innerHTML += '<p style="color:' + dropdownColorOptions.value + '">' + text + '</p>';
  }
  else if(dropdownSubjectOptions.value == "science") {
    scienceTasks.innerHTML += '<p style="color:' + dropdownColorOptions.value + '">' + text + '</p>';
  }
  else if(dropdownSubjectOptions.value == "history") {
    historyTasks.innerHTML += '<p style="color:' + dropdownColorOptions.value + '">' + text + '</p>';
  }
  else if(dropdownSubjectOptions.value == "english") {
    englishTasks.innerHTML += '<p style="color:' + dropdownColorOptions.value + '">' + text + '</p>';
  }
  else if(dropdownSubjectOptions.value == "foreignLang") {
    foreignLangTasks.innerHTML += '<p style="color:' + dropdownColorOptions.value + '">' + text + '</p>';
  }
  
  evt.preventDefault();
}, false);



mathTasks.addEventListener('click', function(evt) {
  var tar = evt.target;
  // tells that if text is clicked it should have a strikethrough and dissappear next click

  if (tar.style.textDecoration === "line-through") {
    tar.parentNode.removeChild(tar);
  }
  else {
    tar.style.textDecoration = "line-through";
  }

  evt.preventDefault();
}, false);


scienceTasks.addEventListener('click', function(evt) {
  var tar = evt.target;
  // tells that if text is clicked it should have a strikethrough and dissappear next click

  if (tar.style.textDecoration === "line-through") {
    tar.parentNode.removeChild(tar);
  }
  else {
    tar.style.textDecoration = "line-through";
  }

  evt.preventDefault();
}, false);


historyTasks.addEventListener('click', function(evt) {
  var tar = evt.target;
  // tells that if text is clicked it should have a strikethrough and dissappear next click

  if (tar.style.textDecoration === "line-through") {
    tar.parentNode.removeChild(tar);
  }
  else {
    tar.style.textDecoration = "line-through";
  }

  evt.preventDefault();
}, false);


englishTasks.addEventListener('click', function(evt) {
  var tar = evt.target;
  // tells that if text is clicked it should have a strikethrough and dissappear next click

  if (tar.style.textDecoration === "line-through") {
    tar.parentNode.removeChild(tar);
  }
  else {
    tar.style.textDecoration = "line-through";
  }

  evt.preventDefault();
}, false);


foreignLangTasks.addEventListener('click', function(evt) {
  var tar = evt.target;
  // tells that if text is clicked it should have a strikethrough and dissappear next click

  if (tar.style.textDecoration === "line-through") {
    tar.parentNode.removeChild(tar);
  }
  else {
    tar.style.textDecoration = "line-through";
  }

  evt.preventDefault();
}, false);