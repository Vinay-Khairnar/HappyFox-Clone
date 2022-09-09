
  
let fun2 = () => {
 
  
  document.getElementById("parent").style.height="570px"
  document.getElementById("parent").style.display = "flex";
  document.getElementById("parent2").style.display = "block";
};

document.querySelector(".click2").addEventListener("click", fun2);




let Solution = () => {
  document.getElementById("parent").innerHTML = "";
  document.getElementById(
    "parent"
  ).innerHTML = `<i class="fa-solid fa-diagram-venn"></i>`;
  let industries = document.createElement("div");
  industries.setAttribute("id", "industries");
  let business = document.createElement("div");
  business.setAttribute("id", "business");
  let title = document.createElement("h3");
  title.innerHTML=`INDUSTRIES`
  let idiv1 = document.createElement("div");
  let idiv2 = document.createElement("div");
  let idiv3 = document.createElement("div");

  let id1 = document.createElement("div");
  id1.innerHTML = `<img height="15px" width="15px" src="./assets/asset 11.svg" alt="" />
      <div>
        <h5>Education <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
      <p>Streamline your IT and Operation Support</p>
        </div>
      `;
  let id2 = document.createElement("div");
  id2.innerHTML = `<img height="15px" width="15px" src="./assets/asset 12.svg" alt="" />
      <div>
        <h5>IT Services <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
      <p>Provide the best IT support</p>
        </div>
      `;
  let id3 = document.createElement("div");
  id3.innerHTML = `<img height="15px" width="15px" src="./assets/asset 13.svg" alt="" />
      <div>
        <h5>Non Profit Organisation <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
      <p>Affordable help desk for efficient operation</p>
        </div>
      `;
  let id4 = document.createElement("div");
  id4.innerHTML = `<img height="15px" width="15px" src="./assets/asset 14.svg" alt="" />
      <div>
        <h5>Airlines <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
      <p>Elevate your customer services experice</p>
        </div>
      `;

  idiv1.append(id1, id2, id3, id4);
  // ====================================================================================================================================================================

  let idv1 = document.createElement("div");
  idv1.innerHTML = `<img height="15px" width="15px" src="./assets/asset 15.svg" alt="" />
<div>
  <h5>Retail <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
<p>Delight your customer with speedy support</p>
  </div>
`;
  let idv2 = document.createElement("div");
  idv2.innerHTML = `<img height="15px" width="15px" src="./assets/asset 16.svg" alt="" />
<div>
  <h5>Telecom <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
<p>Meet your SLAs and improve Retention</p>
  </div>
`;
  let idv3 = document.createElement("div");
  idv3.innerHTML = `<img height="15px" width="15px" src="./assets/asset 17.svg" alt="" />
<div>
  <h5>Healthcare <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
<p>Your all-in-one support stack</p>
  </div>
`;
  let idv4 = document.createElement("div");
  idv4.innerHTML = `<img height="15px" width="15px" src="./assets/asset 18.svg" alt="" />
<div>
  <h5>Real Estate <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
<p>Serve your agent and buyers better</p>
  </div>
`;

  idiv2.append(idv1, idv2, idv3, idv4);

  // ====================================================================================================================================================================

  let idd3 = document.createElement("div");
  idd3.innerHTML = `<img height="15px" width="15px" src="./assets/asset 19.svg" alt="" />
<div>
  <h5>Travel <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
<p>Delever Multi-Channel Customer Service </p>
  </div>
`;
  let idd4 = document.createElement("div");
  idd4.innerHTML = `<img height="15px" width="15px" src="./assets/asset 20.svg" alt="" />
<div>
  <h5>Government <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
<p>Robust support solution for public sector</p>
  </div>
`;

  idiv3.append(idd3, idd4);

  // ====================================================================================================================================================================

  let h3f = document.createElement("h3");
  h3f.innerText = "BUSINESS";
  let ul1 = document.createElement("ul");
  let li11 = document.createElement("li");
  let li21 = document.createElement("li");
  li11.innerHTML = `<a href=""><img height="15px" width="15px" src="https://assets.www.happyfox.com/v2/images/site-nav/enterprise-icon.svg" alt="" />HappyFox Chat <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  li21.innerHTML = `<a href=""><img height="15px" width="15px"  src="https://assets.www.happyfox.com/v2/images/site-nav/smal-business-icon.svg" alt="" />Salesforce <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  ul1.append(li11, li21);

  let h3s = document.createElement("h3");
  h3s.innerText = "TEAMS";

  let ul = document.createElement("ul");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");
  let li4 = document.createElement("li");
  let li5 = document.createElement("li");
  let li6 = document.createElement("li");

  li1.innerHTML = `<a href=""><img height="15px" width="15px" src="https://assets.www.happyfox.com/v2/images/site-nav/hr-int-icon.svg" alt="" />HappyFox Chat <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  li2.innerHTML = `<a href=""><img height="15px" width="15px"  src="https://assets.www.happyfox.com/v2/images/site-nav/facilities-int-icon.svg" alt="" />Salesforce <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  li3.innerHTML = `<a href=""><img height="15px" width="15px" src="https://assets.www.happyfox.com/v2/images/site-nav/marketing-int-icon.svg" alt="" />Aircall Chat <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  li4.innerHTML = `<a href=""><img height="15px" width="15px" src="https://assets.www.happyfox.com/v2/images/site-nav/it-int-icon.svg" alt="" />Microsoft Team <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  li5.innerHTML = `<a href=""><img height="15px" width="15px" src="https://assets.www.happyfox.com/v2/images/site-nav/it_support_icon.svg" alt="" />Slack <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;
  li6.innerHTML = `<a href=""><img height="15px" width="15px" src="https://assets.www.happyfox.com/v2/images/site-nav/customer-int-icon.svg" alt="" />Facebook <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a>`;

  ul.append(li1, li2, li3, li4, li5, li6);

  // ====================================================================================================================================================================

  business.append(h3f, ul1, h3s, ul);

  industries.append( idiv1, idiv2, idiv3);
  document.getElementById("parent").append(industries, business);
};
document.querySelector(".click2").addEventListener("click", Solution);
