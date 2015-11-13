// connects the HTML file to this JavaScript file

var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    dropdown = document.getElementById('dropdown');

form.addEventListener('submit', function(evt) {

// tells program what to do when each color value is selected

  var text = field.value;
  if (dropdown.value == "blue") {
    todo.innerHTML += '<div style= "color:blue;">' + text + '</div>';
  }
  else if (dropdown.value == "red") {
    todo.innerHTML += '<div style= "color:red;">' + text + '</div>';
  }
  else if (dropdown.value == "black") {
    todo.innerHTML += '<div style= "color:black;">' + text + '</div>';
  }
  else if (dropdown.value == "purple") {
    todo.innerHTML += '<div style= "color:purple;">' + text + '</div>';
  }
  else if (dropdown.value == "green") {
    todo.innerHTML += '<div style= "color:green;">' + text + '</div>';
  }
  evt.preventDefault();
}, false);

todo.addEventListener('click', function(evt) {
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
