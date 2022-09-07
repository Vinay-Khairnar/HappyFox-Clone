
const card = (headTitle,imgSrc,title,desc)=>{
    return`<div class="nav-options-card">
    <span class="light-title">${headTitle}</span>
    <p class="card-icon-title">
        <img width="34" height="35" src=${imgSrc} alt="">
        <span class="card-title">${title}</span>
        <p class="card-body">${desc}</p>
    </p>
</div>`
}
export default card;
