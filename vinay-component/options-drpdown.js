import card from "./card.js";

const optDropDown = (data, cardData) => {
  let print="";
  function appentCards(){
  for(let i=0 ; i<cardData.length ; i++)
   print += card(
       cardData[i].firstTitle,
       cardData[i].icon_link_src,
       cardData[i].mainTitle,
       cardData[i].card_desc
     );
  }
  appentCards();

  let datoToRetun = `<div id="nav-options-card-drp"  >
    <div id="nav-options-sidediv-1">
      <p>${data.side1title}</p>
      <p>${data.side1desc}</p>
    </div>
    <div id="nav-options-content">
    ${print}
    </div>
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

  return datoToRetun;
};
export default optDropDown;
