var arr = JSON.parse(localStorage.getItem("group")) || [];

function signUp(e){
    event.preventDefault();
    var signup_data = {
        name: document.getElementById("visitor_name").value,
        email: document.getElementById("visitor_email").value,
        moNo: document.getElementById("visitor_mobile").value,
        companyname: document.getElementById("visitor_company").value,
        companysize: document.querySelector("company_size").value,
        industry: document.querySelector("industry").value,
        agent: document.querySelector("agent_count").value,
        region: document.querySelector("visitor_region").value,

    }

    arr.push(signup_data);
    localStorage.setItem("group", JSON.stringify(arr));
    window.location.href="/login/login.html"
}
