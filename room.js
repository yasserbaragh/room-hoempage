// variables 

const room = document.querySelector(".room"),
      icon = document.querySelector(".bi"),
      menu = document.querySelector(".menu-mobile");

let overlay = document.createElement("div");
overlay.setAttribute("class", "");
room.appendChild(overlay);    
menu.onclick = function() {
    menu.parentElement.classList.toggle("nav");
    overlay.classList.toggle("overlay");
    icon.classList.toggle("bi-x")
}


    
