let btnMenu = document.querySelector("#btnMenu")
let menuContent = document.querySelector("#menuContent")

btnMenu.addEventListener("click",()=>{
    menuContent.classList.toggle("hide")
})
