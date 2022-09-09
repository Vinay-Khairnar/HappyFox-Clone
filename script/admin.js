import { fetchData } from "../utility/getData.js";
let url = `https://happyfox-clone-database.herokuapp.com/AllTickets`;

fetchData(url).then((res) => {
  // console.log(res);
  displayTickets(res);
});


// ================================================================================================


let sortFunction = () => {
  let val = document.getElementById("sort").value;
  let key = "id";
  let ord = "asc";

  if (val === "nto") {
    key = "id";
    ord = "asc";
  } else if (val === "otn") {
    key = "id";
    ord = "desc";
  } else if (val === "ltc") {
    key = "priority";
    ord = "asc";
  } else if (val === "ctl") {
    key = "priority";
    ord = "desc";
  }

  console.log(key, ord);
  let url = `https://happyfox-clone-database.herokuapp.com/AllTickets?_sort=${key}&_order=${ord}`;
  let check = async () => {
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
    displayTickets(result)
  };
  check();
};

document.getElementById("sort").addEventListener("change", sortFunction);





// ================================================================================================





let displayTickets = (data) => {
  document.getElementById("all-tickets").innerHTML = "";
  data.map((element) => {
    let {
      FullName,
      category,
      priority,
      dueDate,
      status,
      subject,
      message,
      assingto,
    } = element;

    let maindiv = document.createElement("div");
    let upperdiv = document.createElement("div");
    let lowerdiv = document.createElement("div");




    let btn = document.createElement("button");
    btn.innerHTML=`${status}`
    let h3 = document.createElement("h3");
    h3.innerText=`${subject}`
    let p1 = document.createElement("p");
    p1.innerText=`${message}`


    upperdiv.append(btn, h3, p1)
    btn.setAttribute("id", "ticket-status");
    upperdiv.setAttribute("id", "upper-div")
    lowerdiv.setAttribute("id","lower-div")

    lowerdiv.innerHTML = `
      
      <div><img src="https://cdn-icons-png.flaticon.com/512/1274/1274860.png" alt=""> <img  src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt=""><img src="https://cdn-icons-png.flaticon.com/512/570/570223.png" alt=""></div>
      <div>
        <p>assignee</p>
        <h5>${assingto}</h5>
      </div>
      <div>
        <p>raised by</p>
        <h5>${FullName}</h5>
      </div>
      <div>
        <p>priority</p>
        <h5>${priority}</h5>
      </div>
      <div>
        <p>catogories</p>
        <h5>${category}</h5>
      </div>
      <div>
        <p>due date</p>
        <h5>${dueDate}</h5>
      </div>
      <div>
        <div id="dot"></div>
      </div>  
      `;

    maindiv.setAttribute("id", "tickets");
    maindiv.append(upperdiv,lowerdiv);

    document.getElementById("all-tickets").append(maindiv);
  });
};


