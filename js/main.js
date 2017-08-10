var random = document.getElementById("random");
var reset = document.getElementById("reset");
var tDisplay = document.getElementById("parent");
var names = [];
var bGroup = document.getElementById("buttonGroup");

var textarea = document.querySelector('textarea');

function saveNames() {
  names = textarea.value.split('\n');
}

textarea.addEventListener('blur', saveNames, false);

// baseball teams
// baseball.addEventListener("click", function baseball() {
//   //   tDisplay.innerHTML = "";
//   // for (var i = 1; i <= 30; i++) {
//   //   var newDiv = document.createElement("div");
//   //   var newImg = document.createElement("img");
//   //   var userName = document.createElement("p");
//   //
//   //   newDiv.className = "col-sm-3 col-md-3 col-lg-2"
//   //   newDiv.appendChild(newImg);
//   //   newDiv.appendChild(userName);
//   //   userName.textContent =  names[Math.random() * i | 0];
//   //   newImg.src = "images\\baseball\\team" + i + ".jpg";
//   //   tDisplay.appendChild(newDiv);
//
//
// });

//});

// // football football
// football.addEventListener("click", function football() {
//
//   tDisplay.innerHTML = "";
//
//   for (var i = 1; i <= 32; i++) {
//     var newDiv = document.createElement("div");
//     var newImg = document.createElement("img");
//     var userName = document.createElement("p");
//
//     newDiv.className = "col-sm-3 col-md-3 col-lg-2"
//     newDiv.appendChild(newImg);
//     newDiv.appendChild(userName);
//     userName.textContent =  names[Math.random() * i | 0];
//     newImg.src = "images\\football\\team" + i + ".gif";
//     tDisplay.appendChild(newDiv);
//   }
// });

//create elements


bGroup.addEventListener("click", function images(e) {


  if (e.target.id !== "random") {
    tDisplay.innerHTML = "";

    for (var i = 1; i <=names.length; i++) {
      var newDiv = document.createElement("div");
      var newImg = document.createElement("img");
      var userName = document.createElement("p");

      newDiv.className = "col-sm-3 col-md-3 col-lg-2"
      newDiv.appendChild(newImg);
      newDiv.appendChild(userName);
      userName.textContent = names[Math.random() * i | 0];


      if (e.target.id === "baseball") {
        newImg.src = "images/baseball/team" + i + ".jpg";
      } else if (e.target.id === "football") {
        newImg.src = "images/football/team" + i + ".gif";
      }
      tDisplay.appendChild(newDiv);
    };
  } else {
    for (var i = 1; i <= tDisplay.children.length; i++) {
      tDisplay.appendChild(tDisplay.children[Math.random() * i | 0]);
      tDisplay.getElementsByTagName("p")[Math.random() * i | 0].textContent = names[Math.random() * i | 0];
    }
  }


});


// random the images
// random.addEventListener("click", function random() {
//   for (var i = 0; i < tDisplay.children.length; i++) {
//     tDisplay.appendChild(tDisplay.children[Math.random() * i | 0]);
//     tDisplay.getElementsByTagName("p")[Math.random() * i | 0].textContent = names[Math.random() * i | 0];
//   }
// });


// // reset images to default
// reset.addEventListener("click", function reset() {
//   tDisplay.innerHTML = "";
//
//   for (var i = 1; i <= 30; i++) {
//     var newDiv = document.createElement("div");
//     var newImg = document.createElement("img");
//     newDiv.className = "col-sm-1"
//     newDiv.appendChild(newImg);
//     newImg.src = "images\\baseball\\team" + i + ".jpg";
//     tDisplay.appendChild(newDiv);
//   }
// });
