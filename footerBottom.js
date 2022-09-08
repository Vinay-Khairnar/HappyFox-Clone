import { footer_bottom } from "./footercomponent.js";


let secondfooter = document.createElement("div");
secondfooter.innerHTML=footer_bottom();
document.getElementById("footer").append(secondfooter)