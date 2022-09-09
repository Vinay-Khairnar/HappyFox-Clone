const status = document.getElementById("ticket-form");
const bcgstatus = document.getElementById("bcg");

let displaForm = () => {
  if (status.style.display !== "none") {
    status.style.display = "none";
    bcgstatus.style.display = "none";
  } else {
    status.style.display = "block";
    bcgstatus.style.display = "block";
  }
};

document.getElementById("create").addEventListener("click", displaForm);



// let arr = [];
// let check = async (url) => {
//   let response = await fetch(url);
//   let result = await response.json();
//   arr = result;
// }



let post = () => {
  let contactDetail = {
    FullName: document.getElementById("name").value,
    Email: document.getElementById("email").value,
    PhoneNu: document.getElementById("phone").value,
    Level: document.getElementById("level").value,
    Building: document.getElementById("Building").value,
    pcid: document.getElementById("pcid").value,
    Department: document.getElementById("department").value,
  };
  const contactUrl = `https://happyfox-clone-database.herokuapp.com/Customers`;
  let ticketInfo = {
    FullName: document.getElementById("name").value,
    Email: document.getElementById("email").value,
    PhoneNu: document.getElementById("phone").value,
    Level: document.getElementById("level").value,
    Building: document.getElementById("Building").value,
    pcid: document.getElementById("pcid").value,
    Department: document.getElementById("department").value,
    category: document.getElementById("category").value,
    priority: document.getElementById("priority").value,
    dueDate: document.getElementById("dueDate").value,
    status: "New Ticket",
    cc: document.getElementById("cc").value,
    bcc: document.getElementById("bcc").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    assingto: document.getElementById("assignto").value
    
  };
  const ticketUrl = `https://happyfox-clone-database.herokuapp.com/AllTickets`;

  // if (arr.includes(contactDetail.FullName)) {
  //   alert("user alredy exit")
  // }
  // else {
    
    
  // }
  fetch(contactUrl, {
    method: "POST",
    body: JSON.stringify(contactDetail),
    headers: {
      "Content-type": "application/json",
    },
  });
  
  fetch(ticketUrl, {
    method: "POST",
    body: JSON.stringify(ticketInfo),
    headers: {
      "Content-type": "application/json",
    },
  });

displaForm()
};

document.getElementById("post").addEventListener("click", post);

let showsuggestion = () => {
  let value = document.getElementById("nem").value;
  if (value === "") {
    document.getElementById("suggestion").style.display = "none";
  } else {
    document.getElementById("suggestion").style.display = "block";
  }
};
document.getElementById("nem").addEventListener("input", showsuggestion);

let debounce = (fn, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

let debounceFun = debounce(showSuggestion, 500);
document.getElementById("nem").addEventListener("input", debounceFun);

function showSuggestion() {
  let val = document.getElementById("nem").value;
  const contactUrl = `https://happyfox-clone-database.herokuapp.com/Customers/?q=${val}`;
  let getsuggestion = async () => {
    let response = await fetch(contactUrl);
    let result = await response.json();
    // console.log(result);
    addsuggetion(result);
  };
  getsuggestion();
}

// ====================================================================================================================

let addsuggetion = (data) => {
  document.getElementById("suggestion").innerHTML = "";
  data.map((element) => {
    let li = document.createElement("li");
    li.innerText =
      element.FullName + " | " + element.Email + " | " + element.PhoneNu;
    li.addEventListener("click", function () {
      getId(element);
    });
    document.getElementById("suggestion").append(li);
  });
};

let getId = (data) => {
  // console.log(data);
  document.getElementById("name").value = data.FullName;
  document.getElementById("email").value = data.Email;
  document.getElementById("phone").value = data.PhoneNu;
  document.getElementById("level").value = data.Level;
  document.getElementById("Building").value = data.Building;
  document.getElementById("pcid").value = data.pcid;
  document.getElementById("department").value = data.Department;
};

// ====================================================================================================================
