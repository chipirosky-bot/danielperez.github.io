var logo = document.querySelector(".logo");
var noise = document.querySelector(".noise");
var head_box_content = document.querySelector(".head-box-content");
var click = true

document.addEventListener("DOMContentLoaded", () => {
    logo = document.querySelector(".logo");
    noise = document.querySelector(".noise");
    head_box_content = document.querySelector(".head-box-content");
    if (!logo) return; // seguridad extra
    if (!noise) return;
    if (!head_box_content) return;

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
        head_box_content.classList.toggle("glitch");
        click = false;
    }
    else{
        logo.classList.remove("devolver");
        noise.classList.toggle("oculto");
        head_box_content.classList.remove("glitch");
        click = true;
    }
}