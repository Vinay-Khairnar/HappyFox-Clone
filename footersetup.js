import {footer_upper} from "./footercomponent.js";

let firstfooter = document.createElement("div");
firstfooter.innerHTML=footer_upper();
document.getElementById("footer").append(firstfooter);


const fetchData = async()=>{
    const res = await fetch("./footer.json");
    const data = await res.json();

    appendData(data.Upper_footer);
}
fetchData();

const appendData = data =>{
    let col_1=document.getElementById("footercool-1");
    let col_2=document.getElementById("footercool-2");
    let col_3=document.getElementById("footercool-3");
    let col_4=document.getElementById("footercool-4");

    let t1 = document.createElement("h5")
    t1.innerHTML=data.FEATURES;
    let t2 = document.createElement("h5");
    t2.innerHTML=data.FOR_BUSINESSES;
    let t3 = document.createElement("h5");
    t3.innerHTML=data.FOR_INDUSTRIES;
    let t4 = document.createElement("h5");
    t4.innerHTML=data.FOR_TEAMS;
    let t5 = document.createElement("h5");
    t5.innerHTML=data.COMPARE;
    let t6 = document.createElement("h5");
    t6.innerHTML=data.USE_CASES;
    let t7 = document.createElement("h5");
    t7.innerHTML=data.RESOURCES;
    let t8 = document.createElement("h5");
    t8.innerHTML=data.COMPANY;
    let t9 = document.createElement("h5");
    t9.innerHTML=data.CONTACT_US;



    let l1 = document.createElement("ul")
    let l2 = document.createElement("ul")
    let l3 = document.createElement("ul")
    let l4 = document.createElement("ul")
    let l5 = document.createElement("ul")
    let l6 = document.createElement("ul")
    let l7 = document.createElement("ul")
    let l8 = document.createElement("ul")
    let l9 = document.createElement("ul")

    createList(l1,data.FEATURESarr);
    col_1.append(t1,l1);
    
    createList(l2,data.FOR_BUSINESSESarr);
    createList(l3,data.FOR_INDUSTRIESarr);
    createList(l4,data.FOR_TEAMSarr);
    createList(l5,data.COMPAREarr);
    col_2.append(t2,l2,t3,l3,t4,l4,t5,l5);

    createList(l6,data.USE_CASESarr);
    col_3.append(t6,l6);
    
    createList(l7,data.RESOURCESarr)
    createList(l8,data.COMPANYarr)
    createList(l9,data.CONTACT_USarr)
    col_4.append(t7,l7,t8,l8,t9,l9);


}

function createList(list , data){
    data.forEach(element => {
    
        let li = document.createElement("li")
        li.setAttribute("class","footer-col-options");
        li.innerText = element;
        list.append(li);
    });
}