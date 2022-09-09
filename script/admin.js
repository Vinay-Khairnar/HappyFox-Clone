import { fetchData } from "../utility/getData.js";
let url = `https://happyfox-clone-database.herokuapp.com/AllTickets`

fetchData(url).then (res => {
    console.log(res);
    displayTickets(res);
})


let displayTickets = (data) => {
    document.getElementById("all-tickets").innerHTML=""
    data.map((element) => {
        let { FullName,category,priority,dueDate,status,subject,message,assingto} = element;

        let div = document.createElement("div");
        div.innerHTML=`<div id="upper-div">
        <div><button>${status}</button>
          <h3>${subject}</h3>
          <p>${message}</p>
        </div>  
      </div>
      <div id="lower-div">
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
      </div>`
        
        div.setAttribute("id", "tickets")
        
        document.getElementById("all-tickets").append(div);
    })
}

