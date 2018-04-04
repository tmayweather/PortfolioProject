function openMenu(){
    document.getElementById("sideMenu").style.width ="450px";
    document.getElementById("pg-content").style.marginLeft = "450px";
}
function closeMenu(){
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("pg-content").style.marginLeft ="0";
}

// const errorFirst = document.getElementById("errorFirst");
// const errorLast = document.getElementById("errorLast");
//  document.getElementById('submit').addEventListener("click", function (e) {
//        let userFirst = document.getElementById('first').value;
//        let userLast = document.getElementById('last').value;        
//        let userEmail = document.getElementById('email').value;
//        let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//        if (userFirst == "" || userLast == "") {
//            e.preventDefault();
//           errorFirst.style.display = "block";
//           errorLast.style.display = "block";
//        } else if (userEmail == "" || !emailRegExp.test(userEmail)) {
//           e.preventDefault();
//             alert('Please enter a valid email');

//  }

//  });


//  const errorFirst = document.getElementById("errorFirst");
//  const errorLast = document.getElementById("errorLast");
//  const nodesArray = document.querySelectorAll("input");
//  nodesArray.forEach(function (inputs) {
//      document.getElementById('submit').addEventListener("click", function (e){
//         // clearErrors();
//         e.preventDefault();
//         if (inputs.value == "") {
//            errorFirst.style.display = "block";
//            errorLast.style.display = "block";
            
//         }

//   else if (nodesArray[0].value == "") {

// errorFirst.style.display = "block";
//      }
//      else if (nodesArray[1].value == "") {
//          errorLast.style.display = "block";
//      }
//  });
//  });


//  function clearErrors() {
//      nodesArray.prototype.forEach.call(
//          document.getElementById("errorFirst"),
//          function (el) {
//              el.style.display = "none";
//          }
//      );
//  }


// NodeList.prototype.forEach = Array.prototype.forEach;

// const inputs = document.querySelectorAll('input').forEach(function(inputs){
    
        
//     }
// }


// )

// console.log(inputs);

// function error() {
//     if (inputs == " ")
// }