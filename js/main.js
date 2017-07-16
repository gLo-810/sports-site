var button = document.getElementById("button");
var reset = document.getElementById("reset");
var tDisplay = document.getElementById("parent");

// create container containing teams
for (var i = 1; i <= 30; i++) {
  var newDiv = document.createElement("div");
  var newImg = document.createElement("img");
  newDiv.className = "col-sm-2"
  newDiv.appendChild(newImg);
  newImg.src = "images\\baseball\\team" + i + ".jpg";
  tDisplay.appendChild(newDiv);
}

// random the images var i = tDisplay.children.length; i >= 0; i--
button.addEventListener("click", function random() {
  for (var i = 0; i < tDisplay.children.length; i++) {
    tDisplay.appendChild(tDisplay.children[Math.random() * i | 0]);
  }
});

// reset images to default
reset.addEventListener("click", function reset() {
  tDisplay.innerHTML = "";

  for (var i = 1; i <= 30; i++) {
    var newDiv = document.createElement("div");
    var newImg = document.createElement("img");
    newDiv.className = "col-sm-2"
    newDiv.appendChild(newImg);
    newImg.src = "images\\baseball\\team" + i + ".jpg";
    tDisplay.appendChild(newDiv);
  }

  // document.getElementById("parent").innerHTML = "";
  // for (var i = 0; i < originalChildren.length; i++) {
  //   document.getElementById("parent").appendChild(originalChildren[i]);
  // }
});



// var divWimg = newDiv.appendChild(newImg);

// var team1 = document.getElementById("team1");
// var team2 = document.getElementById("team2");
// var team3 = document.getElementById("team3");
// var team4 = document.getElementById("team4");
// var team5 = document.getElementById("team5");
// var team6 = document.getElementById("team6");


// var pics = ["team1.jpg", "team2.jpg", "team3.jpg", "team4.jpg", "team5.jpg", "team6.jpg"];

// tDisplay.appendChild(newDiv);
//
// newDiv.appendChild(newImg);

//
// var teams = [team1, team2, team3, team4, team5, team6];


// button.addEventListener("click", function random() {
//
// //   var i = pics.length,
// //     rNum, temp;
// //
// //   // shuffle pictures using fisher yates
// //   while (--i > 0) {
// //     rNum = Math.floor(Math.random() * (i + 1));
// //     temp = pics[rNum];
// //     pics[rNum] = pics[i];
// //     pics[i] = temp;
// //   }
// //
//   // display images
//   for (var i = 0; i < teams.length; i++) {
//     teams[i].src = "images\\sports\\" + pics[i];
//   }
//
//
// });


// reset.addEventListener("click", function reset() {
//
//
//   // team1.src = "images\\sports\\team1.jpg";
//   // team2.src = "images\\sports\\team2.jpg";
//   // team3.src = "images\\sports\\team3.jpg";
//   // team4.src = "images\\sports\\team4.jpg";
//   // team5.src = "images\\sports\\team5.jpg";
//   // team6.src = "images\\sports\\team6.jpg";
// });
