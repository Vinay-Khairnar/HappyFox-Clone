import card from "./card.js";

const optDropDown = (data , cardData) => {

  console.log(cardData);

  const print=()=>{
    return card(
      "SUPPORT",
      "https://assets.www.happyfox.com/v2/images/site-nav/menu-logo-helpdesk.svg",
      "Help Desk",
      "All-in-one help desk ticketing system to provide better support for your customers"
    )
  }





  return `<div id="nav-options-card-drp"  >
    <div id="nav-options-sidediv-1">
      <p>${data.side1title}</p>
      <p>${data.side1desc}</p>
    </div>
    <div id="nav-options-content">
    ${print()}
    ${print()}
    ${print()}

  
    
    </div>
    <div class="vertical-part-line"></div>

    <div id="nav-options-sidediv-2">
      <span class="light-title">${data.side2title}</span>
      <img
        width="257px"
        height="164px"
        src="${data.side2imgLink}"
        alt=""
      />
      <p id="sidediv-2-img-desc">
      ${data.side2imgTitle}
      </p>
      <p style="font-weight: 500">${data.side2name}</p>
      <p>${data.side2desc}</p>
    </div>
  </div>`;
};
export default optDropDown;
