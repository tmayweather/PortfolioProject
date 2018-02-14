var response = prompt ("Hunter, you have just encountered a huge monster! What do you do? Type 'run', 'fight', or 'hide'. ");


if (response === "run") {
              response = prompt ("You begin to run away. The monster chases you for a while, then starts to slow down. What do you do? Type 'slow down' or 'speed up'");
              if (response === "slow down") {
            response =  alert ("The monster sees that you slowed down and starts picking up speed towards you. He catches up to you and hands you a piece of cake");
          } else if  (response === "speed up") {
            response =  alert ("You summon the speed of Sonic The Hedgehog and quickly escape");
              }
        }


else if (response === "hide") {
response = prompt ("You hide in a bush and the monster is starting to lose your scent. Choose your next step. Type 'escape' or 'distract'.");
                if (response === "escape"){
                response =  alert ("You choose to escape and start to sneak away. As you sneak away the monster spots you and starts to cry. It just wanted to be friends!");
                }
                else if (response === "distract") {
                response =  alert ("You throw a rock to distact the monster. When it looks in the other direction, you run away.");
                }
          }

else if (response === "fight") {
response = prompt ("Choose a weapon. Type 'great hammer', 'sword', or 'foam finger'.");

              if (response === "sword") {
              response=  alert ("You pick the sword and slice the monster's leg. It slowly limps away");
               } else if (response === "great hammer") {
              response = alert ("You pick up the mighty great hammer and deal a vicious blow. The monster falls over in pain.");
              }
              else if (response === "foam finger") {
              response = alert ("You pick up the foam finger and the monster laughs as it picks you up with it's mouth and devours you.");
                }
          }
else{
  alert ("Please refresh and try again");
}
