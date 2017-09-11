var random = document.getElementById("random");
var reset = document.getElementById("reset");
var tDisplay = document.getElementById("parent");
var bGroup = document.getElementById("buttonGroup");
var dBtn = document.getElementById("display");
var rBaseball = document.getElementById('baseball');
var rFootball = document.getElementById('football');
var names = [];
var numbers; //Array.from({length:names.length}).map((_,i)=>i); //creates a numbers array that is the same length as the names array, for indexing.



var textarea = document.querySelector('textarea');

// save names without submitting
function saveNames() {
  names = textarea.value.split('\n');
  numbers = Array.from({length:names.length}).map((_,i)=>i); //creates a numbers array that is the same length as the names array, for indexing.
}
// save names to array, no submit button
textarea.addEventListener('blur', saveNames, false);


// shuffle arrays
function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}


function newEls() {
  tDisplay.innerHTML = "";
  names.forEach(function(name, i) {

        var newDiv = document.createElement("div");
        var newImg = document.createElement("img");
        var userName = document.createElement("p");

        newDiv.className = "col-sm-3 col-md-3 col-lg-2"
        newDiv.appendChild(newImg);
        newDiv.appendChild(userName);
        userName.textContent = name;

        if (rBaseball.checked) {
               newImg.src = "images/baseball/team" + numbers[i] + ".jpg";
             } else if (rFootball.checked) {
               newImg.src = "images/football/team" + numbers[i] + ".gif";
             }
             tDisplay.appendChild(newDiv);

  });
}

// display images before random
dBtn.addEventListener("click", function images() {
    newEls();
});




// // button behavoir
//  bGroup.addEventListener("click", function images(e) {
//
//       if (e.target.id === "baseball") {
//         newImg.src = "images/baseball/team" + i + ".jpg";
//       } else if (e.target.id === "football") {
//         newImg.src = "images/football/team" + i + ".gif";
//       }
//        tDisplay.appendChild(newDiv);
//     });
//   } else {
//     for (var i = 1; i <= tDisplay.children.length; i++) {
//       var tdLength = tDisplay.children.length;
//       tDisplay.appendChild(tDisplay.children[Math.random() * tdLength | 0]);
//       tDisplay.getElementsByTagName("p")[Math.random() * tdLength | 0].textContent = names[Math.random() * tdLength | 0];
//
//     }
//   }
// });
