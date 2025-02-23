window.addEventListener("DOMContentLoaded",()=>{
    const yrBoxes= document.querySelectorAll(".hyper_links_to_table");
    yrBoxes.forEach((box)=>{
        box.addEventListener("click",(e)=>{
            alert(e.currentTarget.dataset.id);
        })
    })
})