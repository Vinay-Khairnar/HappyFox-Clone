let fun3 = () => {
    console.log("resourcess third");
    document.getElementById("parent").style.height="450px"
    document.getElementById("parent").style.display = "flex";
    document.getElementById("parent2").style.display = "block";
  };
  document.querySelector(".click4").addEventListener("click", fun3);


// console.log("object");



let Resources = () => {
    document.getElementById("parent").innerHTML=""
    let resources = document.createElement("div")
    let features2 = document.createElement("div")

    resources.setAttribute("id","resources")
    features2.setAttribute("id","featur")


    let div1 = document.createElement("div")
    let div2 = document.createElement("div")



    let d1 = document.createElement("div")
    let d2 = document.createElement("div")
    let d3 = document.createElement("div")
    let d4 = document.createElement("div")
    let d5 = document.createElement("div")
    let d6 = document.createElement("div")

    let box = document.createElement("div")
    let subbox1 = document.createElement("div")
    subbox1.innerHTML=`<img src="https://assets.www.happyfox.com/v2/images/site-nav/3-hd.svg" alt="" />`
    let subbox2 = document.createElement("div")
    subbox2.innerHTML = `<h4>WEBINAR</h4>
    <p>Managing your Customer Support using Happyfox Helpd...</p> 
    <p style="margin-top:-10px"><span>Watch now</span><img id="arrow" height="12px" width="12px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a></p>`
    box.append(subbox1,subbox2)


    let box2 = document.createElement("div")
    let sub2box1 = document.createElement("div")
    sub2box1.innerHTML=`<img src="https://assets.www.happyfox.com/v2/images/site-nav/1-hd.jpg" alt="" />`
    let sub2box2 = document.createElement("div")
    sub2box2.innerHTML = `<h4>GUIDE</h4>
    <p>Helpdesk : A Complete Guide (2022)</p> 
    <p style="margin-top:-10px"><span>Read more</span><img id="arrow" height="12px" width="12px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a></p>`
    box2.append(sub2box1,sub2box2)
    
    let box3 = document.createElement("div")
    let sub3box1 = document.createElement("div")
    sub3box1.innerHTML=`<img src="https://assets.www.happyfox.com/v2/images/site-nav/2-hd.svg" alt="" />`
    let sub3box2 = document.createElement("div")
    sub3box2.innerHTML = `<h4>INFOGRAPHICS</h4>
    <p>An introduction to Omnichannel Help Desk Software</p> 
    <p style="margin-top:-10px"><span>Download now </span><img id="arrow" height="12px" width="12px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /> </a></p>`
    box3.append(sub3box1,sub3box2)
    

    features2.append(box, box2, box3)
    

    let id1 = document.createElement("div");
  id1.innerHTML = `<img height="15px" width="15px" src="./assets/asset 21.svg" alt="" />
      <div>
        <h5>E-book & Guides<img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
      <p>Resources to reinvent your coustomer service experice</p>
        </div>
      `;
  let id2 = document.createElement("div");
  id2.innerHTML = `<img height="15px" width="15px" src="./assets/asset 23.svg" alt="" />
      <div>
        <h5>Customer Strories <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
      <p>Thousand of companies call Happyfox a great friend</p>
        </div>
      `;
  let id3 = document.createElement("div");
  id3.innerHTML = `<img height="15px" width="15px" src="./assets/asset 25.svg" alt="" />
      <div>
        <h5>Support Center<img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
      <p>What can we help you with? Talk to our customer support</p>
        </div>
      `;
    
    div1.append(id1, id2, id3)
    

    let idv1 = document.createElement("div");
  idv1.innerHTML = `<img height="15px" width="15px" src="./assets/asset 22.svg" alt="" />
<div>
  <h5>Webinar <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
<p>Learn how to make the most of happyfox products</p>
  </div>
`;
  let idv2 = document.createElement("div");
  idv2.innerHTML = `<img height="15px" width="15px" src="./assets/asset 24.svg" alt="" />
<div>
  <h5>Videos <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
<p>Checkout our library of education video</p>
  </div>
`;
  let idv3 = document.createElement("div");
  idv3.innerHTML = `<img height="15px" width="15px" src="./assets/asset 26.svg" alt="" />
<div>
  <h5>Blog <img id="arrow" height="10px" width="13px" src="https://cdn-icons-png.flaticon.com/512/2889/2889731.png" alt="" /></h5>
<p>Learn tips, stories, and new techniques.</p>
  </div>
`;
    
    div2.append(idv1,idv2,idv3)
    resources.append(div1,div2)

    document.getElementById("parent").append(resources,features2)
}


document.querySelector(".click4").addEventListener("click", Resources);
