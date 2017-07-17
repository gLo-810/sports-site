var button = document.getElementById("button");
var reset = document.getElementById("reset");
var tDisplay = document.getElementById("parent");
var userNames = ["Mayme",  
"Keeley",  
"Gilbert",  
"Willette", 
"Stacee",  
"Melynda",  
"Jerri",  
"Hassan", 
"Sage",  
"Melisa",  
"Lawana",  
"Era",  
"Venus",  
"Salena", 
"Eleni",  
"Raymond",  
"Fredricka",  
"Arianna",  
"Dexter",  
"Adella",  
"Bethanie",  
"Jonna",  
"Kizzie",  
"Dominica",  
"Renee",  
"Annamaria",  
"Ivette",  
"Londa",  
"Marnie",  
"Erika"  ];

// baseball teams
baseball.addEventListener("click", function baseball() {
  tDisplay.innerHTML = "";
for (var i = 1; i <= 30; i++) {
  var newDiv = document.createElement("div");
  var newImg = document.createElement("img");
  var userName = document.createElement("p");

  newDiv.className = "col-sm-2"
  newDiv.appendChild(newImg);
  newDiv.appendChild(userName);
  userName.textContent = userNames[Math.random() * i | 0];
  newImg.src = "images\\baseball\\team" + i + ".jpg";
  tDisplay.appendChild(newDiv);
}
});

// football football
football.addEventListener("click", function football() {
  tDisplay.innerHTML = "";

  for (var i = 1; i <= 32; i++) {
    var newDiv = document.createElement("div");
    var nestDiv = document.createElement("div"); // NEED TO NEST div within div to separate user names from teams 
    var newImg = document.createElement("img");
    var userName = document.createElement("p");

    newDiv.className = "col-sm-2"
    newDiv.appendChild(newImg);
    newDiv.appendChild(nestDiv);
    nestDiv.appendChild(userName);
    userName.textContent = userNames[Math.random() * i | 0];
    newImg.src = "images\\football\\team" + i + ".gif";
    tDisplay.appendChild(newDiv);
  }
});

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
});