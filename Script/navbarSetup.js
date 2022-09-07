import navbarcomponet from "../component/navbarcomponet.js"
import optDropDown from "../component/options-drpdown.js"
var data;
async function fetchData(){
    const res = await fetch("./cardInfoData.json");
     data = await res.json();
    

     //onclick show custom service
document.getElementById("cus-service").addEventListener("click",()=>{
    showCusService();
    document.body.classList.add('stopscroll');

})
function showCusService(){
    
    let optDropDownHtml = optDropDown(curService ,data.custom_service)
    let showdiv = document.createElement("div");
    showdiv.innerHTML = optDropDownHtml;
    document.getElementById("appendDropDown").innerHTML="";
    document.getElementById("appendDropDown").append(showdiv)

}

//onclick show it-support
document.getElementById("it-support").addEventListener("click",()=>{
    showItSupport();
    document.body.classList.add('stopscroll');

})
function showItSupport(){
    let optDropDownHtml = optDropDown(itSupport , data.itSupport)
    let showdiv = document.createElement("div");
    showdiv.innerHTML = optDropDownHtml;
    document.getElementById("appendDropDown").innerHTML="";
    document.getElementById("appendDropDown").append(showdiv)

}


//onclick show operations-support
document.getElementById("ope-support").addEventListener("click",()=>{
    showOpeSupport();
    document.body.classList.add('stopscroll');

})
function showOpeSupport(){
    let optDropDownHtml = optDropDown(opeSupport , data.Operation_Support)
    let showdiv = document.createElement("div");
    showdiv.innerHTML = optDropDownHtml;
    document.getElementById("appendDropDown").innerHTML="";
    document.getElementById("appendDropDown").append(showdiv)

}

   
}
fetchData();


//Json for drop downs.

const curService ={
    side1title : "For Support Teams",
    side1desc  : "Boost your support operations and ensure happy customers",
    side2title : "CUSTOMER STORY",
    side2imgLink : "https://assets.www.happyfox.com/v2/images/site-nav/menu-show-item-3.jpg",
    side2imgTitle : "HappyFox knows the next “big thing” in customer support",
    side2name : "Martin Hartvigsen",
    side2desc : "Director, Global Technical Support at Jabra GN"


}


const itSupport ={
    side1title : "For IT Teams",
    side1desc  : "Adopt advanced, modern, and unified support solutions for your IT team",
    side2title : "FEATURED",
    side2imgLink : "https://assets.www.happyfox.com/v2/images/site-nav/menu-show-item-2.jpg",
    side2imgTitle : "Top 7 HappyFox Features to Step Up Your IT Support Game",
    side2name : "",
    side2desc : ""


}


const opeSupport ={
    side1title : "For Operation Teams",
    side1desc  : "Optimize support for your HR, facilities, marketing, and sales teams with ease",
    side2title : "GETTING STARTED",
    side2imgLink : "https://assets.www.happyfox.com/v2/images/site-nav/menu-show-item-1.png",
    side2imgTitle : "Watch on demand",
    side2name : "",
    side2desc : ""


}

//appending navbar
let navbarAppend = navbarcomponet();
let navdiv = document.createElement("div");
navdiv.innerHTML=navbarAppend;
const oriNavabar = document.getElementById("navbar");
oriNavabar.append(navdiv);

//active effect
var header = document.getElementById("navbar-options");
var options = header.getElementsByClassName("options");

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    this.classList.add("active")
   
    
    
  });
}

