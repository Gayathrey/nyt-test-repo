let entries = document.querySelectorAll(".pc-entry");

entries.forEach(function(element){
    element.addEventListener("click", clickHandler)
});

function clickHandler (event){
    //console.log(event.target);
    if(event.target.className == "pc-more"){
        //console.log("wayyy!");
        //event.target.previousElementSibling.style.maxHeight = "100em";
        //event.target.previousElementSibling.classList.toggle("exp");
        this.classList.toggle("exp");
    }
}

let menuBackground = document.querySelector("header .menu-bg");
window.setTimeout(function(){
    // menuBackground.style.background = "yellow";
    menuBackground.classList.add ("yellow");
}, 3000);
