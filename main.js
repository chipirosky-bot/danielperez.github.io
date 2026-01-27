var logo = document.querySelector(".logo");
var noise = document.querySelector(".noise")
var click = true

document.addEventListener("DOMContentLoaded", () => {
    logo = document.querySelector(".logo");
    noise = document.querySelector(".noise")
    if (!logo) return; // seguridad extra
    if (!noise) return;
    const isTouchDevice = window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) {
        logo.addEventListener("click", () => {
            activeLogo()
        });
    } else {
        logo.addEventListener("mouseenter", () => {
            activeLogo()
        });
        logo.addEventListener("mouseout", () => {
            activeLogo()
        });
    }
    
});


// document.addEventListener("click", (e) => {
//   if (!logo.contains(e.target)) {
//     logo.classList.remove("active");
//     click = true;
//   }
// });

function activeLogo() {
    if (click){
        logo.classList.toggle("devolver");
        noise.classList.remove("oculto");
        click = false;
    }
    else{
        logo.classList.remove("devolver");
        noise.classList.toggle("oculto");
        click = true;
    }
}