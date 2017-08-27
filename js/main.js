var random = document.getElementById("random");
var reset = document.getElementById("reset");
var tDisplay = document.getElementById("parent");
var names = [];
var bGroup = document.getElementById("buttonGroup");

var textarea = document.querySelector('textarea');

function saveNames() {
  names = textarea.value.split('\n');
}

// save names to array, no submit button
textarea.addEventListener('blur', saveNames, false);


//button behavoir
bGroup.addEventListener("click", function images(e) {


  if (e.target.id !== "random") {
    tDisplay.innerHTML = "";

    for (var i = 0; i < names.length; i++) {
      var newDiv = document.createElement("div");
      var newImg = document.createElement("img");
      var userName = document.createElement("p");

      newDiv.className = "col-sm-3 col-md-3 col-lg-2"
      newDiv.appendChild(newImg);
      newDiv.appendChild(userName);
      userName.textContent = names[i];


      if (e.target.id === "baseball") {
        newImg.src = "images/baseball/team" + i + ".jpg";
      } else if (e.target.id === "football") {
        newImg.src = "images/football/team" + i + ".gif";
      }
      tDisplay.appendChild(newDiv);
    };
  } else {
    for (var i = 1; i <= tDisplay.children.length; i++) {
      var tdLength = tDisplay.children.length;
      tDisplay.appendChild(tDisplay.children[Math.random() * tdLength | 0]);
      tDisplay.getElementsByTagName("p")[Math.random() * tdLength | 0].textContent = names[Math.random() * tdLength | 0];

    }
  }


});
