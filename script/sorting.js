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
  };
  check();
};

document.getElementById("sort").addEventListener("change", sortFunction);
