let displayDrop = () => {
    console.log("feature first");
  document.getElementById("parent").style.height="970px"
  document.getElementById("parent").style.display = "flex";
  document.getElementById("parent2").style.display = "block";

  
}

document.querySelector(".checkbtn").addEventListener("click", displayDrop);
