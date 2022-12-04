let menu = document.querySelector("#menu")
let close = document.querySelector("#close-menu")
let nav = document.querySelector("nav")

menu.addEventListener('click', ()=>{
    nav.style.display = 'flex'
})

close.addEventListener('click', ()=>{
    nav.style.display = 'none'
})
