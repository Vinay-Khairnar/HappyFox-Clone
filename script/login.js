var arr = JSON.parse(localStorage.getItem("rightmaindiv")) || [];

function submitOnEnter(e){
    event.preventDefault();
    var demo_data = {
        name: document.getElementById("visitor_name").value,
    }

    arr.push(demo_data);
    localStorage.setItem("rightmaindiv", JSON.stringify(arr));
    window.location.href="homepage.html"
}