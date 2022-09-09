

  const status = document.getElementById("parent");
 const  bcgstatus = document.getElementById("parent2");

let fun = () => {
  document.getElementById("parent").style.height = "570px"
  
 if (status.style.display !== "none") {
    status.style.display = "none";
    bcgstatus.style.display = "none";
  } else {
    status.style.display = "flex";
    bcgstatus.style.display = "block";
  }
  // document.getElementById("parent").style.display = "flex";
  // document.getElementById("parent2").style.display = "block";
};

document.querySelector(".click1").addEventListener("click", fun);


let Features = () => {
  document.getElementById("parent").innerHTML = "";
  let overview = document.createElement("div");
  overview.setAttribute("id", "overview");
  let features = document.createElement("div");
  features.setAttribute("id", "features");
  let integration = document.createElement("div");
  integration.setAttribute("id", "integration");
  overview.innerHTML = `<h3>OVERVIEW</h3>`;



  let odiv1 = document.createElement("div");
  odiv1.innerHTML = `<img height="15px" width="15px" src="./assets/asset 2.svg" alt="" />
    <div>
      <h5>Help Desk Tour  <img id="arrow"  height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
    <p>Provide Faster and better Support for Your Custumer</p>
      </div>
    `;

  let odiv2 = document.createElement("div");
  odiv2.innerHTML = `<img height="15px" width="15px" src="./assets/asset 3.svg" alt="" />
    <div>
      <h5>Get a Demo <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
    <p>See Happy fox Helpdesk in action</p>
      </div>
    `;

  overview.append(odiv1, odiv2);



  
  let titlediv = document.createElement("h3");
  titlediv.innerHTML="FEATURES"

  let parenttempdiv=document.createElement("div")
  let tempdiv1 = document.createElement("div");
  tempdiv1.setAttribute("id", "tempdiv");

  let tempdiv2 = document.createElement("div");
  tempdiv2.setAttribute("id", "tempdiv");

  let fdiv1 = document.createElement("div");
  fdiv1.innerHTML = `<img height="15px" width="15px" src="./assets/asset 4.svg" alt="" />
    <div>
      <h5>Ticketing System <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
    <p>Provide Faster and better Support for Your Custumer</p>
      </div>
    `;
  let fdiv2 = document.createElement("div");
  fdiv2.innerHTML = `<img height="15px" width="15px" src="./assets/asset 6.svg" alt="" />
    <div>
      <h5>Connect Actions <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
    <p>Provide Faster and better Support for Your Custumer</p>
      </div>
    `;
  let fdiv3 = document.createElement("div");
  fdiv3.innerHTML = `<img height="15px" width="15px" src="./assets/asset 8.svg" alt="" />
    <div>
      <h5>Task Management <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
    <p>Provide Faster and better Support for Your Custumer</p>
      </div>
    `;
  let fdiv4 = document.createElement("div");
  fdiv4.innerHTML = `<img height="15px" width="15px" src="./assets/asset 10.svg" alt="" />
    <div>
      <h5>Help Desk Reports <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
    <p>Provide Faster and better Support for Your Custumer</p>
      </div>
    `;
  
  
  tempdiv1.append(fdiv1, fdiv2, fdiv3, fdiv4);


  let fdiv5 = document.createElement("div");
  fdiv5.innerHTML = `<img height="15px" width="15px" src="./assets/asset 5.svg" alt="" />
    <div>
      <h5>Knowledge Base <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
    <p>Provide Faster and better Support for Your Custumer</p>
      </div>
    `;
  let fdiv6 = document.createElement("div");
  fdiv6.innerHTML = `<img height="15px" width="15px" src="./assets/asset 7.svg" alt="" />
    <div>
      <h5>Automation <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
    <p>Provide Faster and better Support for Your Custumer</p>
      </div>
    `;
  let fdiv7 = document.createElement("div");
  fdiv7.innerHTML = `<img height="15px" width="15px" src="./assets/asset 9.svg" alt="" />
    <div>
      <h5>Satisfaction Servey <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
    <p>Provide Faster and better Support for Your Custumer</p>
      </div>
    `;
  let fbtn = document.createElement("button");
  fbtn.innerHTML = `See More Features <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" />`;

  tempdiv2.append(fdiv5, fdiv6, fdiv7, fbtn);
  
  parenttempdiv.append(tempdiv1, tempdiv2);
  features.append(titlediv,parenttempdiv)

  integration.innerHTML = "<h3>INTEGRATION</h3>";

  let ul = document.createElement("ul");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");
  let li4 = document.createElement("li");
  let li5 = document.createElement("li");
  let li6 = document.createElement("li");
  let li7 = document.createElement("li");

  li1.innerHTML = `<a href=""><img height="15px" width="15px" src="https://play-lh.googleusercontent.com/iNaa3q4ZecyavIWIbHahVPJFyBpWEk20PpFTyheFdWXlkV7SZnTVcI2hdaJog-X5Lw" alt="" />HappyFox Chat <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  li2.innerHTML = `<a href=""><img height="15px" width="20px"  src="https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2015/08/TrustLogoWhite.png" alt="" />Salesforce <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  li3.innerHTML = `<a href=""><img height="15px" width="15px" src="https://cyclr.com/wp-content/uploads/2022/01/Aircall-A@3x.png" alt="" />Aircall Chat <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  li4.innerHTML = `<a href=""><img height="15px" width="15px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" alt="" />Microsoft Team <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  li5.innerHTML = `<a href=""><img height="15px" width="15px" src="https://cdn-icons-png.flaticon.com/512/2762/2762451.png" alt="" />Slack <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  li6.innerHTML = `<a href=""><img height="15px" width="25px" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />Facebook <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  li7.innerHTML = `<a href=""><img height="15px" width="25px" src="https://image.pngaaa.com/563/3886563-middle.png" alt="" />Shopify <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;

  ul.append(li1, li2, li3, li4, li5, li6, li7);
  let intBtn = document.createElement("button");
  intBtn.innerHTML = `See More Integration <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" />`;
  integration.append(ul, intBtn);
  document.getElementById("parent").append(overview, features, integration);
};
document.querySelector(".click1").addEventListener("click", Features);




document.getElementById("xyz").innerHTML=`<img src="./assets/asset 21.svg" alt="" />`