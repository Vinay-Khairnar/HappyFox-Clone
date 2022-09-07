
var header = document.getElementById("navbar-options");
var options = header.getElementsByClassName("options");

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active","show");
    this.classList.add("active","show")
   
    
    
  });
}


