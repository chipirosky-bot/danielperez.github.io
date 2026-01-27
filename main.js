var logo = document.querySelector(".logo");

var click = true

document.addEventListener("DOMContentLoaded", () => {
  logo = document.querySelector(".logo");

  if (!logo) return; // seguridad extra

//   if (window.matchMedia("(hover: none)").matches) {
  logo.addEventListener("click", () => {
      activeLogo()
  });

  logo.addEventListener("mouseenter", () => {
      activeLogo()
  });
  logo.addEventListener("mouseout", () => {
      activeLogo()
  });
  //}
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
        click = false;
    }
    else{
        logo.classList.remove("devolver");
        click = true;
    }
}