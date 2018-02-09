/*var response = prompt ("What toppings would you like on your pizza? Type 'pepperoni', 'sausage' and/or 'pineapple.' Type 'cheese' if none of these.");

if (response === "pepperoni"){
  prompt ("Congratulations, you just chose the best pizza topping ever!");
}
else if (response === "cheese"){
  prompt ("Sorry, you just chose the most boring pizza topping that has ever existed.");
}

else if (response === "pineapple"){
  prompt ("Does pineapple actually belong on a pizza?");
}

else if (response === "pepperoni" && "pineapple") {
prompt ("You're adventurous. I like that!");
}

else if (response === "pepperoni" && "sausage") {
prompt ("Meat lovers unite!");
}

else{
  alert ("Please refresh and enter either 'pepperoni','cheese' or 'pineapple'.");
}*/


var response = prompt ("Hunter, you have just encountered a huge monster! What do you do? Type 'run', 'fight', or 'hide'. ");
if (response === "run") {
  alert ("You begin to run away. The monster chases you for a while, then decides it has better things to do.");
}


else if (response === "hide") {
var hider = prompt ("You hide in a bush and the monster is starting to lose your scent. Choose your next step. Type 'escape' or 'distract'.");
}

else if (response === "fight") {
var fighter = prompt ("Choose a weapon. Type 'great hammer', 'sword', or 'foam finger'.");
}


 if (hider === "escape"){
  alert ("You try to escape but the monster sees you and tears you to pieces.");
}

else if (hider === "distract"){
  alert ("You throw a rock to distact the monster. When it looks in the other direction, you run away.");
}


if (fighter === "sword") {
 }

 else if (fighter === "great hammer") {
 alert ("You pick up the mighty great hammer and deal a vicious blow. The monster falls over in pain.");
}
else if (fighter === "foam finger") {
  alert ("You pick up the foam finger and the monster laughs as it picks you up with it's mouth and devours you.");
  }

  else{
    alert ("Please refresh and try again");
  }
