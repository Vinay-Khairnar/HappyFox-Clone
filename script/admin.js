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
    displayTickets(result);
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
      id,
    } = element;

    let maindiv = document.createElement("div");
    let upperdiv = document.createElement("div");
    let lowerdiv = document.createElement("div");
    let combinediv = document.createElement("div");
    let idof = document.createElement("p");

    let select = document.createElement("select");
    let opt1 = document.createElement("option");
    let opt2 = document.createElement("option");
    let opt3 = document.createElement("option");
    let opt4 = document.createElement("option");
    let opt5 = document.createElement("option");
    let opt6 = document.createElement("option");
    let opt7 = document.createElement("option");

    opt1.innerText = `${status}`;
    opt2.innerText = "Open";
    opt3.innerText = "On Hold";
    opt4.innerText = "Manager Review";
    opt5.innerText = "Solved";
    opt6.innerText = "Closed";
    opt7.innerText = "Reopend";

    opt1.setAttribute("value", "NewTicket");
    opt2.setAttribute("value", "Open");
    opt3.setAttribute("value", "On Hold");
    opt4.setAttribute("value", "Manager Review");
    opt5.setAttribute("value", "Solved");
    opt6.setAttribute("value", "Closed");
    opt7.setAttribute("value", "Reopend");

    // let status3 = document.getElementById("ticket-status").value;
    // console.log(status3);
    if (opt1.innerText === "New Ticket") {
      select.style.backgroundColor="#fda201"
    }
    if (opt1.innerText === "Open") {
      select.style.backgroundColor="#0373d3"
    }
    if (opt1.innerText === "On Hold") {
      select.style.backgroundColor="#a3a43b"
    }
    if (opt1.innerText === "Manager Review") {
      select.style.backgroundColor="#0984e3"
    }
    if (opt1.innerText === "Solved") {
      select.style.backgroundColor="#2ecc71"
    }
    if (opt1.innerText === "Closed") {
      select.style.backgroundColor="#737373"
    }
    if (opt1.innerText === "Reopend") {
      select.style.backgroundColor="#48dbfb"
    }

    idof.innerHTML = "id no" + id;
    combinediv.append(id, select);

    combinediv.setAttribute("id", "combinediv");

    select.append(opt1, opt2, opt3, opt4, opt5, opt6, opt7);

    // let btn = document.createElement("button");
    // btn.innerHTML=`${status}`

    let detailediv = document.createElement("div");
    detailediv.setAttribute("id", "detailediv");
    let h3 = document.createElement("h3");
    h3.innerText = `${subject}`;
    let p1 = document.createElement("p");
    p1.innerText = `${message}`;
    detailediv.append(h3, p1);

    upperdiv.append(combinediv, detailediv);
    select.setAttribute("id", "ticket-status");
    upperdiv.setAttribute("id", "upper-div");
    lowerdiv.setAttribute("id", "lower-div");

    lowerdiv.innerHTML = `
      
      <div id="imgdiv"><img height="20px" src="https://cdn-icons-png.flaticon.com/512/1274/1274860.png" alt=""> <img height="20px" src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt=""><img height="20" src="https://cdn-icons-png.flaticon.com/512/570/570223.png" alt=""></div>
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
        <h5 id ="priority-tag">${priority}</h5>
      </div>
      <div>
        <p>catogories</p>
        <h5>${category}</h5>
      </div>
      <div>
        <p>due date</p>
        <h5>${dueDate}</h5>
      </div>
      <div id='dot'>
       <img height="30px" width="40px" src="https://flyclipart.com/thumb2/reddot-icon-with-png-and-vector-format-for-free-unlimited-download-227617.png" alt="" />
      </div>  
      `;

    maindiv.setAttribute("id", "tickets");
    maindiv.append(upperdiv, lowerdiv);
    select.addEventListener("change", () => {
      changeStatus(element);
    });
    document.getElementById("all-tickets").append(maindiv);
   
  });
};

let changeStatus = (data) => {
  let id = data.id;
  let statusValue = document.getElementById("ticket-status").value;
  let patchUrl = `https://happyfox-clone-database.herokuapp.com/AllTickets/${id}`;

  fetch(patchUrl, {
    method: "PATCH",
    body: JSON.stringify({
      status: statusValue,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log(statusValue);
};

let filterByStatus = () => {
  console.log("object");
};

document.getElementById("all-status").addEventListener("click", filterByStatus);



// if(status)
