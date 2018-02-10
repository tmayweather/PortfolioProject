var name = prompt('Hello! What is your name?');
var lastName = prompt("What is your last name?");
var output = document.querySelector('#greeting');

if (name) {
output.innerHTML = "<p>Thanks for visiting, " + name + ".</p>";
} else {
  output.innerHTML = "<p>Please tell us your name!</p>";
}
