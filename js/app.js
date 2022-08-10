alert("click me");
var card = document.querySelector(".card");
var front = document.getElementById("front");
var back = document.getElementById("back");
front.style.display = "none";
function faceChange() {
  card.classList.toggle("changed");

  if (front.style.display == "block") {
    front.style.display = "none";
    back.style.display = "block";
  } else if (front.style.display == "none") {
    back.style.display = "none";
    front.style.display = "block";
  }
}
